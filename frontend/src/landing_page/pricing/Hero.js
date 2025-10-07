import React from "react";

function Hero() {
  return (
    <div className="container border-bottom text-center">
      <div className="row mt-5 border-bottom mb-5">
        <h1>Charges</h1>
        <h3 className="text-muted mt-3 mb-5">List of all charges and taxes</h3>
      </div>
      <div className="row p-5 mt-5 text-center">
        <div className="col-4 text-center p-4">
          <img src="media/images/pricingEquity.svg" alt="Equity Pricing" />
          <h2>Free equity delivery</h2>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 text-center p-4">
          <img src="media/images/intradayTrades.svg" alt="Intraday Trades" />
          <h2>Intraday and F&O trades</h2>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 text-center p-4">
          <img src="media/images/pricingEquity.svg" alt="Direct MF" />
          <h2>Free direct MF</h2>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
