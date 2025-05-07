import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <span className="loading loading-bars loading-xs text-red-700"></span>
            <span className="loading loading-bars loading-sm text-red-700"></span>
            <span className="loading loading-bars loading-md text-red-700"></span>
            <span className="loading loading-bars loading-lg text-red-700"></span>
            <span className="loading loading-bars loading-xl text-red-700"></span>
        </div>
    );
};

export default Loading;