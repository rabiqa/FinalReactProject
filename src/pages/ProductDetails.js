import React, { Fragment } from "react";
import HeaderWhite from "../components/HeaderWhite";
import ProductGallery from "../components/ProductGallery";
import { images } from "../assets/images/Images";
import Footer from "../components/Footer";
const Product = () =>{
    const gallery= [
      images.product1_1,images.product1_2,images.product2_1
    ]
    return(
      <Fragment>
         <div className="page-wrapper">
          <HeaderWhite/>
          <main className="main">
              <div className="page-content">
                <div className="container">
                  <div className="products-details-top"> 
                      <div className="row pt-5">
                        <div className="col-md-6">
                            <ProductGallery
                            images={gallery}
                            />

                        </div>
                        <div className="col-md-6">
                  <div className="product-details">
                    <h1 className="product-title"> Watercolor Ethnic Dress</h1>
                    <div className="ratings-container">
                      <div className="ratings">
                        <div className="ratings-val" style={{width : "80%"}}></div>
                      </div>
                      <a className="ratings-text" href="#product-review-link" id="review-link">( 2 Reviews )</a>
                    </div>
                    <div className="product-price"> Rs.8400 </div>
                    <div className="product-content">
                      <p>Discover the allure of our stunning female dress, exquisitely designed for the modern woman. Embrace timeless elegance and grace with every step. Elevate your style effortlessly in this enchanting masterpiece </p>
                    </div>
                    <div className="details-filter-row">
                      <label for="size">Size:</label>
                      <div className="select-custom">
                        <select name="size" id="size" className="form-control">
                          <option value="#" selected="selected">Select a size</option>
                          <option value="s">Small</option>
                          <option value="m">Medium</option>
                          <option value="l">Large</option>
                          <option value="xl">Extra Large</option>
                        </select>
                      </div>
                      <a href="#" className="size-guide">
                        <i className="icon-th-list"></i>size guide </a>
                    </div>
                    <div className="details-filter-row">
                      <label for="qty">Qty:</label>
                      <div className="product-details-quantity">
                        <input type="number" id="qty" className="form-control" value="1" min="1" max="10" step="1" data-decimals="0" required/>
                      </div>
                    </div>
                    <div className="product-details-action">
                      <a href="#" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </a>
                      <div className="details-action-wrapper">
                        <a href="#" className="btn-product btn-wishlist" title="Wishlist">
                          <span>Add to Wishlist</span>
                        </a>
                        <a href="#" className="btn-product btn-compare" title="Compare">
                          <span>Add to Compare</span>
                        </a>
                      </div>
                    </div>
                    <div className="product-details-footer">
                      <div className="product-cat">
                        <span>Category:</span>
                        <a href="#">Ethnic</a>, <a href="#">Dresses</a>, <a href="#">Blue</a>
                      </div>
                      <div className="social-icons social-icons-sm">
                        <span className="social-label">Share:</span>
                        <a href="#" className="social-icon" title="Facebook">
                          <i className="icon-facebook-f"></i>
                        </a>
                        <a href="#" className="social-icon" title="Twitter">
                          <i className="icon-twitter"></i>
                        </a>
                        <a href="#" className="social-icon" title="Instagram">
                          <i className="icon-instagram"></i>
                        </a>
                        <a href="#" className="social-icon" title="Pinterest">
                          <i className="icon-pinterest"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                      </div>
                      <div className="product-details-tab">
              <ul className="nav nav-pills justify-content-center" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="product-desc-link" data-toggle="tab" href="#product-desc-tab" role="tab" aria-controls="product-desc-tab" aria-selected="true">Description</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="product-info-link" data-toggle="tab" href="#product-info-tab" role="tab" aria-controls="product-info-tab" aria-selected="false">Additional information</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="product-shipping-link" data-toggle="tab" href="#product-shipping-tab" role="tab" aria-controls="product-shipping-tab" aria-selected="false">Shipping & Returns</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="product-review-link" data-toggle="tab" href="#product-review-tab" role="tab" aria-controls="product-review-tab" aria-selected="false">Reviews (2)</a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="product-desc-tab" role="tabpanel" aria-labelledby="product-desc-link">
                  <div className="product-desc-content">
                    <h3>Product Information</h3>
                    <p>Discover the allure of our stunning female dress, exquisitely designed for the modern woman. Embrace timeless elegance and grace with every step. Elevate your style effortlessly in this enchanting masterpiece. </p>
                    <ul>
                      <li>Soft and luxurious satin fabric</li>
                      <li>Intricate lace detailing</li>
                      <li>Flattering A-line silhouette</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. </p>
                  </div>
                </div>
                <div className="tab-pane fade" id="product-info-tab" role="tabpanel" aria-labelledby="product-info-link">
                  <div className="product-desc-content">
                    <h3>Information</h3>
                    <p>LDiscover the allure of our stunning female dress, exquisitely designed for the modern woman. Embrace timeless elegance and grace with every step. Elevate your style effortlessly in this enchanting masterpiece. </p>
                    <h3>Fabric & care</h3>
                    <ul>
                      <li>Soft and luxurious satin fabric</li>
                      <li>Intricate lace detailing</li>
                      <li>Flattering A-line silhouette</li>
                      <li>Delicate floral embroidery</li>
                      <li>Adjustable spaghetti straps</li>
                      <li>Concealed back zipper</li>
                      <li>Fully lined for comfort</li>
                      <li>Available in various colors and sizes</li>
                      <li>Perfect for weddings, parties, and special occasions</li>
                    </ul>
                    <h3>Size</h3>
                    <p>one size</p>
                  </div>
                </div>
                <div className="tab-pane fade" id="product-shipping-tab" role="tabpanel" aria-labelledby="product-shipping-link">
                  <div className="product-desc-content">
                    <h3>Delivery & returns</h3>
                    <p>We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our <a href="#">Delivery information</a>
                      <br/> We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our <a href="#">Returns information</a>
                    </p>
                  </div>
                </div>
                <div className="tab-pane fade" id="product-review-tab" role="tabpanel" aria-labelledby="product-review-link">
                  <div className="reviews">
                    <h3>Reviews (2)</h3>
                    <div className="review">
                      <div className="row no-gutters">
                        <div className="col-auto">
                          <h4>
                            <a href="#">Samanta J.</a>
                          </h4>
                          <div className="ratings-container">
                            <div className="ratings">
                              <div className="ratings-val" style={{width: "80%"}}></div>
                            </div>
                          </div>
                          <span className="review-date">6 days ago</span>
                        </div>
                        <div className="col">
                          <h4>Good, perfect size</h4>
                          <div className="review-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!</p>
                          </div>
                          <div className="review-action">
                            <a href="#">
                              <i className="icon-thumbs-up"></i>Helpful (2) </a>
                            <a href="#">
                              <i className="icon-thumbs-down"></i>Unhelpful (0) </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="review">
                      <div className="row no-gutters">
                        <div className="col-auto">
                          <h4>
                            <a href="#">John Doe</a>
                          </h4>
                          <div className="ratings-container">
                            <div className="ratings">
                              <div className="ratings-val" style={{width : "100%"}}></div>
                            </div>
                          </div>
                          <span className="review-date">5 days ago</span>
                        </div>
                        <div className="col">
                          <h4>Very good</h4>
                          <div className="review-content">
                            <p>Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!</p>
                          </div>
                          <div className="review-action">
                            <a href="#">
                              <i className="icon-thumbs-up"></i>Helpful (0) </a>
                            <a href="#">
                              <i className="icon-thumbs-down"></i>Unhelpful (0) </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                  </div>
                </div>

              </div>
          </main>
         </div>
         <Footer/>
      </Fragment>
    )
}

export default Product;

