import React, { Fragment } from 'react';
import HeroBanner from '../components/HeroBanner';
import { images } from '../assets/images/Images';
import HeaderWhite from '../components/HeaderWhite';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <Fragment>
      <div className="page-wrapper">
        <HeaderWhite />
        <main className="main">
          <HeroBanner
            pageTitle={"Contac us"}
            subTitle={"Get and touch with us"}
            backgroundImage={images.contactHeader}
          />

          <div className="page-content pb-0">
            <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="contact-box text-center">
                  <h3>Office</h3>
                  <address>ABC Road, Karachi, Pakistan KHI, SINDH, PAK </address>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-box text-center">
                  <h3>Start a Conversation</h3>
                  <div>
                    <a href="mailto:#">info@ayzalKoleski.com</a>
                  </div>
                  <div>
                    <a href="">+92 123-456-789</a>, <a href="">+92 321-456-789</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-box text-center">
                  <h3>Social</h3>
                  <div className="social-icons social-icons-color justify-content-center">
                    <a href="#" className="social-icon social-facebook" title="Facebook" target="_blank">
                      <i className="icon-facebook-f"></i>
                    </a>
                    <a href="#" className="social-icon social-twitter" title="Twitter" target="_blank">
                      <i className="icon-twitter"></i>
                    </a>
                    <a href="#" className="social-icon social-instagram" title="Instagram" target="_blank">
                      <i className="icon-instagram"></i>
                    </a>
                    <a href="#" className="social-icon social-youtube" title="Youtube" target="_blank">
                      <i className="icon-youtube"></i>
                    </a>
                    <a href="#" className="social-icon social-pinterest" title="Pinterest" target="_blank">
                      <i className="icon-pinterest"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

              <div className="mb-5"></div>
            </div>

      
     
            <hr className="mt-3 mb-5 mt-md-1"/>
            <div className="touch-container row justify-content-center">
              <div className="col-md-9 col-lg-7">
                <div className="text-center">
                  <h2 className="title mb-1">Get In Touch</h2>
                  <p className="lead text-primary"> We collaborate with ambitious brands and people; we’d love to build something great together. </p>
                  <p className="mb-3">Effortless elegance, impeccable comfort. Embrace your unique style with our meticulously designed garments Redefine fashion with us. Join the movement.</p>
                </div>
                <form action="#" className="contact-form mb-2">
                  <div className="row">
                    <div className="col-sm-4">
                      <label for="cname" className="sr-only">Name</label>
                      <input type="text" className="form-control" id="cname" placeholder="Name *" required/>
                    </div>
                    <div className="col-sm-4">
                      <label for="cemail" className="sr-only">Name</label>
                      <input type="email" className="form-control" id="cemail" placeholder="Email *" required/>
                    </div>
                    <div className="col-sm-4">
                      <label for="cphone" className="sr-only">Phone</label>
                      <input type="tel" className="form-control" id="cphone" placeholder="Phone"/>
                    </div>
                  </div>
                  <label for="csubject" className="sr-only">Subject</label>
                  <input type="text" className="form-control" id="csubject" placeholder="Subject"/>
                  <label for="cmessage" className="sr-only">Message</label>
                  <textarea className="form-control" cols="30" rows="4" id="cmessage" required placeholder="Message *"></textarea>
                  <div className="text-center">
                    <button type="submit" className="btn btn-outline-primary-2 btn-minwidth-sm">
                      <span>SUBMIT</span>
                      <i className="icon-long-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ContactUs;
