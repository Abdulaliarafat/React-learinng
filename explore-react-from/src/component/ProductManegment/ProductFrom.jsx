import React from 'react';

const ProductFrom = ({handleProductAdd}) => {
    const handleProductSubmit=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const price=e.target.price.value;
        const quantity=e.target.quantity.value;
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
        </div>
    );
};

export default ProductFrom;