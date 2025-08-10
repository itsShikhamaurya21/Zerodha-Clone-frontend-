import React from "react";
 import smallCaseLogo from "../../assets/ZerodhaAssets/smallcaseLogo.png";
 import streakLogo from "../../assets/ZerodhaAssets/streakLogo.png";
 import sensibulLogo from "../../assets/ZerodhaAssets/sensibullLogo.svg";
 import ZerodhaFundLogo from "../../assets/ZerodhaAssets/zerodhaFundhouse.png";
 import Tijori from "../../assets/ZerodhaAssets/tijori.svg";
 import ditto from "../../assets/ZerodhaAssets/dittoLogo.png";
function Universe() {
  return (
  <>
  <div className="container mt-5">
    <div className="row text-center">

      <h4 className="mt-5 mb-5 text-muted">Want to know more about our technology stack? Check out the <a href="" style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</h4>
      <h1 className="mt-5 text-muted">The Zerodha Universe</h1>
      <h4 className="mt-4 mb-5 text-muted">Extend your trading and investment experience even further with our partner platforms</h4>
    <div className="row mt-5">
      <div className="col-4 p-3">
        <img src={smallCaseLogo} alt="" style={{width:"60%"}}/>
        <p className="mt-2"><span className="text-small  text-light-grey text-center text-muted">
          Thematic investing platform
          <br />
          that helps you invest in diversified
          <br />
          baskets of stocks on ETFs.
        </span>
        </p>
        
      </div>
      <div className="col-4 p-3">
        <img src={streakLogo} alt="" style={{width:"60%"}}/>
        <p className="mt-2"><span className="text-small text-light-grey text-center text-muted">
          Systematic trading platform
          <br />
          that allows you to create and backtest
          <br />
          strategies without coding.
        </span>
        </p>
        
      </div>
      <div className="col-4 p-3">
        <img src={sensibulLogo} alt="" style={{width:"60%"}}/>
        <p className="mt-2"><span className="text-small text-light-grey text-center text-muted">
          option trading platform that  lets you
          <br />
          create strategies, analyze positions, and examine
          <br />
          data points like open interest, FII/DII, and more.
        </span>
        </p>
        
      </div>
        <div className="col-4 p-3 mt-5 ">
        <img src={ZerodhaFundLogo} alt="" style={{width:"60%"}} />
        <p className="mt-2"><span className="text-small  text-light-grey text-center text-muted">
          Our asset management venture
          <br />
          that is creating simple and transparent index
          <br />
          funds to help you save for your goals.
        </span>
        </p>
        
      </div>
      <div className="col-4 p-3 mt-5">
        <img src={Tijori} alt="" style={{width:"60%"}}/>
        <p className="mt-2"><span className="text-small text-light-grey text-center text-muted">
          Thematic investing platform
          <br />
          that helps you invest in diversified
          <br />
          baskets of stocks on ETFs.
        </span>
        </p>
        
      </div>
      <div className="col-4 p-3 mt-5">
        <img src={ditto} alt="" style={{width:"60%"}} />
        <p className="mt-2"><span className="text-small text-light-grey text-center text-muted">
          Personalized advice on life 
          <br />
          and health insurance. No spam
          <br />
          and no mis-selling.
        </span>
        </p>
        
      </div>
        <button
                className="p-2 btn btn-primary fs-5 mb-5 mt-5"
                style={{
                  width: "25%",
                  margin: "0 auto",
                  fontWeight: "bold",
                }}
              >
                Sign up for Free
              </button>
      </div>
      </div>
  </div>
  
  </>
  );
}

export default Universe;
