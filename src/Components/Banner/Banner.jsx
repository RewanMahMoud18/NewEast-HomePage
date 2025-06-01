import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";

function Banner() {
  const slides = [
    {
      subtitle: "BUY FROM US & GET YOUR",
      title: "WELCOME KIT",
      description: "Be a Customer Today",
      buttonText: "ORDER NOW",
      imgSrc: "/assets/banner1.jpg",
    },
    {
      subtitle: "GET YOUR",
      title: "SHOCK ABSORBER",
      description:
        "Whether you are hauling heavy loads\nor transporting your family,\nKYB has you covered with shocks that restore performance.",
      buttonText: "ORDER TODAY",
      imgSrc: "/assets/banner2.jpg",
    },
    {
      subtitle: "LIMITED TIME DEAL",
      title: "SPECIAL DISCOUNTS",
      description: "Save Big on Top Products",
      buttonText: "SHOP DEALS",
      imgSrc: "/assets/banner1.jpg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <section className="b-wrapper">
      <Slider {...settings} className="slider-container">
        {slides.map((slide, index) => (
          <div key={index} style={{ position: "relative" }}>
            <div
              style={{
                backgroundImage: `url(${slide.imgSrc})`,
                maxHeight: "540px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                height: "calc(100vw * 0.75)",
              }}
            >
              <div className="image-overlay"></div>
              <div className="content-container">
                <div className="overlay-text">
                  <h3>{slide.subtitle}</h3>
                  <h1>{slide.title}</h1>
                  <p>
                    {slide.description.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                  <button className="banner-button">{slide.buttonText}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Banner;
