import React from "react";
import "../../index.css";

function Hero() {
  return (
    <section className="container-fluid" id="SupportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="/">Track Tickets</a>
      </div>

      <div className="row p-5 m-3" id="support">
        {/* Left Side Content */}
        <div className="col-12 col-md-6 mb-4" id="content">
          <h3
            className="fs-4 fs-md-3"
            style={{ lineHeight: "1.5" }}
          >
            Search for an answer or browse help topics to create a ticket
          </h3>
          <input
            placeholder="Eg. how do I activate F&O, why is my order getting rejected."
            className="mb-3 w-100 p-2"
            style={{ borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <div className="d-flex flex-column gap-2">
            <a href="/">Track account opening</a>
            <a href="/">Track segment activation</a>
            <a href="/">Intraday margins</a>
            <a href="/">Kite user manual</a>
          </div>
        </div>

        {/* Right Side Featured */}
        <div className="col-12 col-md-6 p-4">
          <h1 className="fs-4">Featured</h1>
          <ol>
            <li>
              <a href="/">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li className="mt-2">
              <a href="/">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
