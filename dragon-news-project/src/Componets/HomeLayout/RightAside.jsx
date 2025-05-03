import React from 'react';
import SocalLogIn from './SocalLogIn';
import FindUs from '../FindUs';
import Qzone from './Qzone';

const RightAside = () => {
    return (
        <div className='space-y-5'>
            <SocalLogIn></SocalLogIn>
            <FindUs></FindUs>
            <Qzone></Qzone>
        </div>
    );
};

export default RightAside;