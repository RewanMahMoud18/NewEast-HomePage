import React from "react";
import "./Benifit.css";
function Benifits() {
  return (
    <section className="B-wrapper">
      <div className="B-container innerWidth ">
        <div className="Benifit-data">
          <div className="icon-container">
            <img src="./assets/transit.jpg" alt="transit" />
          </div>
          <span className="benefit-text">Fast Delivery</span>
        </div>
        <div className="Benifit-data">
          <div className="icon-container">
            <img src="./assets/returns.jpg" alt="transit" />
          </div>
          <span className="benefit-text">Easy returns</span>
        </div>
        <div className="Benifit-data">
          <div className="icon-container">
            <img src="./assets/wallet.jpg" alt="transit" />
          </div>
          <span className="benefit-text">Easy Payments</span>
        </div>
        <div className="Benifit-data">
          <div className="icon-container">
            <img src="./assets/box.jpg" alt="transit" />
          </div>
          <span className="benefit-text">Free gifts</span>
        </div>
      </div>
    </section>
  );
}

export default Benifits;
