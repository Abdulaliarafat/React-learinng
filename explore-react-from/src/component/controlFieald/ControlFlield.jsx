import React, { useState } from 'react';

const   ControlFlield = () => {
    const[pasword,setPassword]=useState('')

    const handleFromSubmit=(e)=>{
    e.preventDefault();
    console.log('submit...')
    }
  const handlepaswordOnChange=(e)=>{
   console.log(e.target.value)
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
        </div>
    );
};

export default ControlFlield;