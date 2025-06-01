import React from "react";
import "./LoginNav.css";
export const LoginNav = () => {
  return (
    <section className="l-wrapper">
      <div className="innerWidth l-container">
        <div className="l-left">
          <a
            className="nav-link"
            href="https://neweast.ae/hot-deals/"
            style={{ paddingRight: "10px" }}
          >
            HOT DEALS
          </a>
          <a className="nav-link" href="http://20.74.247.50:9445/login">
            CUSTOMER LOGIN
          </a>
        </div>
        <div className="l-right">
          <a className="nav-link" href="#">
            LOGIN
          </a>
          <span className="divider">|</span>
          <a className="nav-link" href="#" style={{ paddingLeft: "0" }}>
            REGISTER
          </a>
        </div>
      </div>
    </section>
  );
};
