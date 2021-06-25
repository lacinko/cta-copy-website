import { Icon } from "@material-ui/core";
import React, { useState } from "react";
import "../styles/Section3.css";

export const Section3 = () => {
  const [isVisible, setIsVissible] = useState(false);
  const openContainer = () => {
    setIsVissible((prevState) => !prevState);
  };
  return (
    <div className="section section3">
      <h2>
        Cta proces <span className="section-span">_</span>{" "}
      </h2>
      <div className="image-container1">
        <span className="text1">
          Zákazník <br /> zadá <br /> špecifikáciu
        </span>
        <span className="text2">
          Analýza <br />a doladenie <br /> špecifikácie
        </span>
        <span className="text3">
          Nacenenie <br /> projektu
        </span>
        <img
          src="https://www.cta.sk/assets/img/proces-mobile.svg"
          alt="chipset"
          className="chipset1"
        />
      </div>
      {!isVisible ? (
        <p className="containerBtn" onClick={openContainer}>
          Zobraziť viac <Icon>keyboard_arrow_down</Icon>
        </p>
      ) : (
        ""
      )}
      <div
        className={isVisible ? "image-container2-active" : "image-container2"}
      >
        <img
          src="https://www.cta.sk/assets/img/proces-mobile-2.svg"
          alt="chipset"
          className="chipset2"
        />
      </div>
      {isVisible ? (
        <p className="containerBtn" onClick={openContainer}>
          Skryť <Icon>keyboard_arrow_up</Icon>
        </p>
      ) : (
        ""
      )}
    </div>
  );
};
