
import './App.css';
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import { useState } from 'react';
import FaceIcon from '@mui/icons-material/Face'
import LockIcon from '@mui/icons-material/Lock'
import Switch from '@mui/material/Switch';
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

function App() {
  const [checked,setChecked] =useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  }
  return (
    <div className='App'>
      <Paper elevation={3} style={{padding:"10px"}}>
        
        {checked ? (
        <Chip
        icon={<LockIcon/>}
        label="Log In" 
        color="primary"
        variant="outlined"
      />
       
   ):(
   <Chip 
   icon={<FaceIcon/>}
   label="Sign Up" 
   color="primary"
   variant="outlined" 
   />
      
       
  )}
      <br />
      <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />

    <br />
    
    {checked ?
       <Login/>:<SignUp/>
    }
  
      </Paper>

    </div>
  );
}

export default App;
