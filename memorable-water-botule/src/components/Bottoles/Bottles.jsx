import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToStordCard } from '../../utilitis/localstorge';

const Bottles = ({bottlesPromise}) => {
    const [cart,setCart]=useState([])

    const bottles = use(bottlesPromise);
    const handleAddCart=(bottle)=>{
        // console.log(bottle.id)
        const newCart=[...cart,bottle]
        setCart(newCart);
        // save the bottle id in the storge..
        addToStordCard(bottle.id);
    }

    // console.log(bottles)
    return (
        <div>
            <h4>Bottles: {bottles.length}</h4>
            <p>Added to cart : {cart.length}</p>
            <div className='bottles-container'>
            {
                bottles.map(bottle=><Bottle 
                    key={bottle.id} 
                    handleAddCart={handleAddCart}
                    bottle={bottle}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;