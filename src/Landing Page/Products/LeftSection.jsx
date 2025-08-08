import React from "react";
import googlePlayImg from "../../assets/ZerodhaAssets/googlePlayBadge.svg";
import appStoreBadge from "../../assets/ZerodhaAssets/appstoreBadge.svg";

function LeftSection({ image, title, description, tryDemo="", learnMore="", googlePlay="", appStore="" }) {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img src={image} alt="Product preview" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{title}</h1>
          <p className="fs-4">{description}</p>

          <div className="mt-3">
           <div className="kiteProducts text-primary fs-5">
  {tryDemo && (
    <a href={tryDemo} target="_blank" style={{textDecoration:"none"}}>
      {tryDemo}
      <i className="fa-solid fa-arrow-right-long ms-1 mx-3"></i>
    </a>
  )}
  {learnMore && (
    <a href={learnMore} target="_blank" style={{textDecoration:"none", marginLeft: "10px"}}>
      {learnMore}
      <i className="fa-solid fa-arrow-right-long ms-1"></i>
    </a>
  )}
</div>


            <div className="social gap-3 mt-4">
              <a href={googlePlay} target="_blank" rel="noopener noreferrer">
                <img src={googlePlayImg} alt="Download on Google Play" className="img-fluid mx-3" style={{ height: "40px" }} />
              </a>
              <a href={appStore} target="_blank" rel="noopener noreferrer">
                <img src={appStoreBadge} alt="Download on App Store" className="img-fluid" style={{ height: "40px" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
