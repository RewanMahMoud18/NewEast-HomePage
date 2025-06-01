import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <section className="f-wrapper top-space">
      <div className="f-container ineerWidth">
        <div className="col-text">
          <h4>Join Us:</h4>
          <a href="https://www.facebook.com" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instegram.com" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        <div className="col-text">
          <h4>WHY BUY FROM US</h4>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Partnership</a>
            </li>
            <li>
              <a href="#">Certifications</a>
            </li>
            <li>
              <a href="#">Policy</a>
            </li>
          </ul>
        </div>
        <div className="col-text">
          <h4>ABOUT US</h4>
          <ul>
            <li>
              <a href="#">About Neweast</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Supply Chain</a>
            </li>
            <li>
              <a href="#">E-ordering</a>
            </li>
          </ul>
        </div>
        <div className="col-text">
          <h4>SUBSCRIBE AND GET A FREE GIFT</h4>
          <p>
            Subscribe to our Newsletter and get bonuses for the next purchase
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input type="text" placeholder="Enter your email" />
            <button className="send-btn">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
