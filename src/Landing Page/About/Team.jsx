import React, { useState } from "react";
import People from "../../assets/ZerodhaAssets/nithinKamath.jpg";
import Nikhil from "../../assets/ZerodhaAssets/Nikhil.jpg";
import Kailash from "../../assets/ZerodhaAssets/Kailash.jpg";
import Venu from "../../assets/ZerodhaAssets/Venu.jpg";
import Hanan from "../../assets/ZerodhaAssets/Hanan.jpg";
import Seema from "../../assets/ZerodhaAssets/Seema.jpg";
import Karthik from "../../assets/ZerodhaAssets/Karthik.jpg";

function Team() {
  const [showNikhil, setShowNikhil] = useState(false);
  const [showKailash, setShowKailash] = useState(false);
  const [showVenu, setShowVenu] = useState(false);
  const [showHanan, setShowHanan] = useState(false);
  const [showSeema, setShowSeema] = useState(false);
  const [showKarthik, setShowKarthik] = useState(false);

  return (
    <div className="container px-3 px-md-5">
      {/* Heading */}
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      {/* Founder Section */}
      <div className="row p-5 text-muted fs-6" style={{ lineHeight: "2.5rem", fontSize: "1.2rem" }}>
        <div className="col-12 col-md-6 p-5 mb-5 text-center">
          <img src={People} alt="Nithin Kamath" style={{ borderRadius: "50%", width: "60%" }} />
          <h4 className="mt-4">Nithin Kamath</h4>
          <h5>Founder, CEO</h5>
        </div>
        <div className="col-12 col-md-6 p-3 fs-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade-long stint as a trader.
            Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="#!" style={{ textDecoration: "none" }}>Homepage</a> /{" "}
            <a href="#!" style={{ textDecoration: "none" }}>TradingQnA</a> /{" "}
            <a href="#!" style={{ textDecoration: "none" }}>Twitter</a>
          </p>
        </div>
      </div>

      {/* Other Team Members */}
      <div className="row text-center mb-5">
        {/* Nikhil Kamath */}
        <div className="col-12 col-sm-6 col-lg-4 mb-4 text-center">
          <img src={Nikhil} alt="Nikhil" style={{ borderRadius: "50%", width: "60%" }} />
          <h4 className="mt-3">Nikhil Kamath</h4>
          <h5 className="text-muted">Co-Founder & CFO</h5>
          <p
            className="text-muted"
            style={{ cursor: "pointer" }}
            onClick={() => setShowNikhil(!showNikhil)}
          >
            Bio <i className={`fa-solid ${showNikhil ? "fa-angle-up" : "fa-angle-down"}`}></i>
          </p>
          {showNikhil && (
            <p className="fs-6 text-muted px-3">
              Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha.
              An avid reader, he always appreciates a good game of chess.
            </p>
          )}
        </div>

        {/* Kailash */}
        <div className="col-12 col-sm-6 col-lg-4 mb-4 text-center">
          <img src={Kailash} alt="Kailash" style={{ borderRadius: "50%", width: "60%" }} />
          <h4 className="mt-3">Dr. Kailash Nadh</h4>
          <h5 className="text-muted">CTO</h5>
          <p
            className="text-muted"
            style={{ cursor: "pointer" }}
            onClick={() => setShowKailash(!showKailash)}
          >
            Bio <i className={`fa-solid ${showKailash ? "fa-angle-up" : "fa-angle-down"}`}></i>
          </p>
          {showKailash && (
            <p className="fs-6 text-muted px-3">
              Kailash has a PhD in AI & Computational Linguistics. He’s the brain behind Zerodha's tech and still writes code daily.
            </p>
          )}
        </div>

        {/* Venu */}
        <div className="col-12 col-sm-6 col-lg-4 mb-4 text-center">
          <img src={Venu} alt="Venu" style={{ borderRadius: "50%", width: "60%" }} />
          <h4 className="mt-3">Venu Madhav</h4>
          <h5 className="text-muted">COO</h5>
          <p
            className="text-muted"
            style={{ cursor: "pointer" }}
            onClick={() => setShowVenu(!showVenu)}
          >
            Bio <i className={`fa-solid ${showVenu ? "fa-angle-up" : "fa-angle-down"}`}></i>
          </p>
          {showVenu && (
            <p className="fs-6 text-muted px-3">
              Venu is the backbone of Zerodha, handling operations and compliance. He holds over a dozen financial certifications and enjoys workouts, cycling, and adventure.
            </p>
          )}
        </div>

        {/* Hanan */}
        <div className="col-12 col-sm-6 col-lg-4 mb-4 text-center">
          <img src={Hanan} alt="Hanan" style={{ borderRadius: "50%", width: "60%" }} />
          <h4 className="mt-3">Hanan Delvi</h4>
          <h5 className="text-muted">CCO</h5>
          <p
            className="text-muted"
            style={{ cursor: "pointer" }}
            onClick={() => setShowHanan(!showHanan)}
          >
            Bio <i className={`fa-solid ${showHanan ? "fa-angle-up" : "fa-angle-down"}`}></i>
          </p>
          {showHanan && (
            <p className="fs-6 text-muted px-3">
              Hanan is responsible for support with unmatched energy. He led many initiatives to keep Zerodha ahead. A free thinker and occasional philosopher.
            </p>
          )}
        </div>

        {/* Seema */}
        <div className="col-12 col-sm-6 col-lg-4 mb-4 text-center">
          <img src={Seema} alt="Seema" style={{ borderRadius: "50%", width: "60%" }} />
          <h4 className="mt-3">Seema Patil</h4>
          <h5 className="text-muted">Director</h5>
          <p
            className="text-muted"
            style={{ cursor: "pointer" }}
            onClick={() => setShowSeema(!showSeema)}
          >
            Bio <i className={`fa-solid ${showSeema ? "fa-angle-up" : "fa-angle-down"}`}></i>
          </p>
          {showSeema && (
            <p className="fs-6 text-muted px-3">
              Seema has led the quality team since Zerodha’s inception and is now a director. A highly disciplined fitness enthusiast.
            </p>
          )}
        </div>

        {/* Karthik */}
        <div className="col-12 col-sm-6 col-lg-4 mb-4 text-center">
          <img src={Karthik} alt="Karthik" style={{ borderRadius: "50%", width: "60%" }} />
          <h4 className="mt-3">Karthik Rangappa</h4>
          <h5 className="text-muted">COO</h5>
          <p
            className="text-muted"
            style={{ cursor: "pointer" }}
            onClick={() => setShowKarthik(!showKarthik)}
          >
            Bio <i className={`fa-solid ${showKarthik ? "fa-angle-up" : "fa-angle-down"}`}></i>
          </p>
          {showKarthik && (
            <p className="fs-6 text-muted px-3">
              Karthik is known for simplifying financial education via Varsity. His leadership brings learning and execution together at Zerodha.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Team;
