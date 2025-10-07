import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(245, 245, 245)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5 mb-5">
          <div className="col-3">
            <img src="media/images/logo.svg" alt="Logo" className="mb-5 mt-3" style={{ width: "70%" }} />
            <p>© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
          </div>
          <div className="col-3">
            <p>Company</p>
            <a href="#">About<br /></a>
            <a href="#">Products<br /></a>
            <a href="#">Pricing<br /></a>
            <a href="#">Referral programme<br /></a>
            <a href="#">Careers<br /></a>
            <a href="#">Zerodha.tech<br /></a>
            <a href="#">Open source<br /></a>
            <a href="#">Press & media<br /></a>
            <a href="#">Zerodha Cares (CSR)<br /></a>
          </div>
          <div className="col-3">
            <p>Support</p>
            <a href="#">Contact Us <br /></a>
            <a href="#">Support Portal<br /></a>
            <a href="#">Z-connect blog<br /></a>
            <a href="#">List of changes<br /></a>
            <a href="#">Downloads and resources<br /></a>
            <a href="#">Videos<br /></a>
            <a href="#">Market overview<br /></a>
            <a href="#">How to file a complaint?<br /></a>
            <a href="#">Status of complaint<br /></a>
          </div>
          <div className="col-3">
            <p>Account</p>
            <a href="#">Open an account<br /></a>
            <a href="#">Fund transfer<br /></a>
          </div>
        </div>
        <div className="text-small text-muted fs-6 mt-5">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF<br />
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances<br />
          </p>
          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism Investments in securities market are subject to market risks; read all the related documents carefully before investing.<br />
          </p>
          <p>
            "Prevent unauthorized transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is a one-time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund, etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non-allotment, the funds will remain in your bank account. As a business, we don't give stock tips and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
