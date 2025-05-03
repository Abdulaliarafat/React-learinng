import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h1 className='font-semibold  mb-2  text-start  ml-1'>Find Us On</h1>
            <div>
                <div className="join join-vertical w-full p-2 gap-2 ">
                    <button className="btn bg-base-100  hover:border-2 hover:border-sky-500 justify-start join-item"><FaFacebook color='blue'></FaFacebook>Facebook</button>
                    <button className="btn bg-base-100  hover:border-2 hover:border-sky-500 justify-start join-item"><FaTwitter color='blue'></FaTwitter> Twitter</button>
                    <button className="btn bg-base-100  hover:border-2 hover:border-sky-500 justify-start join-item"><FaInstagram color='red'></FaInstagram>Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;