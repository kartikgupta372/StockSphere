import React from "react";

function Hero() {
  return (
    <div className="container border-bottom text-center mt-5 mb-5 p-3 ">
      <h1>Zerodha Products</h1>
      <h3 className="text-muted">
        Sleek, modern, and intuitive trading platforms
      </h3>
      <p className="text-muted mb-5">
        Check out our
        <a href="" style={{ textDecoration: "none", color: "blue" }}>
          {" "}
          investment offerings →
        </a>
      </p>
    </div>
  );
}

export default Hero;
