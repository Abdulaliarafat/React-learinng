import React, { Suspense, useState } from 'react';
import'./user.css'
import { Link, Navigate,useLocation,useNavigate} from 'react-router';
import UserDitails2 from '../UserDetails2/UserDitails2';
const User = ({user}) => {
    // console.log(user)
    const{id,name,email,phone}=user
    const [showInfo,setShowInfo]=useState(false);
    const [visiteHome,SetVisitHome]=useState(false)
    const userPromise=fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>res.json())
    if(visiteHome){
      return <Navigate to='/'></Navigate>
    }
    const location=useLocation()
    console.log(location)
    // const navigate=useNavigate()
    // const handleNavigte=()=>{
    //   navigate('/')
    // }
    return (
        <div className='card'>
          <h3>Name: {name}</h3>
          <p>Email:{email}</p>
          <p><small>Phone:{phone}</small></p>
          <Link to={`/Users/${id}`}>Show details</Link>
          {/* <button onClick={handleNavigte}>Return</button> */}
          <button onClick={()=>setShowInfo(!showInfo)} >{showInfo ? 'Hide': 'Show'} Info</button>
          {
            showInfo && <Suspense fallback={<span>Loading.....</span>}>
              <UserDitails2 userPromise={userPromise}></UserDitails2>
            </Suspense>
          }
          <button onClick={()=>SetVisitHome(true)}>Visit home</button>
        </div>
    );
};

export default User;