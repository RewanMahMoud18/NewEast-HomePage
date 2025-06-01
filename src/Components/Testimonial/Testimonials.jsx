import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./Testimonial.css";

function Testimonials() {
  const testimonial = [
    {
      name: "Maria Smantha",
      role: "Web Developer",
      image: "./assets/Neweast.jpg",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
      rating: 4.5,
    },
    {
      name: "Lisa Cudrow",
      role: "Graphic Designer",
      image: "./assets/sudan.jpg",
      testimonial:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.",
      rating: 5,
    },
    {
      name: "John Smith",
      role: "Marketing Specialist",
      image: "./assets/ghana.jpg",
      testimonial:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
      rating: 4,
    },
    {
      name: "Maria Smantha",
      role: "Web Developer",
      image: "./assets/Neweast.jpg",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
      rating: 4.5,
    },
    {
      name: "Lisa Cudrow",
      role: "Graphic Designer",
      image: "./assets/sudan.jpg",
      testimonial:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.",
      rating: 5,
    },
    {
      name: "John Smith",
      role: "Marketing Specialist",
      image: "./assets/ghana.jpg",
      testimonial:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
      rating: 4,
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i}>&#9733;</span>);
    }
    if (halfStar) {
      stars.push(<span key="half">&#9734;</span>);
    }
    return stars;
  };
  return (
    <section className="t-wrapper ">
      <div className="t-container innerWidth top-space">
        <div className="testimonial-slider">
          <h2>Testimonials</h2>
          <p>What Our Customers Say About Us</p>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonial.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card">
                  <img src={item.image} alt={item.name} className="avatar" />
                  <h3>{item.name}</h3>
                  <p className="role">{item.role}</p>
                  <p className="testimonial">"{item.testimonial}"</p>
                  <div className="rating">{renderStars(item.rating)}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
