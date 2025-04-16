import React from 'react';

const SimpleFrom = () => {
    const handlesubmit=(e)=>{
    e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.email.value)
    }
    return (
        <div>
            <form onSubmit={handlesubmit} >
                <input type="text" name='name'  placeholder='Your name'/>
                <br />
                <input type="text" name='email'  placeholder='Your email'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleFrom;