import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Snackbar from '@mui/material/Snackbar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
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
import localforage from 'localforage';

export default function Mode() {

  const [modeList, setModeList] = useState([]);
  const [validationText, setValidationText] = useState({});
  const [modeData, setModeData] = useState({
    id: '',
    mode: ''
  })
  const [isOpen, setOpen] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [msgType, setMsgType] = useState('success');
  const [user, setUser] = useState({});

  function showAlert(message, type) {
    setMessage(message);
    setMsgType(type);

    setToastOpen(true);
    setTimeout(() => {
      setToastOpen(false);
    },3000)
  }

  async function getData() {
    try {
      const curUser = await localforage.getItem('data');
      setUser(curUser);

      const response = await fetch(baseUrl + '/payment-mode?user=' + curUser._id);

      setModeList(await response.json());
    } catch(err) {
      showAlert('Error in fetching dataaaa!', 'error');
    }
  }

  function validateForm() {
    const newErrors = {};
      if(validator.isEmpty(modeData.mode.toString())) {
          newErrors.mode = 'Description is required.'
      }
      setValidationText(newErrors);
      return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(isNew = true) {
    if(validateForm()) {
      try {
        if(isEdit) {
          const response = await fetch(baseUrl + '/payment-mode/edit/' + modeData.id, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(modeData)
          })
          if(!response.ok) {
            showAlert('Error in updating data!', 'error');
            return;
          }
          showAlert('Data is updated successfully!', 'success');
        }
        else {
          const data = {
            ...modeData,
            user: user._id
          }
          const response = await fetch(baseUrl + '/payment-mode/add', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
          })
          if(!response.ok) {
            showAlert('Error in saving data!', 'error');
            return;
          }
          showAlert('Data is saved successfully!', 'success');
        }

        setModeData({
          id: '',
          mode: ''
        })
        setOpen(isNew);
        setEdit(false);
        getData();

      }
      catch(err) {
        showAlert(isEdit ? 'Error in updating data!' : 'Error in saving data!', 'error');
      }
    }
  }

  // async function handleSubmitNew() {
  //   if(validateForm()) {
  //     await fetch(baseUrl + '/payment-mode/add', {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(modeData)
  //     })

  //     setMessage('Data is saved successfully!');

  //     setModeData({
  //       mode: ''
  //     })
  //     getData();

  //     setToastOpen(true);
  //     setTimeout(() => {
  //       setToastOpen(false);
  //     },2000)

  //   }
  // }

  async function handleDelete(id) {
    try {
      const response = await fetch(baseUrl + '/payment-mode/delete/' + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
      if(!response.ok) {
        showAlert((await response.json()).error, 'error');
        return;
      }

      getData();
      showAlert('Data is deleted successfully!', 'success');
    }
    catch(err) {
      showAlert('Error in deleting data!', 'error');
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <div className="flex pt-2">
        <Typography className="text-gray-600" fontSize="20px">
            Payment Mode
        </Typography>
      </div>
      <div className='py-5'>
        <div 
          className='flex py-2 px-3 border-[1px] border-gray-400 w-[400px] cursor-pointer hover:border-black'
          onClick={() => setOpen(true)}
        >
          <div className='pr-2'>
            <AddIcon className="text-gray-600" />
          </div>
          <p className='text-gray-600'>Add New Mode</p>
        </div>
      </div>
      <p className='text-gray-600 text-xs mb-2'>Payment Modes({modeList.length})</p>
      <div className='h-[500px] overflow-y-auto'>
        {
          modeList.map((rec, index) => {
            return (
              <div 
                className='flex justify-between mb-3 py-2 px-5 border-[1px] border-gray-400 w-[400px]'
                key={index}
              >
                <p className='text-gray-600 pt-1'>{rec.mode}</p>
                <div className='flex'>
                  <IconButton onClick={() => {
                    setOpen(true);
                    setEdit(true);
                    setModeData({
                      id: rec._id,
                      mode: rec.mode
                    })
                  }}>
                    <EditIcon className='text-info !w-[18px] !h-[18px] text-blue-600 cursor-pointer' />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(rec._id)}>
                    <DeleteIcon className='text-danger !w-[18px] !h-[18px] text-red-600 cursor-pointer' /> 
                  </IconButton>
                </div>
              </div>
            )
          })
        }
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
          {isEdit ? "Update Payment Mode" : "Add Payment Mode"}
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
              setEdit(false);
              setValidationText({});
              setModeData({
                id: '',
                mode: ''
              })
            }}
        >
            <CloseIcon />
        </IconButton>

        <DialogContent>
          <OutlinedInput
            id="outlined-adornment-weight"
            aria-describedby="outlined-weight-helper-text"
            size='small'
            className="!pt-0 w-full"
            placeholder='Add payment mode'
            value={modeData.mode}
            onChange={(e) => {
              setModeData({
                ...modeData,
                mode: e.target.value
              })
            }}
          />
          {
            validationText.mode && <p className="block text-[12px] text-red-500 font-sans mb-2 text-right">{validationText.mode}</p>
          }
        </DialogContent>
        <DialogActions className='mr-2'>
          <Button variant='outlined' type='submit' className='!capitalize w-[120px]' onClick={() => handleSubmit(false)} style={{color: "#05396b"}}>
              Save
          </Button>
          {
            !isEdit ? (
              <Button variant='contained' type='submit' className='!capitalize' onClick={handleSubmit} style={{backgroundColor: "#05396b"}}>
                Save & New
              </Button>
            ) : null
          }
          
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
