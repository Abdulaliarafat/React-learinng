import React from 'react';

const ProductTable = ({product}) => {
    console.log(product)
    return (
         <div>
            <h2>Products : {product.length}</h2>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((singleItem,index)=>
                            <tr key={index}>
                        <td>{index +1}</td>
                        <td>{singleItem.name}</td>
                        <td>{singleItem.price}</td>
                        <td>{singleItem.quantity}</td>
                        <td></td>
                    </tr>)
                    }
                </tbody>
            </table>
         </div>
    );
};

export default ProductTable;