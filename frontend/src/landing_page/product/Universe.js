import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="mb-3">The Zerodha Universe</h1>
        <p className="text-muted mb-5">
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
        <div className="col p-4 d-flex flex-column align-items-center mb-3">
          <img
            src="/media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid"
            style={{ maxWidth: "120px" }}
          />
          <p className="text-small text-muted mt-2">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col p-4 d-flex flex-column align-items-center mb-3">
          <img
            src="/media/images/streakLogo.png"
            alt="Streak"
            className="img-fluid"
            style={{ maxWidth: "120px" }}
          />
          <p className="text-small text-muted mt-2">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col p-4 d-flex flex-column align-items-center mb-3">
          <img
            src="/media/images/sensibullLogo.svg"
            alt="Sensibull"
            className="img-fluid"
            style={{ maxWidth: "120px" }}
          />
          <p className="text-small text-muted mt-2">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points.
          </p>
        </div>
        <div className="col p-4 d-flex flex-column align-items-center mb-3">
          <img
            src="/media/images/zerodhaFundhouse.png"
            alt="Zerodha Fundhouse"
            className="img-fluid"
            style={{ maxWidth: "120px" }}
          />
          <p className="text-small text-muted mt-2">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col p-4 d-flex flex-column align-items-center mb-3">
          <img
            src="/media/images/goldenpiLogo.png"
            alt="GoldenPi"
            className="img-fluid"
            style={{ maxWidth: "120px" }}
          />
          <p className="text-small text-muted mt-2">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col p-4 d-flex flex-column align-items-center mb-3">
          <img
            src="/media/images/dittoLogo.png"
            alt="Ditto"
            className="img-fluid"
            style={{ maxWidth: "120px" }}
          />
          <p className="text-small text-muted mt-2">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Universe;
