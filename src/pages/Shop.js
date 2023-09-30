import React, { Fragment } from "react";
import HeaderWhite from "../components/HeaderWhite";
import HeroBanner2 from "../components/HeroBanner2";
import { images } from "../assets/images/Images";
import Product from "../components/SingleProduct";
import Footer from "../components/Footer";

const Shop = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <HeaderWhite />
                <main className="main">
                    <HeroBanner2
                        pageTitle={"Shop"}
                        subTitle={"All Products"}
                        backgroundImage={images.pageHeader}
                    />
                    <div style={{padding: "50px"}}>

                        <div className="products">
                            <div className="row justify-content-center">
                                <div className="col-md-3">
                                    <Product
                                        imageUrl1={images.product1_1}
                                        imageUrl2={images.product1_2}
                                        category="Clothing"
                                        title="Waterpaint Looks"
                                        price="5999"
                                    />
                                </div>
                                <div className="col-md-3">
                                    <Product
                                        imageUrl1={images.product2_1}
                                        imageUrl2={images.product2_2}
                                        category="Clothing"
                                        title="Waterpaint Look2"
                                        price="5999"
                                    />
                                </div>
                                <div className="col-md-3">
                                    <Product
                                        imageUrl1={images.product3_1}
                                        imageUrl2={images.product3_2}
                                        category="Clothing"
                                        title="Waterpaint Look3"
                                        price="5999"
                                    />
                                </div>
                                <div className="col-md-3">
                                    <Product
                                        imageUrl1={images.product4_1}
                                        imageUrl2={images.product4_2}
                                        category="Clothing"
                                        title="Waterpaint Look4"
                                        price="5999"
                                    />
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
export default Shop;