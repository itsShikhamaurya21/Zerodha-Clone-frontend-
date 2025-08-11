import React, { useState } from "react";
import People from "../../assets/ZerodhaAssets/nithinKamath.jpg";
import Nikhil from "../../assets/ZerodhaAssets/Nikhil.jpg";
import Kailash from "../../assets/ZerodhaAssets/Kailash.jpg";
import Venu from "../../assets/ZerodhaAssets/Venu.jpg";
import Hanan from "../../assets/ZerodhaAssets/Hanan.jpg";
import Seema from "../../assets/ZerodhaAssets/Seema.jpg";
import Karthik from "../../assets/ZerodhaAssets/karthik.jpg";

const members = [
  {
    name: "Nikhil Kamath",
    role: "Co-Founder & CFO",
    img: Nikhil,
    bio: "Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess."
  },
  {
    name: "Dr. Kailash Nadh",
    role: "CTO",
    img: Kailash,
    bio: "Kailash has a PhD in AI & Computational Linguistics. He’s the brain behind Zerodha's tech and still writes code daily."
  },
  {
    name: "Venu Madhav",
    role: "COO",
    img: Venu,
    bio: "Venu is the backbone of Zerodha, handling operations and compliance. He holds over a dozen financial certifications and enjoys workouts, cycling, and adventure."
  },
  {
    name: "Hanan Delvi",
    role: "CCO",
    img: Hanan,
    bio: "Hanan is responsible for support with unmatched energy. He led many initiatives to keep Zerodha ahead. A free thinker and occasional philosopher."
  },
  {
    name: "Seema Patil",
    role: "Director",
    img: Seema,
    bio: "Seema has led the quality team since Zerodha’s inception and is now a director. A highly disciplined fitness enthusiast."
  },
  {
    name: "Karthik Rangappa",
    role: "COO",
    img: Karthik,
    bio: "Karthik is known for simplifying financial education via Varsity. His leadership brings learning and execution together at Zerodha."
  }
];

function Team() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="container px-3 px-md-5">
      {/* Heading */}
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      {/* Founder */}
      <div
        className="row p-5 text-muted fs-6"
        style={{ lineHeight: "2.5rem", fontSize: "1.2rem" }}
      >
        <div className="col-12 col-md-6 p-5 mb-5 text-center">
          <img
            src={People}
            alt="Nithin Kamath"
            style={{ borderRadius: "50%", width: "60%" }}
          />
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

      {/* Other Members */}
      <div className="row text-center mb-5">
        {members.map((m, idx) => (
          <div key={m.name} className="col-12 col-sm-6 col-lg-4 mb-4 text-center">
            <img
              src={m.img}
              alt={m.name}
              style={{ borderRadius: "50%", width: "60%" }}
            />
            <h4 className="mt-3">{m.name}</h4>
            <h5 className="text-muted">{m.role}</h5>
            <p
              className="text-muted"
              style={{ cursor: "pointer" }}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              Bio{" "}
              <i
                className={`fa-solid ${
                  openIndex === idx ? "fa-angle-up" : "fa-angle-down"
                }`}
              ></i>
            </p>
            {openIndex === idx && (
              <p className="fs-6 text-muted px-3">{m.bio}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
