import React from 'react';

const ProductGallery = ({ images}) => {


  return (
    <div class="product-gallery product-gallery-vertical">
    <div class="row">
      <figure class="product-main-image">
        <img id="" src={images[0]} alt="product image"/>
      </figure>
      <div id="" class="product-image-gallery">
        <a class="product-gallery-item active" href="#" data-image="assets/images/products/single/1.jpg">
          <img src={images[0]}/>
        </a>
        <a class="product-gallery-item" href="#" data-image="assets/images/products/single/2.jpg">
          <img src={images[1]}/>
        </a>
        <a class="product-gallery-item" href="#" data-image="assets/images/products/single/3.jpg">
          <img src={images[2]}/>
        </a>
      </div>
    </div>
  </div>

    
  );
};

export default ProductGallery;