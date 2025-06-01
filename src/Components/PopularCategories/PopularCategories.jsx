import React from "react";
import { Categories } from "../../data/Categories";
import "./PopularCategories.css";
function PopularCategories() {
  return (
    <section className="popular-categories ">
      <div className="innerWidth p-container top-space">
        <h2 className="section-title">POPULAR CATEGORIES</h2>
        <div className="categories-grid">
          {Categories.map((category, index) => (
            <div key={index} className="category-card">
              <img
                src={category.image}
                alt={category.title}
                className="category-image"
              />
              <h3 className="category-title">{category.title}</h3>
              <ul className="category-items">
                {category.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <a href={category.link} className="show-all-link">
                Show All &rsaquo;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularCategories;
