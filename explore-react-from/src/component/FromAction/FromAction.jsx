import React from 'react';

const FromAction = () => {
    const handleFromAction=(fromData)=>{
       console.log(fromData.get('name'))
       console.log(fromData.get('email'))
    }
    return (
        <div>
            <form action={handleFromAction}>
                <input type="text" name='name' placeholder='name' />
                <br />
                <input type="text" name='email' placeholder='email'/>
                <br />
                <u><input type="submit" value="Submit" /></u>
            </form>
        </div>
    );
};

export default FromAction;