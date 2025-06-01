import React from "react";
import "./Counter.css";
import CountUp from "react-countup";
function Counter() {
  const counters = [
    { value: 7000, label: "Customers" },
    { value: 33, label: "Years of Excellence" },
    { value: 162, label: "Plus Brands" },
    { value: 7, label: "Branches" },
  ];
  return (
    <section className="c-wrapper">
      <div className="innerWidth c-container top-space">
        <div className="image-section">
          <img src="./assets/content 3.jpg" alt="" />
        </div>
        <div className="counter-wrapper top-space">
          <div className="counter-container innerWidth">
            <div className="count-text innerWidth">
              <div className="counter-data">
                <h3>
                  WHY US Our<br></br>Unique Advantages
                </h3>
                {counters.map((counter, index) => (
                  <div key={index} style={{ textAlign: "center" }}>
                    <h1>
                      <CountUp end={counter.value} duration={3} />
                    </h1>
                    <p>{counter.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
