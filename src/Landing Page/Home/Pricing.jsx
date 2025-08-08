import React from "react";

function Pricing() {
  return (
    <div className="container mb-5">
      <div className="row align-items-center text-center text-md-start">
        
        {/* Left Side Content */}
        <div className="col-12 col-md-6 mb-4 mb-md-0 mt-5">
          <h1 className="mb-3 fs-1">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency in India.
            Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none fw-semibold">
            See Pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        {/* Right Side Boxes */}
        <div className="col-12 col-md-6">
          <div className="row text-center g-3">
            <div className="col-12 col-sm-6 p-3 border rounded">
              <h1 className="mb-3">₹0</h1>
              <p className="mb-0">
                Free equity delivery <br /> and direct mutual funds
              </p>
            </div>
            <div className="col-12 col-sm-6 p-3 border rounded">
              <h1 className="mb-3">₹20</h1>
              <p className="mb-0">
                Intraday and <br /> F&O
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
