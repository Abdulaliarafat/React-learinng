import React, { useState } from 'react';

const   ControlFlield = () => {
    const[pasword,setPassword]=useState('')
    const [error,setError]=useState('')

    const handleFromSubmit=(e)=>{
    e.preventDefault();
    console.log('submit...')
    if(pasword.length < 6){
          setError('6 or more charecter needed')
    }
    else{
        setError('')
    }
    }
  const handlepaswordOnChange=(e)=>{
   console.log(e.target.value)
   setPassword(e.target.value)
   if(pasword.length < 6){
    setError('Password should be 6 or more charecter')
   }
   else{
    setError('')
   }
  }
    return (
        <div>
            <form onSubmit={handleFromSubmit}>
                <input type="email" name="email" placeholder="email" required />
                <br />
                <input type="password" name="password" placeholder="password" onChange={handlepaswordOnChange} defaultValue={pasword} required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color:'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ControlFlield;