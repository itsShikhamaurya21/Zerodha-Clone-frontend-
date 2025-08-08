import React from "react";
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import HomePage from "./Landing Page/Home/HomePage";
import AboutPage from "./Landing Page/About/AboutPage";
import PricingPage from "./Landing Page/Pricing/PricingPage";
import SupportPage from "./Landing Page/Support/SupportPage";
import SignupPage from "./Landing Page/Signup/SignupPage";
import ProductPage from "./Landing Page/Products/ProductPage";
import Navbar from "./Landing Page/Navbar";
import Footer from "./Landing Page/Footer";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/signup" element={<SignupPage/>}></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route path="/product" element={<ProductPage></ProductPage>}></Route>
        <Route path="/pricing" element={<PricingPage></PricingPage>}></Route>
        <Route path="/support" element={<SupportPage></SupportPage>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
