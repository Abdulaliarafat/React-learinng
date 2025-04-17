import React, { useState } from 'react';
import ProductFrom from './ProductFrom';
import ProductTable from './ProductTable';

const ProductManege = () => {
    const [product,setProduct]=useState([]);
    const handleProductAdd=(newProduct)=>{
      setProduct([...product,newProduct]);
    }
    // console.log(product);
    return (
        <div>
        <ProductFrom handleProductAdd={handleProductAdd}></ProductFrom>
        <ProductTable product={product}></ProductTable>
        </div>
    );
};

export default ProductManege;