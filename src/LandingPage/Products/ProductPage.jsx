import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import kite from "../../assets/ZerodhaAssets/kite.png";
import Coin from "../../assets/ZerodhaAssets/coin.png";
import Console from "../../assets/ZerodhaAssets/console.png";
// import Sentinel from "../../assets/ZerodhaAssets/sentinel.png";
import Varsity from "../../assets/ZerodhaAssets/varsity.png";
import KiteConnectAPI from "../../assets/ZerodhaAssets/kiteconnect.png";

function ProductPage() {
  // Placeholder for title and description
  
  
  return (
    <>
      
      <Hero></Hero>
      <LeftSection image={kite} title={"Kite"} description={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."} learnMore="learn More" tryDemo="Try Demo" googlePlay="" appStore=""></LeftSection>

      <RightSection image={Console} title={"Console"} description={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."} learnMore={"learn More"}></RightSection>

      <LeftSection image={Coin} title={"Coin"} description={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."} learnMore="Coin"  googlePlay="" appStore=""></LeftSection>

      <RightSection image={KiteConnectAPI} title={"Kite Connect API"} description={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."} learnMore={"Kite Connect"}></RightSection>

      <LeftSection image={Varsity} title={"Varsity mobile"} description={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."}  googlePlay="" appStore=""></LeftSection>


      <Universe></Universe>
      
    </>
  );
}

export default ProductPage;
