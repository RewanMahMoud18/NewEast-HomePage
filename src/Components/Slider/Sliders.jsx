import React, { useState } from "react";
import { products } from "../../data/SliderData";
import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { arrow } from "@popperjs/core";

function Sliders() {
  const [activeTab, setActiveTab] = useState("newArrivals");

  const tabs = [
    { id: "newArrivals", label: "NEW ARRIVALS" },
    { id: "featured", label: "FEATURED" },
    { id: "popular", label: "POPULAR" },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <section className="product-section">
      <div className="product-container">
        {/* Tabs */}
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Slider */}
        <div className="products">
          <Slider key={activeTab} {...sliderSettings}>
            {products[activeTab].map((product) => (
              <div className="product-item" key={product.id}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <p className="product-category">{product.category}</p>
                <p className="product-name">{product.name}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Sliders;
