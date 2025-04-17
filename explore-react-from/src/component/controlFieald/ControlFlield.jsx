import React, { useState } from 'react';

const   ControlFlield = () => {
     const [name,setName]=useState('')
    const [email,setEmail]=useState('')

    const[pasword,setPassword]=useState('')

    const [error,setError]=useState('')

    const handleFromSubmit=(e)=>{
    e.preventDefault();
    console.log(name,email,pasword)
    if(pasword.length < 6){
          setError('6 or more charecter needed')
    }
    else{
        setError('')
    }
    }
    const handleNameChange=(e)=>{
        console.log(e.target.value)
        setName(e.target.value)
    }
    const handleEmailOnChane=(e)=>{
        console.log(e.target.value)
      setEmail(e.target.value)
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
                <input type="text" defaultValue={name} onChange={handleNameChange}  placeholder='name' />
                <br />
                <input type="email" onChange={handleEmailOnChane} name="email" defaultValue={email} placeholder="email" required />
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