import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import OutlinedInput from '@mui/material/OutlinedInput';
import { baseUrl } from '../constant';
import validator from 'validator';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import localforage from 'localforage';

export default function UserProfile() {

  const [isOpen, setOpen] = useState(false);
  const [userData, setUserData] = useState({});
  const [password, setPassword] = useState({
    new: '',
    confirm: '',
  })
  const [validationText, setValidationText] = useState({});
  const [passwordValidation, setPasswordValidation] = useState({});
  const [toastOpen, setToastOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [msgType, setMsgType] = useState('success');
  const [showPassword, setShowPassword] = useState(false);

  function showAlert(message, type) {
    setMessage(message);
    setMsgType(type);

    setToastOpen(true);
    setTimeout(() => {
      setToastOpen(false);
    },3000)
  }

  async function getUser() {
    try {
      const data = await localforage.getItem('data');
      
      const response = await fetch(baseUrl + '/user/' + data._id);
      setUserData(await response.json());

    }catch(err) {
      showAlert('Error in fetching data!', 'error');
    }
  }

  function validateForm() {
    const newErrors = {};
    if(validator.isEmpty(userData.fullName == null ? "" : userData.fullName.toString())) {
        newErrors.fullName = 'Fullname is required.'
    }
    setValidationText(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function passwordValidate() {
    const newErrors = {};
    if(validator.isEmpty(password.new == null ? "" : password.new.toString())) {
      newErrors.new = 'New password is required.'
    }
    if(validator.isEmpty(password.confirm == null ? "" : password.confirm.toString())) {
      newErrors.confirm = 'Confirm password is required.'
    }
    if(password.new != password.confirm) {
      newErrors.match = 'Password does not match.'
    }
    setPasswordValidation(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function updateProfile() {
    if(validateForm()) {
      try {

        const response = await fetch(baseUrl + '/user/edit/' + userData._id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData)
        });
        if(!response.ok) {
          showAlert('Error in updating profile!', 'error');
          return;
        }
        // const data = await response.json();
        // console.log(data);
        // await localforage.setItem('data', data.data);
        // location.reload();
        showAlert('Profile is updated successfully! For updating profile name, please login again.', 'success');
      }
      catch(err) {
        showAlert('Error in updating profile!', 'error');
      }
    }
  }

  async function changePassword() {
    if(passwordValidate()) {
      try {
        const data = {
          ...userData,
          password: password.confirm
        }
        const response = await fetch(baseUrl + '/user/change-password/' + userData._id, {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data)
        })
        if(!response.ok) {
          showAlert('Error in changing password!', 'error');
          return;
        }

        showAlert('Password is changed successfully!', 'success');
        setPasswordValidation({});
        setOpen(false);
      }
      catch(err) {
        showAlert('Error in changing password!', 'error');
      }
      
    }
  }

  useEffect(() => {
    getUser();
    
  },[])
  
  return (
    <div>
      <div className="flex pt-2">
        <Typography className="text-gray-600" fontSize="20px">
            Edit User Profile
        </Typography>
      </div>
      <div className='py-5'>
        <p className="text-gray-600">Username</p>
        <OutlinedInput
          aria-describedby="outlined-weight-helper-text"
          size='small'
          className="!pt-0 w-[300px]"
          placeholder='Add username'
          readOnly={true}
          value={userData.username == undefined ? "" : userData.username}
        />
        <p className="text-gray-600 mt-3">Full Name *</p>
        <OutlinedInput
          aria-describedby="outlined-weight-helper-text"
          size='small'
          className="!pt-0 w-[300px]"
          placeholder='Add full name'
          value={userData.fullName == undefined || userData.fullName == null ? "" : userData.fullName}
          onChange={(e) => {
            setUserData({
              ...userData,
              fullName: e.target.value
            })
            setValidationText({})
          }}
        />
        {
          validationText.fullName && <p className="block text-[12px] text-red-500 font-sans mb-2 ml-[180px]">{validationText.fullName}</p>
        }
        <p className="text-gray-600 mt-3">Phone Number</p>
        <OutlinedInput
          aria-describedby="outlined-weight-helper-text"
          size='small'
          className="!pt-0 w-[300px]"
          placeholder='Add phone number'
          value={userData.phoneNo == undefined || userData.fullName == null ? "" : userData.phoneNo}
          onChange={(e) => {
            setUserData({
              ...userData,
              phoneNo: e.target.value
            })
          }}
        />
        <p className="text-gray-600 mt-3">Email</p>
        <OutlinedInput
          type='email'
          aria-describedby="outlined-weight-helper-text"
          size='small'
          className="!pt-0 w-[300px]"
          placeholder='Add email'
          value={userData.email == undefined || userData.fullName == null ? "" : userData.email}
          onChange={(e) => {
            setUserData({
              ...userData,
              email: e.target.value
            })
          }}
        />
        <div className='flex mt-3'>
          <p 
            className='pt-2 mr-[60px] text-sm text-gray-600 cursor-pointer hover:text-black'
            onClick={() => setOpen(true)} style={{color: "#05396b"}}
          >
            Change password
          </p>
          <Button variant='contained' className='!capitalize w-[120px]' onClick={updateProfile} style={{backgroundColor: "#05396b"}} >
              Save
          </Button>
        </div>
      </div>

      <Dialog
        aria-labelledby="customized-dialog-title"
        fullWidth={true}
        maxWidth="xs"
        open={isOpen}
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title"
        >
          Change Password
        </DialogTitle>
        <IconButton
            aria-label="close"
            sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
            }}
            onClick={() => {
              setOpen(false);
              setPasswordValidation({});
            }}
        >
            <CloseIcon />
        </IconButton>

        <DialogContent>
          <p className="text-gray-600">New Password *</p>
          <OutlinedInput
            type={showPassword ? 'text' : 'password'}
            aria-describedby="outlined-weight-helper-text"
            size='small'
            className="!pt-0 w-full"
            placeholder='Add new password'
            value={password.new}
            onChange={(e) => {
              setPassword({
                ...password,
                new: e.target.value
              })
            }}
          />
          {
            passwordValidation.new && <p className="block text-[12px] text-red-500 font-sans mb-2 text-right">{passwordValidation.new}</p>
          }
          <p className="text-gray-600 mt-3">Confirm Password *</p>
          <OutlinedInput
            type={showPassword ? 'text' : 'password'}
            aria-describedby="outlined-weight-helper-text"
            size='small'
            className="!pt-0 w-full"
            placeholder='Add confirm password'
            value={password.confirm}
            onChange={(e) => {
              setPassword({
                ...password,
                confirm: e.target.value
              })
            }}
          />
          {
            passwordValidation.confirm && <p className="block text-[12px] text-red-500 font-sans mb-2 text-right">{passwordValidation.confirm}</p>
          }
          {
            passwordValidation.match && <p className="block text-[12px] text-red-500 font-sans mb-2 text-right">{passwordValidation.match}</p>
          }
        <FormControlLabel control={<Checkbox checked={showPassword} onChange={() => setShowPassword(!showPassword)} />} label="Show Password" />
        </DialogContent>
        <DialogActions className='mr-2'>
          <Button variant='contained' className='!capitalize' onClick={changePassword} style={{backgroundColor: "#05396b"}}>
              Change
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
        open={toastOpen}
      >
        <Alert severity={msgType} className='w-[300px]'>{message}</Alert>
      </Snackbar>
      
    </div>
  )
}
