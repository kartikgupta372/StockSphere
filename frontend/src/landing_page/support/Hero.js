import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="row mt-5 mb-5 p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track tickets</a>

        <div className="row p-5 ">
          <div className="col-6 p-3">
            <h1 className="fs-3">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input
              style={{ width: "80%", height: "50px" }}
              placeholder="Eg. how do I activate F&0"
            />
            <br />
            <a href="" className="mr-3">
              Track account opening
            </a>
            <br />

            <a href="" className="mr-3">
              Track segment activation
            </a>
            <br />
            <a href="" className="mr-3">
              {" "}
              Intraday margins
            </a>
            <br />
            <a href="" className="mr-3">
              Kite user manual
            </a>
          </div>
          <div className="col-6 ">
            <h1>Featured</h1>
            <a href="">
              1 Change in expiry day of NSE derivative contracts from April 04,
              2025 [Withheld]
            </a>
            <br />
            <a href=""> 2 Rights Entitlements listing in April 2025</a>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
