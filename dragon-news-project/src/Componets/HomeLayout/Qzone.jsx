import React from 'react';
import Swiming from '../../assets/swimming.png'
import play from '../../assets/playground.png'
import classRoom from '../../assets/class.png'
const Qzone = () => {
    return (
        <div className='bg-base-200 p-3 rounded-2xl'>
            <h1 className='font-semibold mb-5 ml-2'>Q-Zone</h1>
            <div>
                <img src={Swiming} alt="" />
                <img src={play} alt="" />
                <img src={classRoom} alt="" />
            </div>
        </div>
    );
};

export default Qzone;