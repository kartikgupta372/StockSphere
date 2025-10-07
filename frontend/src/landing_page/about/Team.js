import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row mb-5 mt-5 border-top p-5">
        <h1 className=" text-center  mt-5 ">People</h1>
      </div>

      <div
        className="row  border-top text-muted fs-6"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 mt-5 text-center">
          <img
            src="media\images\nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h5>Zerodha,CEO</h5>
        </div>
        <div className="col-6 mt-5 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
            <br />
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
            <br />
            Playing basketball is his zen.
            <br />
          </p>
          <p>
            Connect on Homepage / TradingQnA / Twitter
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
