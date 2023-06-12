import React, { useEffect, useState } from "react";
import "./ProductList.css";
import products from "../../api/products.json";
import BeforeCart from "./CartButtons/BeforeCart";
import AfterCart from "./CartButtons/AfterCart";
import { useSelector } from "react-redux";




const ProductList = () => {

  const {cartCount, cartList} = useSelector((state)=>state.cart)
  


  return (
    <section className="container">
      {products?.map((product, key) => {
        return (
          <div className="product-container" key={key}>
            <img src={product?.image} />
            <h1>{product?.title}</h1>
            {cartCount > 0 ? <AfterCart /> 
            : <BeforeCart/>}
          </div>
        );
      })}
    </section>
  );
};

export default ProductList;
