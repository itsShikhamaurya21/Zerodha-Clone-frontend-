import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import ChargesExplained from "./ChargesExplained";
import AccountCharge from "./AccountCharge";
// import Footer from "../Footer";
function PricingPage() {
  return (
    <>
      
      <Hero></Hero>
      <Brokerage></Brokerage>
      <ChargesExplained></ChargesExplained>
      <AccountCharge></AccountCharge>
    </>
  );
}

export default PricingPage;
