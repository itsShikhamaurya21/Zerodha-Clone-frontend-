import React from "react";
import HomeHero from "../../assets/ZerodhaAssets/HomeHero.png";

function Hero() {
  return (
    <div className="container py-5 mb-5">
      <div className="row text-center">
        <div className="col-12">
          <img
            src={HomeHero}
            alt="Zerodha Hero"
            className="img-fluid mb-4"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="col-12">
          <h1 className="mt-4 fs-1 fs-md-2 fs-lg-1">Invest in everything</h1>
          <p className="px-3 px-md-5">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
        </div>
        <div className="col-12">
          <button
            className="btn btn-primary fs-5 py-2 px-4 mt-3"
            style={{
              width: "100%",
              maxWidth: "250px",
            }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
