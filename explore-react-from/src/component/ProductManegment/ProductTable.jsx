import React from 'react';

const ProductTable = ({product}) => {
    console.log(product)
    return (
         <div>
            <h2>{product.length}</h2>
         </div>
    );
};

export default ProductTable;