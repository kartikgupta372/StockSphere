import React from "react";

function RightImage({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container">
      <div className="row align-items-center">
        {" "}
        {/* Added align-items-center for better vertical alignment */}
        {/* Content Column */}
        <div className="col-md-6">
          <h1 className="mt-3">{productName}</h1>
          <p className="mt-3">{productDescription}</p>
          <div>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
        </div>
        {/* Image Column */}
        <div className="col-md-6 text-center">
          {" "}
          {/* Centering the image */}
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightImage;
