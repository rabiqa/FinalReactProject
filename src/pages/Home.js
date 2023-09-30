import React, { Fragment } from 'react';
import Header from '../components/Header';
import MainSlider from '../components/MainSlider';
import { images } from '../assets/images/Images';
import Product from '../components/SingleProduct';
import Footer from '../components/Footer';

const Home = () => {
  const socialMediaLinks = [
    { icon: 'icon-facebook-f', title: 'Facebook' },
    { icon: 'icon-twitter', title: 'Twitter' },
    { icon: 'icon-instagram', title: 'Instagram' },
    { icon: 'icon-youtube', title: 'Youtube' },
    { icon: 'icon-pinterest', title: 'Pinterest' },
  ];
  return (
    <Fragment>
      <div className="page-wrapper">
        <Header />
        <MainSlider />
        <div className="brands-border mb-5">
          <div className="row p-0">
            <div className="col-md-2 p-0">
              <a href="#" className="brand">
                <img src={images.brand1} alt="Brand Name 1" />
              </a>
            </div>
            <div className="col-md-2 p-0">
              <a href="#" className="brand">
                <img src={images.brand2} alt="Brand Name 2" />
              </a>
            </div>
            <div className="col-md-2 p-0" >
              <a href="#" className="brand">
                <img src={images.brand3} alt="Brand Name 3" />
              </a>
            </div>
            <div className="col-md-2 p-0">
              <a href="#" className="brand">
                <img src={images.brand4} alt="Brand Name 4" />
              </a>
            </div>
            <div className="col-md-2 p-0">
              <a href="#" className="brand">
                <img src={images.brand5} alt="Brand Name 5" />
              </a>
            </div>
            <div className="col-md-2 p-0">
              <a href="#" className="brand">
                <img src={images.brand6} alt="Brand Name 6" />
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="heading heading-center mb-3">
            <h2 className="title">Festive Collection </h2>
            <ul className="nav nav-pills justify-content-center" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="trendy-all-link" data-toggle="tab" href="#" role="tab" aria-controls="trendy-all-tab" aria-selected="true">All</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="trendy-women-link" data-toggle="tab" href="#" role="tab" aria-controls="trendy-women-tab" aria-selected="false">Women</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="trendy-men-link" data-toggle="tab" href="#" role="tab" aria-controls="trendy-men-tab" aria-selected="false">Men</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="trendy-access-link" data-toggle="tab" href="#" role="tab" aria-controls="trendy-access-tab" aria-selected="false">Accessories</a>
              </li>
            </ul>
          </div>
          <div className='row'>
            <div className='col-md-3'>
              <Product
                productId={1}
                imageUrl1={images.product1_1}
                imageUrl2={images.product1_2}
                category="Clothing"
                title="Waterpaint Look"
                price="5999"
              />
            </div>
            <div className='col-md-3'>
              <Product
                productId={2}
                imageUrl1={images.product2_1}
                imageUrl2={images.product2_2}
                category="Clothing"
                title="Artistic Pink"
                price="1999"
              />
            </div>
            <div className='col-md-3'>
              <Product
                productId={3}
                imageUrl1={images.product3_1}
                imageUrl2={images.product3_2}
                category="Footwear"
                title="Kolapuri Khussa"
                price="2999"
              />
            </div>
            <div className='col-md-3'>
              <Product
                productId={4}
                imageUrl1={images.product4_1}
                imageUrl2={images.product4_2}
                category="Clothing"
                title="Dreamy Blue"
                price="8950"
              />
            </div>
          </div>
        </div>

        <div className="mb-4"></div>
        <div className="container">
          <div className="banner-group">
            <div className="row">
              <div className="col-md-6">
                <div className="banner banner-border">
                  <a href="#">
                    <img src={images.banner1} alt="Banner" />
                  </a>
                  <div className="banner-content">
                    <h4 className="banner-subtitle">
                      <a href="#">Trending now</a>
                    </h4>
                    <h3 className="banner-title">
                      <a href="#">
                        <span>This Week's <br />Most Wanted </span>
                      </a>
                    </h3>
                    <a href="#" className="btn btn-outline-primary-2 banner-link">
                      Discover Now <i className="icon-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="banner banner-border-hover">
                  <a href="#">
                    <img src={images.banner2} alt="Banner" />
                  </a>
                  <div className="banner-content">
                    <h4 className="banner-subtitle" style={{ color: '#c66' }}>
                      <a href="#">Limited time only.</a>
                    </h4>
                    <h3 className="banner-title">
                      <a href="#">
                        <span>Lehnga's <br />Sale Up to 70% off </span>
                      </a>
                    </h3>
                    <a href="#" className="btn btn-outline-primary-2 banner-link">
                      Shop Now <i className="icon-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="banner banner-border-hover">
                  <a href="#">
                    <img src={images.banner3} alt="Banner" />
                  </a>
                  <div className="banner-content">
                    <h4 className="banner-subtitle">
                      <a href="#">This week we love...</a>
                    </h4>
                    <h3 className="banner-title">
                      <a href="#">
                        <span>Womens <br />Holiday Clothes </span>
                      </a>
                    </h3>
                    <a href="#" className="btn btn-outline-primary-2 banner-link">
                      Discover Now <i className="icon-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4"></div>
        <div className="mb-5"></div>
        <div className="video-banner video-banner-bg bg-image text-center" style={{ backgroundImage: `url(${images.bgVideo}` }}>
          <div className="container">
            <h3 className="video-banner-title h1 text-white">
              <span>New Collection</span>
              <strong>Wedding’23 <i>/</i> Ethnic </strong>
            </h3>
            <a href="#" className="btn-video btn-iframe">
              <i className="icon-play"></i>
            </a>
          </div>
        </div>

        <div className="pt-6 pb-6" style={{ backgroundColor: '#fff' }}>
          <div className="container">
            <div className="banner-set">
              <div className="row">
                <div className="col-lg-6">
                  <div className="banner-set-content text-center">
                    <div className="set-content-wrapper">
                      <h4>Special</h4>
                      <h2>Redefine Your Look.</h2>
                      <p>Get your hands-on on our latest and greatest in casual ethnic wear </p>
                      <div className="banner-set-products">
                        <div className="row">
                          <div className="products">
                            <div className="col-6">
                              <div className="product product-2 text-center">
                                <figure className="product-media">
                                  <a href="product.html">
                                    <img src={images.product13} alt="Product image" className="product-image" />
                                  </a>
                                </figure>
                                <div className="product-body">
                                  <h3 className="product-title">
                                    <a href="product.html">Long Kameez</a>
                                  </h3>
                                  <div className="product-price"> Rs.2499 </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="product product-2 text-center">
                                <figure className="product-media">
                                  <a href="product.html">
                                    <img src={images.product14} alt="Product image" className="product-image" />
                                  </a>
                                </figure>
                                <div className="product-body">
                                  <h3 className="product-title">
                                    <a href="product.html">Linen-blend Khussa</a>
                                  </h3>
                                  <div className="product-price"> Rs.1999 </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="banner-set-image banner-border-hover">
                    <a href="#">
                      <img src={images.banner4} alt="banner" />
                    </a>
                    <div className="banner-content">
                      <h3 className="banner-title">
                        <a href="#">
                          <span>Casual Ethnic and <br />trendy key pieces. </span>
                        </a>
                      </h3>
                      <h4 className="banner-subtitle" style={{ color: 'white' }}>in this look</h4>
                      <h4 className="banner-detail">• Linen Blend Khussa <br />• Long Kameez & Dopatta </h4>
                      <h4 className="banner-price" style={{ color: 'white' }}>Rs.5999</h4>
                      <a href="#" className="btn btn-outline-primary-2 banner-link">buy all</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-6 new-arrivals">
          <div className="heading heading-center mb-3">
            <h2 className="title">New Arrivals</h2>
            <ul className="nav nav-pills justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" href="#">All</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Clothing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Shoes & Boots</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Accessories</a>
              </li>
            </ul>
          </div>



          <div className="products">
            <div className="row justify-content-center">

              <div className="col-6 col-md-4 col-lg-3">
                <Product
                  productId={4}
                  imageUrl1={images.product4_1}
                  imageUrl2={images.product4_2}
                  category="Clothing"
                  title="Waterpaint Look"
                  price="5999"
                />
              </div>

              <div className="col-6 col-md-4 col-lg-3">
                <Product
                productId={5}
                  imageUrl1={images.product5_1}
                  imageUrl2={images.product5_2}
                  category="Clothing"
                  title="Waterpaint Look"
                  price="5999"
                />
              </div>

              <div className="col-6 col-md-4 col-lg-3">
                <Product
                productId={6}
                  imageUrl1={images.product6_1}
                  imageUrl2={images.product6_2}
                  category="Clothing"
                  title="Waterpaint Look"
                  price="5999"
                />
              </div>

              <div className="col-6 col-md-4 col-lg-3">
                <Product
                productId={7}
                  imageUrl1={images.product7_1}
                  imageUrl2={images.product7_2}
                  category="Clothing"
                  title="Waterpaint Look"
                  price="5999"
                />
              </div>


            </div>
            <div className="row justify-content-center">

              <div className="col-6 col-md-4 col-lg-3">
                <Product
                productId={8}
                  imageUrl1={images.product8_1}
                  imageUrl2={images.product8_2}
                  category="Clothing"
                  title="Waterpaint Look"
                  price="5999"
                />
              </div>

              <div className="col-6 col-md-4 col-lg-3">
                <Product
                productId={9}
                  imageUrl1={images.product9_1}
                  imageUrl2={images.product9_2}
                  category="Clothing"
                  title="Waterpaint Look"
                  price="5999"
                />
              </div>

              <div className="col-6 col-md-4 col-lg-3">
                <Product
                productId={10}
                  imageUrl1={images.product10_1}
                  imageUrl2={images.product10_2}
                  category="Clothing"
                  title="Waterpaint Look"
                  price="5999"
                />
              </div>

              <div className="col-6 col-md-4 col-lg-3">
                <Product
                productId={1}
                  imageUrl1={images.product1_1}
                  imageUrl2={images.product1_2}
                  category="Clothing"
                  title="Waterpaint Look"
                  price="5999"
                />
              </div>


            </div>
          </div>
        </div>

        <div className="mb-2"></div>
        <div className="container">
          <div className="cta cta-separator mb-5">
            <div className="row">
              <div className="col-lg-6">
                <div className="cta-wrapper cta-text text-center">
                  <h3 className="cta-title">Follow us</h3>
                  <p className="cta-desc">Follow us on social media for the latest and greatest offers.</p>
                  <div className="social-icons social-icons-colored justify-content-center">
                    {socialMediaLinks.map((socialLink, index) => (
                      <a href="#" className={`social-icon social-${socialLink.title.toLowerCase()}`} title={socialLink.title} target="_blank" key={index}>
                        <i className={socialLink.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cta-wrapper text-center">
                  <h3 className="cta-title">Get the Latest Deals</h3>
                  <p className="cta-desc">
                    by <span className="text-primary">Subscribing</span> to our magazine
                  </p>
                  <form action="#">
                    <div className="input-group">
                      <input type="email" className="form-control" placeholder="Enter your Email Address" aria-label="Email Address" required />
                      <div className="input-group-append">
                        <button className="btn btn-primary btn-rounded" type="button">
                          <i className="icon-long-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </Fragment>

  )
    ;
};

export default Home;
