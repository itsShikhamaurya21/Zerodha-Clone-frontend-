import React from 'react';
import AwardsImg from "../../assets/ZerodhaAssets/largestBroker.svg";
import logos from "../../assets/ZerodhaAssets/pressLogos.png";

function Awards() {
  return (
    <div className="container my-5">
      <div className="row align-items-center text-center text-md-start">
        {/* Image Section */}
        <div className="col-12 col-md-6 p-3">
          <img
            src={AwardsImg}
            alt="AwardImg"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-12 col-md-6 p-3">
          <h1 className="fs-2">Largest stock broker in India</h1>
          <p className="mb-4">
            2+ million Zerodha clients contribute to over 15% of retail order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul className="list-unstyled">
                <li><p>Future and options</p></li>
                <li><p>Commodity derivatives</p></li>
                <li><p>Currency derivatives</p></li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled">
                <li><p>Stocks & IPOs</p></li>
                <li><p>Direct mutual funds</p></li>
                <li><p>Bonds and Govt. security</p></li>
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <img
              src={logos}
              alt="logos"
              className="img-fluid"
              style={{ maxWidth: "90%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
