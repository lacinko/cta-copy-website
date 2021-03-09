import React from "react";
import "../styles/Section3.css";

export const Section3 = () => {
  return (
    <div className="section">
      <h2>
        Cta proces <span className="section-span">_</span>{" "}
      </h2>
      <div className="image-container1">
        <span className="text1">
          Zákazník <br /> zadá <br /> špecifikáciu
        </span>
        <img
          src="https://www.cta.sk/assets/img/proces-mobile.svg"
          alt="chipset"
          className="chipset1"
        />
      </div>
      <img
        src="https://www.cta.sk/assets/img/proces-mobile-2.svg"
        alt="chipset2"
        className="chipset2"
      />
    </div>
  );
};
