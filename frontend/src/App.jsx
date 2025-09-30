import React from "react";
import Navbar from "./components/navbar.jsx";
import Products from "./components/products.jsx";
import LoginPage from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";  // ← import here
import Iphonepro from "./components/iphonepro.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <ScrollToTop />   {/* ← add this line */}
      <div className="w-screen h-screen bg-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="font-bold ml-6 text-black pt-7">
                  This is Dummy website created by react.js ,express.js ,node.js & mongodb
                </h1>
                <p className="mt-5 ml-6 text-black">
                  These products are fetched from backend using mongodb, node.js & express.js. when you click on products you are directed to product detail page which is fetched from backend.
                </p>
                <Products />
                
              </>
            }
          />
          <Route path="/products/:id" element={<ProductDetail />} />
          
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}
