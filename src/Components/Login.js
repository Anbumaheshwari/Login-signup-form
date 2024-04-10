import React, { useState } from 'react'

import Alert from '@mui/material/Alert';
import { TextField } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Checkbox from '@mui/material/Checkbox';


const isEmail = (email) => 
/^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export default function Login() {
  
  // password field
    const [showPassword, setShowPassword] = React.useState(false);

  //  input
 
    const[emailInput,setEmailInput] = useState();
    const[passwordInput,setPasswordInput] = useState();
    const[rememberMe,setRememberMe]=useState();

    //  input error
   
    const[emailError,setEmailError] = useState(false);
    const[passwordError,setPasswordError] = useState(false);
   

    //Form validity
    const [formValid,setFormValid] = useState();
    const [success,setSuccess] = useState();

    

    //validation for onblur email

    const handleEmail = () => {
     if(!isEmail(emailInput)){
      setEmailError(true);
      return;
     }
     setEmailError(false);
    }
    //validation for onblur password
    const handlePassword = () => {
      if (
        !passwordInput || 
        passwordInput.length < 5 ||
        passwordInput.length > 20
      ){
        setPasswordError(true);
        return;
      }
      setPasswordError(false);
    }


    const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(null);


  if(emailError|| !emailInput){
    setFormValid
    ("Email is invalid. Please Re-Enter");
    return;
  }
  if(passwordError|| !passwordInput){
    setFormValid
    ("Password is set to 5-20 Characters. Please Re-Enter");
    return;
  }
  setFormValid(null);
  setSuccess("Form Submitted Successfully")

  console.log("Email : " + emailInput);
  console.log("Password : " + passwordInput);
  console.log("RememberUser: "+rememberMe)
  }


  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
    
     <p>
     <TextField 
     id="standard-basic" 
     error={emailError}
     label="Email"
     value={emailInput}
     onChange={(event) => setEmailInput (event.target.value)} 
     onBlur={handleEmail}
     variant="standard"
     fullWidth
     size='small' />
     </p>
     <p>
     <FormControl sx={{ width: '100%' }} variant="standard">
          <InputLabel error={passwordError}htmlFor="outlined-adornment-password">
            Password
            </InputLabel>
          <Input
          fullWidth
          error={passwordError}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={passwordInput}
            onChange={(event) => setPasswordInput (event.target.value)}
            onBlur={handlePassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
     </p>
     <div align="left">
     <Checkbox
      
      onChange={(event) => setRememberMe(event.target.checked)}
      inputProps={{ 'aria-label': 'controlled' }}
    /> Remember Me
    </div>
     
     <p>
     <Button 
     onClick={handleSubmit} 
     fullWidth variant="contained" 
     startIcon={<LoginIcon />}>
     SIGNUP
       </Button>
     </p>
     
    
     
    <p>
    
      {formValid &&
        <Alert severity='error'>{formValid}</Alert>}</p>
  
  <p>
    
    {success &&
      <Alert severity='success'>{success}</Alert>}</p>
  
    </div>
  )
}
