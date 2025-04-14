import React from 'react';

const Link = ({route}) => {
    return (
       <li className='px-5 lg:mr-10 hover:bg-amber-600'><a href={route.id}></a>{route.name}</li>
    );
};

export default Link;