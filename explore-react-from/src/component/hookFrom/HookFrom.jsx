import React, { useState } from 'react';
import useInputField from '../../Hooks/UseInputField';

const HookFrom = () => {
     const [name,handlenameOnchange]=useInputField('');
     const [email,handleEmailOnchange] =useInputField('')
     const [password,handlePasswordOnchange]=useInputField('')
     const [error,setError]=useState('')

     const handleFromSubmit=(e)=>{
      e.preventDefault();
      console.log('submit',name,email,password)
      if(password.length < 6){
        setError('Please requeard 6 or more carecter')
      }
      else{
        setError('')
      }
     }
    return (
        <div>
            <form onSubmit={handleFromSubmit}>
                <input defaultValue={name} onChange={handlenameOnchange} type="text" />
                <br />
                <input defaultValue={email} onChange={handleEmailOnchange} type="email" name="email" />
                <br />
                <input type="password" defaultValue={password} onChange={handlePasswordOnchange}  name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color:'red'}}>{error}</p>
        </div>
    );
};

export default HookFrom;