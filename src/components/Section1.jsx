import React, { useEffect, useState } from "react";
import "../styles/Section.css";

export const Section1 = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const imageUrls = [
    "https://www.cta.sk/assets/img/hero/tickpo.png",
    "https://www.cta.sk/assets/img/hero/besteron.png",
    "https://www.cta.sk/assets/img/hero/futuria.png",
  ];
  const logoUrls = [
    "https://www.cta.sk/assets/img/hero/tickpo_logo_homepage.svg",
    "https://www.cta.sk/assets/img/hero/besteron_logo_homepage.svg",
    "https://www.cta.sk/assets/img/hero/futuria_logo_homepage.svg",
  ];
  const headingTxts = [
    "Vytváranie eventov a predaj lístok",
    "Platobná brána",
    "Online finančný poradca",
  ];
  const pickImage = (index) => {
    setImageIndex(index);
  };

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setImageIndex(index);
      index === 2 ? (index = 0) : index++;
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="section">
      <h2>
        Web design
        <br /> & Development <span className="section-span">_</span>{" "}
      </h2>
      <button className="section-button">Naše služby</button>
      <div className="image-container">
        <div className="display-container">
          <img
            className="image-logo"
            src={logoUrls[imageIndex]}
            alt={`projekt${imageIndex}`}
          />
          <h3 className="image-heading">{headingTxts[imageIndex]}</h3>
          <img
            className="image-project"
            src={imageUrls[imageIndex]}
            alt={`projekt${imageIndex}`}
          />
          <span>
            <button className="image-button" onClick={() => pickImage(0)}>
              1
            </button>
            -
            <button className="image-button" onClick={() => pickImage(1)}>
              2
            </button>
            -
            <button className="image-button" onClick={() => pickImage(2)}>
              3
            </button>
          </span>
          <button className={`section-button smaller`}>Viac projektov</button>
        </div>
      </div>
    </div>
  );
};
