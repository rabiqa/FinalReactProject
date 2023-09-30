import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../assets/images/Images'
const HeaderWhite = () => {
    return (
        <header className="header">
            <div className="header-middle sticky-header">
                <div className="container-fluid">
                    <div className="header-left">
                        <Link to="/" className="logo">
                            <img src={images.logo} alt="" width="180" height="25" />
                        </Link>
                        <nav className="main-nav">
                            <ul className="menu">
                                <li className="active">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="">
                                    <Link to="/shop">Shop</Link>
                                </li>
                                <li className="">
                                    <Link to="/product">Product</Link>
                                </li>
                                <li className="">
                                    <Link to="/about">About Us</Link>
                                </li>
                                <li className="">
                                    <Link to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </nav>

                    </div>
                    <div className="header-right">
                        <a className="wishlist-link">
                            <i className="icon-heart-o"></i>
                        </a>
                        <div className="dropdown cart-dropdown">
                            <Link to="/cart" className="dropdown-toggle">

                                <i className="icon-shopping-cart"></i>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderWhite;
