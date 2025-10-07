import React from "react";

function LeftImage({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6  ">
          <img src={imageURL} alt={productName} />
        </div>
        <div className="col-6 p-5 mt-8">
          <h1 className="mt-3">{productName}</h1>
          <p className="mt-3">{productDescription}</p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media\images\googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="media\images\appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImage;
