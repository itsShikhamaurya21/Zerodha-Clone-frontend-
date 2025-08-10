import React from "react";
function RightSection({image, title, description, learnMore}) {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-6 mt-5 p-5">
            <h1 className="mt-5">{title}</h1>
            <p className="fs-5 mt-3">{description}</p>
            <a href={learnMore} className=" text-primary fs-5" style={{ textDecoration:"none"}}target="_blank" >
                {learnMore}<i className="fa-solid fa-arrow-right-long ms-1"></i>
              </a>
          </div>
          <div className="col-6 ">
            <img src={image} alt="" style={{width:"95%"}}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSection;
