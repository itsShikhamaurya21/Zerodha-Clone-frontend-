import React from "react";
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import HomePage from "./LandingPage/Home/HomePage";
import AboutPage from "./LandingPage/About/AboutPage";
import PricingPage from "./LandingPage/Pricing/PricingPage";
import SupportPage from "./LandingPage/Support/SupportPage";
import SignupPage from "./LandingPage/Signup/SignupPage";
import ProductPage from "./LandingPage/Products/ProductPage";
import Navbar from "./LandingPage/Navbar";
import Footer from "./LandingPage/Footer";
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
