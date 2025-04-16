import React from 'react';
import'./user.css'
import { Link, useNavigate } from 'react-router';
const User = ({user}) => {
    // console.log(user)
    const{id,name,email,phone}=user
    const navigate=useNavigate()
    const handleNavigte=()=>{
      navigate('/')
    }
    return (
        <div className='card'>
          <h3>Name: {name}</h3>
          <p>Email:{email}</p>
          <p><small>Phone:{phone}</small></p>
          <Link to={`/Users/${id}`}>Show details</Link>
          <button onClick={handleNavigte}>Return{id}</button>
        </div>
    );
};

export default User;