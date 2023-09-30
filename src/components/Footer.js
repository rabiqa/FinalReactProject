import React from 'react';
import { images } from '../assets/images/Images'; // Import your images
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer footer-2">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <div className="widget widget-about">
                <Link to="/">
                <img src={images.logo} className="footer-logo" alt="Footer Logo" width="180" height="25" /></Link>
                <p>
                  Ayzal Koleski: Effortless elegance, impeccable comfort. Embrace your unique style with our meticulously designed garments, crafted from premium materials. Redefine fashion with us. Join the movement.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4 className="widget-title">Information</h4>
                <ul className="widget-list">
                  <li>
                  <Link to="/about">About Us</Link>
                
                  </li>
                  <li>
                  <Link to="#">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4 className="widget-title">Customer Service</h4>
                <ul className="widget-list">
                  <li>
                    <a href="#">Money-back guarantee!</a>
                  </li>
                  <li>
                    <a href="#">Terms and conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copyright">Copyright © 2023 Ayzal Koleski. All Rights Reserved.</p>
          <ul className="footer-menu">
            <li>
              <a href="#">Terms Of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <div className="social-icons social-icons-color">
            <span className="social-label">Social Media</span>
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
    </footer>
  );
};

export default Footer;
