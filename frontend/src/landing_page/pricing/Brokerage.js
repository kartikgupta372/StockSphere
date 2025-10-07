import React from "react";

function Brokerage() {
  return (
    <div className="container border-bottom text-center">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 text-center p-4">
          <a href="" style={{ textDecoration: "none", color: "blue" }}></a>
          <h3 className="fs-5 mb-4">Brokerage calculator</h3>
          <ul
            className="text-start mx-auto"
            style={{ maxWidth: "90%", lineHeight: "1.7" }}
          >
            <li>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
            </li>
            <li>
              Charged only on selling side when trading intraday or on F&O.
            </li>
            <li>
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </li>
            <li>
              Transaction/Turnover charged by exchanges (NSE, BSE, MCX) on the
              value of your transactions.
            </li>
            <li>
              BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
              to ₹10,000 per crore w.e.f 01.01.2016.
            </li>
            <li>
              (XC and XD groups have been merged into a new group X w.e.f
              01.12.2017)
            </li>
            <li>
              BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross turnover.
            </li>
            <li>
              BSE has revised transaction charges for group A, B and other
              non-exclusive scrips (non-exclusive scrips from group E, F, FC, G,
              GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
              December 1, 2022.
            </li>
            <li>
              BSE has revised transaction charges in M, MT, TS and MS groups to
              ₹275 per crore of gross turnover.
            </li>
          </ul>
        </div>
        <div className="col-4 text-center p-4">
          <a href="" style={{ textDecoration: "none", color: "blue" }}></a>
          <h4 className="fs-5 mb-4">List of charges</h4>
          <ul
            className="list-unstyled text-start mx-auto"
            style={{ maxWidth: "80%", lineHeight: "1.6" }}
          >
            <li>• Equity delivery</li>
            <li>• Intraday and F&O trades</li>
            <li>• Free direct MF</li>
            <li>• Free equity delivery</li>
            <li>• Intraday and F&O trades</li>
            <li>• Free direct MF</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
