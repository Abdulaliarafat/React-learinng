import React, { useRef } from 'react';

const Uncontroled = () => {
    const emailRef=useRef('');
    const passwordref=useRef('');

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(emailRef.current.value)
        console.log(passwordref.current.value)
        const email=emailRef.current.value;
        const password=passwordref.current.value;
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name=""  />
                <br />
                <input ref={passwordref} type="password" name="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Uncontroled;