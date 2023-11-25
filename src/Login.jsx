import React, { useState } from 'react'
import { Button, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import validator from 'validator';
import { baseUrl } from './constant';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from 'react-router-dom';
import localforage from 'localforage';

export default function Login() {

  function showAlert(message, type) {
    setMessage(message);
    setMsgType(type);

    setToastOpen(true);
    setTimeout(() => {
      setToastOpen(false);
    },3000)
  }

  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [signupData, setSignupData] = useState({
    username: '',
    fullName: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [loginValidationText, setLoginValidationText] = useState({});
  const [signupValidationText, setSignupValidationText] = useState({});
  const [toastOpen, setToastOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [msgType, setMsgType] = useState('success');

  function validateLogin() {
    const newErrors = {};
    if(validator.isEmpty(loginData.username.toString())) {
      newErrors.username = 'Username is required!'
    }
    if(validator.isEmpty(loginData.password.toString())) {
      newErrors.password = 'Password is required!'
    }

    setLoginValidationText(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function validateSignup() {
    const newErrors = {};
    if(validator.isEmpty(signupData.username.toString())) {
      newErrors.username = 'Username is required!'
    }
    if(validator.isEmpty(signupData.fullName.toString())) {
      newErrors.fullName = "Full name is required!"
    }
    if(validator.isEmpty(signupData.newPassword.toString())) {
      newErrors.newPassword = 'New password is required!'
    }
    if(validator.isEmpty(signupData.confirmPassword.toString())) {
      newErrors.confirmPassword = 'Confirm password is required!'
    }
    if(signupData.newPassword != signupData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords are not the same!'
    }
    setSignupValidationText(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleLogin() {
    if(validateLogin()) {
      try {
        const response = await fetch(baseUrl + '/login', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData)
        })
        if(!response.ok) {
          showAlert(rec.error, 'error');
          return;
        }
        const rec = await response.json();
        localforage.setItem('data', rec)
        showAlert('Login success!', 'success');
        navigate('/');
      }
      catch(err) {
        showAlert(err, 'error');
      }
    }
  }

  async function handleSignup() {
    if(validateSignup()) {
      try{
        const data = {
          username: signupData.username,
          password: signupData.confirmPassword,
          fullName: signupData.fullName
        }

        const response = await fetch(baseUrl + '/signup', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data)
        })

        if(!response.ok) {
          showAlert(rec.error, 'error');
          return;
        }
        const rec = await response.json();
        console.log(rec._doc);
        localforage.setItem('data', rec._doc)
        showAlert('User account is created!', 'success');
        navigate('/');
      }
      catch(err) {
        showAlert(err, 'error');
      }
    }
  }
  
  return (
    <div >
      <div className="grid grid-cols-2 h-[100vh] items-center">
        <div className='grid h-[100vh] items-center border-x-[1px]'>
          <div>
            <Typography className="flex justify-center text-blue-800" fontSize={70}>
              NINJA TRACK
            </Typography>
            <p className='flex justify-end mr-[140px]'>Money Manager</p>
          </div>
        </div>
        <div className='grid h-[100vh] items-center'>
          <div className='flex justify-center '>

            {
              isLogin ? (
                <div>
                  <Typography className='text-blue-800 flex justify-center' fontWeight={300} fontSize={35}>Welcome to NinjaTrack</Typography>
                  <div className='flex justify-center border-[1px] px-[60px] py-[50px]'>
                    <div>
                      <p className="text-gray-600">Username</p>
                      <OutlinedInput
                        aria-describedby="outlined-weight-helper-text"
                        size='small'
                        className="!pt-0 w-[300px]"
                        placeholder='Add username'
                        onChange={(e) => {
                          setLoginData({
                            ...loginData,
                            username: e.target.value
                          })
                        }}
                      />
                      {
                        loginValidationText.username && <p className="flex justify-end  text-[12px] text-red-500 font-sans mb-2]">{loginValidationText.username}</p>
                      }
                      <p className="text-gray-600 mt-3">Password</p>
                      <OutlinedInput
                        type='password'
                        aria-describedby="outlined-weight-helper-text"
                        size='small'
                        className="!pt-0 w-[300px]"
                        placeholder='Add password'
                        onChange={(e) => {
                          setLoginData({
                            ...loginData,
                            password: e.target.value
                          })
                        }}
                      />
                      {
                        loginValidationText.password && <p className="flex justify-end  text-[12px] text-red-500 font-sans mb-2">{loginValidationText.password}</p>
                      }
                      <div className='mt-4 flex justify-end'>
                        <Button variant='contained' className='!capitalize w-[120px]' onClick={handleLogin}>
                            Login
                        </Button>
                      </div>
                      <div 
                        className='mt-10 flex justify-center cursor-pointer'
                        onClick={() => setIsLogin(false)}
                      >
                        <Typography className='text-blue-800 ' fontWeight={500} fontSize={16}>Create Account.</Typography>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <Typography className='text-blue-800 flex justify-center' fontWeight={300} fontSize={35}>Create New Account</Typography>
                  <div className='flex justify-center border-[1px] px-[60px] py-[50px]'>
                    <div>
                      <p className="text-gray-600">Username</p>
                      <OutlinedInput
                        aria-describedby="outlined-weight-helper-text"
                        size='small'
                        className="!pt-0 w-[300px] mb-3"
                        placeholder='Add username'
                        onChange={(e) => {
                          setSignupData({
                            ...signupData,
                            username: e.target.value
                          })
                        }}
                      />
                      {
                        signupValidationText.username && <p className="flex justify-end text-[12px] text-red-500 font-sans mb-2">{signupValidationText.username}</p>
                      }
                      <p className="text-gray-600">Full Name</p>
                      <OutlinedInput
                        aria-describedby="outlined-weight-helper-text"
                        size='small'
                        className="!pt-0 w-[300px] mb-3"
                        placeholder='Add full name'
                        onChange={(e) => {
                          setSignupData({
                            ...signupData,
                            fullName: e.target.value
                          })
                        }}
                      />
                      {
                        signupValidationText.fullName && <p className="flex justify-end text-[12px] text-red-500 font-sans mb-2">{signupValidationText.fullName}</p>
                      }
                      <p className="text-gray-600">New Password</p>
                      <OutlinedInput
                        type='password'
                        aria-describedby="outlined-weight-helper-text"
                        size='small'
                        className="!pt-0 w-[300px] mb-3"
                        placeholder='Add new password'
                        onChange={(e) => {
                          setSignupData({
                            ...signupData,
                            newPassword: e.target.value
                          })
                        }}
                      />
                      {
                        signupValidationText.newPassword && <p className="flex justify-end  text-[12px] text-red-500 font-sans mb-2">{signupValidationText.newPassword}</p>
                      }
                      <p className="text-gray-600">Confirm Password</p>
                      <OutlinedInput
                        type='password'
                        aria-describedby="outlined-weight-helper-text"
                        size='small'
                        className="!pt-0 w-[300px]"
                        placeholder='Add confirm password'
                        onChange={(e) => {
                          setSignupData({
                            ...signupData,
                            confirmPassword: e.target.value
                          })
                        }}
                      />
                      {
                        signupValidationText.confirmPassword && <p className="flex justify-end  text-[12px] text-red-500 font-sans mb-2">{signupValidationText.confirmPassword}</p>
                      }
                      <div className='mt-4 flex justify-end'>
                        <Button variant='contained' className='!capitalize w-[120px]' onClick={handleSignup} >
                            Sign Up
                        </Button>
                      </div>
                      <div 
                        className='mt-10 flex justify-center cursor-pointer'
                        onClick={() => setIsLogin(true)}
                      >
                        <Typography className='text-blue-800 ' fontWeight={500} fontSize={16}>Go to login.</Typography>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>

      <Snackbar
        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
        open={toastOpen}
      >
        <Alert severity={msgType} className='w-[300px]'>{message}</Alert>
      </Snackbar>
    </div>
  )
}
