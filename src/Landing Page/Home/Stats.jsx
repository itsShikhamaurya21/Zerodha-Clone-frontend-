import React from "react";
import Ecosystem from "../../assets/ZerodhaAssets/ecosystem.png";

function Stats() {
  return (
    <>
      <div className="container p-4">
        <div className="row g-4 align-items-center">
          {/* Left Section */}
          <div className="col-12 col-lg-6">
            <h1 className="fs-2 mb-4">Trust with confidence</h1>

            <h2 className="fs-5 fw-semibold mt-4">Customer-first always</h2>
            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>

            <h2 className="fs-5 fw-semibold mt-4">No spam or gimmicks</h2>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>

            <h2 className="fs-5 fw-semibold mt-4">The Zerodha universe</h2>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>

            <h2 className="fs-5 fw-semibold mt-4">Do better with money</h2>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>

          {/* Right Section */}
          <div className="col-12 col-lg-6 text-center">
            <img
              src={Ecosystem}
              alt="ecosystem"
              className="img-fluid mb-3"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
              <a href="#" className="text-decoration-none fw-semibold">
                Explore our products <i className="fa-solid fa-arrow-right-long"></i>
              </a>
              <a href="#" className="text-decoration-none fw-semibold">
                Try Kite demo <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
