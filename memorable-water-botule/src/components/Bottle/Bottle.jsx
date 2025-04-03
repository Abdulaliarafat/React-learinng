import React from 'react';
import './bottle.css'
const Bottle = ({bottle,handleAddCart}) => {
    // console.log(bottle)  
    const{img,name,price,stock}=bottle;
    return (
        <div className='card bottle'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>$ {price}</p>
            <p>{stock} Remaining</p>
            <button onClick={()=>handleAddCart(bottle)}>Buy new</button>
        </div>
    );
};

export default Bottle;