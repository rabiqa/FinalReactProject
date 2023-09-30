import React, { Fragment, useEffect, useState } from "react";
import HeaderWhite from "../components/HeaderWhite";
import HeroBanner from "../components/HeroBanner";
import HeroBanner2 from "../components/HeroBanner2";
import { images } from "../assets/images/Images";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";



const Cart = () => {
    const [data, setData] = useState([])
    const [subtotal, setSubtotal] = useState(0)

  
    const populateCart = () => {

        let productsInCart = JSON.parse(localStorage.getItem("cartProducts")) || [];
        setData(productsInCart)

        let total =  0;

        for (let i = 0; i < productsInCart.length; i++) {
            const element = productsInCart[i];
            total+= element.total
            
        }

        setSubtotal(total)
        
    }
    const updateqty = (id,qty) => {
        let productArray = [...data]

        const existingProduct = productArray.find((item) => item.id === id);

        if (existingProduct) {
            existingProduct.qty = qty;
            existingProduct.total = qty * parseInt(existingProduct.price)

        }
         let total =0;
        for (let i = 0; i < productArray.length; i++) {
            const element = productArray[i];
            total+= element.total
            
        }
        setSubtotal(total)

        setData(productArray)
        localStorage.setItem("cartProducts", JSON.stringify(productArray));

    
    }

    const removeCart = (productId) => {

        let productsInCart = JSON.parse(localStorage.getItem("cartProducts")) || [];
        
        let updatedProduts = [] 
        let total = 0
        for (let i = 0; i < productsInCart.length; i++) {
            const element = productsInCart[i];
            if (element.id != productId) {
                updatedProduts.push(element)
                total+= element.total
            }
            
            
        }
        setSubtotal(total)
         
      
        
        localStorage.setItem("cartProducts", JSON.stringify(updatedProduts)); 
        setData(updatedProduts)
        
      }
    useEffect(() => {
        populateCart()
                
    },[])


    return (
        <Fragment>
            <div className="page-wrapper">
                <HeaderWhite />
                <main className="main">
                    <HeroBanner2
                        pageTitle={"Shop"}
                        subTitle={"Shopping Cart"}
                        backgroundImage={images.pageHeader}
                    />
                    <div className="page-content">
                        <div className="cart">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-9">
                                        <table className="table table-cart table-mobile">
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {data.length > 0 ? (
                                                    data.map((item, index) => (
                                                        <tr key={index}>
                                                            <td className="product-col">
                                                                <div className="product">
                                                                    <figure className="product-media">
                                                                        <a href="#">
                                                                            <img src={item.image} alt="Product image" />
                                                                        </a>
                                                                    </figure>
                                                                    <h3 className="product-title">
                                                                        <a href="#">{item.title}</a>
                                                                    </h3>
                                                                </div>
                                                            </td>
                                                            <td className="price-col">Rs.{item.price}</td>
                                                            <td className="quantity-col">
                                                                <div className="cart-product-quantity">
                                                                    <input
                                                                        type="number"
                                                                        className="form-control"
                                                                        id={`quantity-${index}`}
                                                                        name={`quantity-${index}`}
                                                                        defaultValue={item.qty}
                                                                        onChange={(e)=> updateqty(item.id,e.target.value)}
                                                                        min="1"
                                                                        max="5"
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td className="total-col">Rs.{item.total}</td>
                                                            <td className="remove-col">
                                                                <button className="btn-remove" onClick={(e) => removeCart(item.id)}>
                                                                    <i className="icon-close"></i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="5">No items in cart</td>
                                                    </tr>
                                                )}
                                               
                                            </tbody>
                                        </table>
                                        <div className="cart-bottom">
                                            <div className="cart-discount">
                                                <form action="#">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" required placeholder="coupon code" />
                                                        <div className="input-group-append">
                                                            <button className="btn btn-outline-primary-2" type="submit">
                                                                <i className="icon-long-arrow-right"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <aside className="col-lg-3">
                                        <div className="summary summary-cart">
                                            <h3 className="summary-title">Cart Total</h3>
                                            <table className="table table-summary">
                                                <tbody>
                                                    <tr className="summary-subtotal">
                                                        <td>Subtotal:</td>
                                                        <td>Rs.{subtotal}</td>
                                                    </tr>
                                                    <tr className="summary-shipping">
                                                        <td>Shipping:</td>
                                                        <td>&nbsp;</td>
                                                    </tr>
                                                    <tr className="summary-shipping-row">
                                                        <td>
                                                            <div className="custom-control custom-radio">
                                                                <input type="radio" id="free-shipping" name="shipping" className="custom-control-input" />
                                                                <label className="custom-control-label" for="free-shipping">Free Shipping</label>
                                                            </div>
                                                        </td>
                                                        <td>Rs.00</td>
                                                    </tr>
                                                    <tr className="summary-shipping-row">
                                                        <td>
                                                            <div className="custom-control custom-radio">
                                                                <input type="radio" id="standart-shipping" name="shipping" className="custom-control-input" />
                                                                <label className="custom-control-label" for="standart-shipping">Standart:</label>
                                                            </div>
                                                        </td>
                                                        <td>Rs.100</td>
                                                    </tr>
                                                    <tr className="summary-shipping-row">
                                                        <td>
                                                            <div className="custom-control custom-radio">
                                                                <input type="radio" id="express-shipping" name="shipping" className="custom-control-input" />
                                                                <label className="custom-control-label" for="express-shipping">Express:</label>
                                                            </div>
                                                        </td>
                                                        <td>Rs200</td>
                                                    </tr>
                                                    <tr className="summary-total">
                                                        <td>Total:</td>
                                                        <td>Rs1600.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <Link to="/checkout">
                                            <a className="btn btn-outline-primary-2 btn-order btn-block">PROCEED TO CHECKOUT</a>
                                            </Link>
                                        </div>
                                        <a className="btn btn-outline-dark-2 btn-block mb-3">
                                            <span>CONTINUE SHOPPING</span>
                                            <i className="icon-refresh"></i>
                                        </a>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

            </div>
            <Footer />
        </Fragment>
    )
}

export default Cart;