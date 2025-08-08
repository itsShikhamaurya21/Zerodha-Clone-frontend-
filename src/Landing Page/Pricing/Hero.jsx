import React from "react";
import twentyLogo from "../../assets/ZerodhaAssets/twenty.svg";
import zero from "../../assets/ZerodhaAssets/zero.svg";
function Hero() {
  return (
    <>
      <div className="container">
        <div className="row mt-5 border-bottom text-center">
          <h1 className="mt-5">Charges</h1>
          <h3 className="text-muted mt-3 mb-5">List of all charges and taxes</h3>
          <div className="row mt-5 text-center">
            <div className="col-4 p-3">
              <img src={zero} alt="" />
              <h1 style={{fontSize:"32px"}} className="mt-4">Free equity delivery</h1>
              <h4 className="fs-5 text-muted text-light-gray mt-4" style={{lineHeight:"2rem"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</h4>
            </div>
            <div className="col-4 p-3  ">
              <img src={twentyLogo} alt="" />
              <h1 style={{fontSize:"32px"}} className="mt-4">Intraday and F&O trades</h1>
              <h4 className="fs-5 text-muted text-light-gray mt-4" style={{lineHeight:"2rem"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</h4>
            </div>
               <div className="col-4 p-3">
                <img src={zero} alt="" />
                <h1 style={{fontSize:"32px"}} className="mt-4">Free direct MF</h1>
                <h4 className="fs-5 text-muted text-light-gray mt-4" style={{lineHeight:"2rem"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</h4>
               </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
