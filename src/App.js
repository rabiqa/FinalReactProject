import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Product from './pages/ProductDetails';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<CheckOut/>} />
        
        


        
      </Routes>
    </Router>
  );
}

export default App;
