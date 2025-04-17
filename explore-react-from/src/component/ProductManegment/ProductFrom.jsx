import React, { useState } from 'react';

const ProductFrom = ({handleProductAdd}) => {
    const [error,setError]=useState('')
    const handleProductSubmit=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const price=e.target.price.value;
        const quantity=e.target.quantity.value;
//  validation
        if(name.length===0){
          setError('Please provide product name')
          return
        }
        else if(price.length===0){
            setError('please provide a price')
            return
        }
        else if(price < 0){
            setError('Price can not nagative')
            return
        }
        else if(quantity.length===0){
            setError('please provide a quantity')
            return
        }
        else if(quantity <0){
            setError('Quantity can not nagative')
            return
        }
        else{
            setError('')
        }

        const newProduct={
            name,
            price,
            quantity
        }
        console.log(newProduct );
        handleProductAdd(newProduct);
    }
    return (
        <div>
            <h2>Add a product</h2>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name="name" placeholder='Product name' />
                <br />
                <input type="text" name="price" placeholder='Product price' />
                <br />
                <input type="text" name="quantity" placeholder='Product quantity' />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color:'red'}}>{error}</p>
        </div>
    );
};

export default ProductFrom;