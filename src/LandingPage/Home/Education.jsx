import React from "react";
import EducationImage from "../../assets/ZerodhaAssets/education.svg";

function Education() {
  return (
    <div className="container mt-5 px-3">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
          <img
            src={EducationImage}
            alt="Stock market education illustration"
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <h1 className="mb-3 fs-1 fw-bold">
            Free and open market education
          </h1>
          <p>
            Varsity, the largest online stock market education book in the
            world covering everything from the basics to advanced trading.
          </p>
          <p>
            <a href="#" className="text-decoration-none">
              Varsity <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </p>

          <p className="mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <p>
            <a href="#" className="text-decoration-none">
              TradingQ&A <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
