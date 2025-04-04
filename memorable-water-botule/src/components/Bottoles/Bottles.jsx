import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToStordCard, getStoredCart, removeFromCart } from '../../utilitis/localstorge';
import Cart from '../Cart/Cart';


const Bottles = ({bottlesPromise}) => {
    const [cart,setCart]=useState([])

    const bottles = use(bottlesPromise);
    
    useEffect(()=>{
        const stordedCartId= getStoredCart();
        // console.log(stordedCartId,bottles)
        const storedCart= [];
        for(const id of stordedCartId){
            // console.log(id)
            const cartbottle = bottles.find(bottle=>bottle.id === id);
            // console.log(cartbottle)
            if(cartbottle){
                storedCart.push(cartbottle);
                
            }
            setCart(storedCart)
        }
    },[bottles])

    const handleAddCart=(bottle)=>{
        // console.log(bottle.id)
        const newCart=[...cart,bottle]
        setCart(newCart);
        // save the bottle id in the storge..
        addToStordCard(bottle.id);
    }
    const handleRemoveCart= id =>{
        // console.log('remove cart',id)
        const remainingCart = cart.filter(bottle=>bottle.id !== id);
        setCart(remainingCart)
        removeFromCart(id)
    }

    // console.log(bottles)
    return (
        <div>
            <h4>Bottles: {bottles.length}</h4>
            <p>Added to cart : {cart.length}</p>
            <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
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