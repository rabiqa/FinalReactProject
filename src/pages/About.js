import React, { Fragment } from 'react';
import HeroBanner from '../components/HeroBanner';
import { images } from '../assets/images/Images';
import HeaderWhite from '../components/HeaderWhite';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <Fragment>
      <div className="page-wrapper">
        <HeaderWhite />
        <main className="main">
          <HeroBanner
            pageTitle={"About us"}
            subTitle={"Who we are What we are"}
            backgroundImage={images.aboutHeader}
          />

          <div className="page-content pb-0">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mb-3 mb-lg-0">
                  <h2 className="title">Our Vision</h2>
                  <p>
                    Empowering individuals through unique and sustainable fashion. Our clothing brand embraces diversity, creativity, and ethical practices. We aspire to inspire confidence, encouraging self-expression with every garment. Redefining style with premium quality and timeless designs, we envision a world where fashion meets conscience, leaving a positive impact on both people and the planet.
                  </p>
                </div>

                <div className="col-lg-6">
                  <h2 className="title">Our Mission</h2>
                  <p>
                    Our mission is to revolutionize the fashion industry by creating clothing that empowers, respects, and embraces individuality. Through ethical sourcing and sustainable practices, we aim to curate a collection of versatile and trendsetting garments that inspire self-confidence and foster a sense of community, while advocating for a greener future.
                  </p>
                </div>
              </div>

              <div className="mb-5"></div>
            </div>

            <div className="bg-light-2 pt-6 pb-5 mb-6 mb-lg-8">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 mb-3 mb-lg-0">
                    <h2 className="title">Who We Are</h2>
                    <p className="lead text-primary mb-3">We are a revolutionary brand of clothes</p>
                    <p className="mb-2">Our clothing brand embraces diversity, creativity, and ethical practices. We aspire to inspire confidence, encouraging self-expression.</p>
                    <a className="btn btn-sm btn-minwidth btn-outline-primary-2">
                      <span>VIEW OUR NEWS</span>
                      <i className="icon-long-arrow-right"></i>
                    </a>
                  </div>

                  <div className="col-lg-6 offset-lg-1">
                    <div className="about-images">
                      <img src={images.about1} alt="" className="about-img-front" />
                      <img src={images.about2} alt="" className="about-img-back" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="brands-text text-center mx-auto mb-6">
                    <h2 className="title">The world's premium design brands in one destination.</h2>
                    <p>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nis</p>
                  </div>

                  <div className="brands-display">
                    <div className="row justify-content-center">
                      <div className="col-6 col-sm-4 col-md-4">
                        <a href="#" className="brand">
                          <img src={images.brand1} alt="Brand Name" />
                        </a>
                      </div>

                      <div className="col-6 col-sm-4 col-md-4">
                        <a href="#" className="brand">
                          <img src={images.brand2} alt="Brand Name" />
                        </a>
                      </div>

                      <div className="col-6 col-sm-4 col-md-4">
                        <a href="#" className="brand">
                          <img src={images.brand3} alt="Brand Name" />
                        </a>
                      </div>

                      <div className="col-6 col-sm-4 col-md-4">
                        <a href="#" className="brand">
                          <img src={images.brand4} alt="Brand Name" />
                        </a>
                      </div>

                      <div className="col-6 col-sm-4 col-md-4">
                        <a href="#" className="brand">
                          <img src={images.brand5} alt="Brand Name" />
                        </a>
                      </div>

                      <div className="col-6 col-sm-4 col-md-4">
                        <a href="#" className="brand">
                          <img src={images.brand6} alt="Brand Name" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </Fragment>
  );
};

export default AboutUs;
