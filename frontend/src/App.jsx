// src/App.jsx
import React from "react";
import Navbar from "./components/navbar.jsx";
import Products from "./components/products.jsx";
import LoginPage from "./components/LoginPage.jsx";
import Signup from "./components/Signup.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Dashboard from "./components/Dashboard.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ToastContainer position="top-right" autoClose={3000} theme="light" />

      <div className="w-screen min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="font-bold ml-6 text-black pt-7">
                  🛍️ Products Page using MERN Stack
                </h1>
                <h2 className="mt-5 ml-6 text-2xl text-black">
                  A simple Products Page built with the MERN stack (MongoDB, Express.js, React.js, Node.js).
                  The backend connects to MongoDB Atlas and provides REST APIs, while the frontend displays products in a clean and responsive UI.
                </h2>
                <Products />
              </>
            }
          />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
