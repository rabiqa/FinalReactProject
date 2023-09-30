import React, { Fragment, useEffect, useState } from "react";
import HeroBanner2 from "../components/HeroBanner2";
import HeaderWhite from "../components/HeaderWhite";
import { images } from "../assets/images/Images";
import Footer from "../components/Footer";

const CheckOut = () => {

    const [data, setData] = useState([])
    const [subtotal, setSubtotal] = useState(0)


    const populateCart = () => {

        let productsInCart = JSON.parse(localStorage.getItem("cartProducts")) || [];
        setData(productsInCart)

        let total = 0;

        for (let i = 0; i < productsInCart.length; i++) {
            const element = productsInCart[i];
            total += element.total

        }

        setSubtotal(total)

    }

    useEffect(() => {
        populateCart()

    }, [])
    return (
        <Fragment>
            <div className="page-wrapper">
                <HeaderWhite />
                <main className="main">
                    <HeroBanner2
                        pageTitle={"Shop"}
                        subTitle={"Check Out"}
                        backgroundImage={images.pageHeader}

                    />

                    <div className="page-content">
                        <div className="row pt-5">
                            <div className="col-md-6">
                                <div style={{ padding: "5%" }}>
                                    <p>Name</p>
                                    <input type="text" className="form-control" id="cname" placeholder="Enter Your Name *" required />

                                    <p>Email</p>
                                    <input type="email" className="form-control" id="cname" placeholder="Enter Your Email *" required />

                                    <p>Phone</p>
                                    <input type="number" className="form-control" id="cname" placeholder="Enter Your Phone No *" required />

                                    <p>Address</p>
                                    <textarea className="form-control" ></textarea>

                                    <button type="submit" className="btn btn-outline-primary-2 btn-minwidth-sm">
                                        <span>Continue Shopping</span>
                                        <i className="icon-long-arrow-right"></i>
                                    </button>

                                </div>

                            </div>

                            <div className="col-md-6">
                                <div style={{ padding: "5%", backgroundColor: "#f9f9f9" }}>


                                    <table className="table table-cart table-mobile">
                                        <thead>
                                            <tr>
                                                <th>Product</th>

                                                <th>Total</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.length > 0 ? (data.map((item, index) => (
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

                                                    <td className="total-col">Rs.{item.total}</td>

                                                </tr>

                                            ))) : (
                                                <tr>
                                                    <td colSpan="3">No items in cart</td>
                                                </tr>)}


                                        </tbody>
                                    </table>
                                    <button type="button" className="btn btn-outline-primary-2 btn-minwidth-sm">
                                        <span onClick={() => alert("Order Placed Successfully")}>Place Order</span>
                                        <i className="icon-long-arrow-right"></i>
                                    </button>
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

export default CheckOut;