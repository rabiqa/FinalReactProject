import React, { useEffect, useState } from 'react';



const addToCart = (product) => {

  let productsInCart = JSON.parse(localStorage.getItem("cartProducts")) || [];

  const existingProduct = productsInCart.find((item) => item.id === product.id);

  if (existingProduct) {
    existingProduct.qty += 1;
    existingProduct.total = existingProduct.price * existingProduct.qty
  } else {
    productsInCart.push(product);
  }

  localStorage.setItem("cartProducts", JSON.stringify(productsInCart));
  alert("Product Added In Cart")
}


const Product = ({productId, imageUrl1, imageUrl2, category, title, price }) => {



  return (
    <div className="product product-2">
      <figure className="product-media">
        <a href="product.html">
          <img src={imageUrl1} alt="Product image" className="product-image" />
          <img src={imageUrl2} alt="Product image" className="product-image-hover" />
        </a>
        <div className="product-action-vertical">
          <a href="#" className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist">
            <span>add to wishlist</span>
          </a>
        </div>
        <div className="product-action product-action-transparent">
          <a onClick={() => addToCart({id:productId,image:imageUrl1,category:category,title:title,price:price,qty:1,total:price})} className="btn-product btn-cart">
            <span>add to cart</span>
          </a>
        </div>
      </figure>
      <div className="product-body">
        <div className="product-cat">
          <a href="#">{category}</a>
        </div>
        <h3 className="product-title">
          <a href="product.html">{title}</a>
        </h3>
        <div className="product-price">Rs.{price}</div>
      </div>
    </div>
  );
};

export default Product;
