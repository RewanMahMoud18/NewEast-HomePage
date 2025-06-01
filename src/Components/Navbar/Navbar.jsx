import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faPhone } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };
  return (
    <section className="n-wrapper ">
      <div className="innerWidth n-container">
        <div className="dropdown-container">
          <button
            className="dropdown-button"
            onClick={() => toggleDropdown("main")}
          >
            <span className="dropdown-icon">☰</span> NewEast Catalogue
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
          {openDropdown === "main" && (
            <div className="dropdown-menu">
              <div className="dropdown-menu-item">
                <a>AC Parts</a>
              </div>
              <div className="dropdown-menu-item">
                <a>Auto Care</a>
              </div>
              <div className="dropdown-menu-item">
                <a>Battery</a>
              </div>
              <div className="dropdown-menu-item">
                <a>Bearings</a>
              </div>
              <div className="dropdown-menu-item">
                <a>Brake Parts</a>
              </div>
              <div className="dropdown-menu-item">
                <a>Cooling</a>
              </div>
              <div className="dropdown-menu-item">
                <a>Drivetrain</a>
              </div>
              <div className="dropdown-menu-item">
                <a>Electricals</a>
              </div>
              <div className="dropdown-menu-item">
                <a>Engine</a>
              </div>
              <div className="dropdown-menu-item">
                <a>Exterior</a>
              </div>
              <div className="dropdown-menu-item">
                <a>Filters</a>
              </div>
              <div className="dropdown-menu-item">
                <a>Ignition</a>
              </div>
              <div className="dropdown-menu-item">
                <a>Lubricants</a>
              </div>
              <div className="dropdown-menu-item">
                <a>Rubber Parts</a>
              </div>
              <div className="dropdown-menu-item">
                <a>Suspension</a>
              </div>
            </div>
          )}
        </div>
        <div className="navlinks">
          <ul>
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Partnership</a>
                </li>
                <li>
                  <a href="#">Supply Chain</a>
                </li>
                <li>
                  <a href="#">Reach</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Deals</a>
            </li>
            <li>
              <a href="#">Hot</a>
              <ul>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="contact-number">
          <FontAwesomeIcon icon={faPhone} />
          <span>800-639-3278</span>
        </div>
        <div className="res-dropdown-container">
          <button
            className="res-dropdown-button"
            onClick={() => toggleDropdown("responsive")}
          >
            <span className="res-dropdown-icon">☰</span> NavLinks
          </button>
          {openDropdown === "responsive" && (
            <div className="res-dropdown-menu">
              <div className="res-dropdown-menu-item">
                <a>Home</a>
              </div>
              <div className="res-dropdown-menu-item">
                <a>About</a>
              </div>
              <div className="res-dropdown-menu-item">
                <a>Products</a>
              </div>
              <div className="res-dropdown-menu-item">
                <a>Contact</a>
              </div>
              <div className="res-dropdown-menu-item">
                <a>Deals</a>
              </div>
              <div className="res-dropdown-menu-item">
                <a>Hot</a>
              </div>
              <div className="res-dropdown-menu-item">
                <FontAwesomeIcon icon={faPhone} />
                <span>800-639-3278</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
