import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  // Event handlers for hover
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section className="h-wrapper ">
      <div className="innerWidth h-container paddings">
        <div className="first-col">
          <img src="./assets/logo.png" alt="Logo" />
        </div>
        <div className="second-col">
          <input
            className="search-input"
            type="text"
            placeholder="Search......"
          />
          <div className="icon">
            <FontAwesomeIcon icon={faSearch} size={20} />
          </div>
        </div>
        <div
          className="third-col"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ position: "relative", cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
          {cartItems.length >= 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}

          {isHovering && (
            <div className="cart-popup">
              <h5>My Shopping Cart</h5>
              <hr></hr>
              {cartItems.length === 0 ? (
                <p>No products in the cart.</p>
              ) : (
                <p>Items are in the cart.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
