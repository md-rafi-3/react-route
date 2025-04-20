import React, { useState } from 'react';
import ProductForm from './ProductForm';
import Table from './Table';

const ProductManagemaint = () => {
    const [products,setProducts]=useState([])
   const handleAddProduct=(newProduct)=>{
    const newProducts=[...products,newProduct];
    setProducts(newProducts)
   }
    return (
        <div>
            <ProductForm handleAddProduct={handleAddProduct}></ProductForm>
            <Table products={products}></Table>

        </div>
    );
};

export default ProductManagemaint;