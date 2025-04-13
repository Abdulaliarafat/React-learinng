import React from 'react';

const Link = ({route}) => {
    return (
       <li className='mr-10'><a href={route.id}></a>{route.name}</li>
    );
};

export default Link;