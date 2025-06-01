import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./test.css";
export const Test = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("next"); // "next" or "prev" for animation

  const slides = [
    {
      title: "Slide Title 1",
      description: "This is the description for slide 1.",
      image: "./assets/banner 1.jpg",
    },
    {
      title: "Slide Title 2",
      description: "This is the description for slide 2.",
      image: "./assets/banner 2.jpg",
    },
    {
      title: "Slide Title 3",
      description: "This is the description for slide 3.",
      image: "./assets/banner 1.jpg",
    },
  ];

  const nextSlide = () => {
    setDirection("next");
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("prev");
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto slide change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? "next" : "prev");
    setCurrentSlide(index);
  };

  return (
    <div className="slider-banner">
      <button className="prev-button" onClick={prevSlide}>
        &#10094;
      </button>
      <div className={`slide ${direction}`}>
        <div className="text-content">
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].description}</p>
        </div>
        <div className="image-content">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
          />
        </div>
      </div>
      <button className="next-button" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};
export default Test;
