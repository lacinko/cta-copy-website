import { Icon } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "../styles/Section4.css";

export const Section4 = () => {
  const displayData = {
    imgs: ["engineering", "pageview", "thumb_up_alt"],
    heading: ["CTA SUPPORT", "INDIVIDUÁLNY PRÍSTUP", "GARANCIA KVALITY"],
    description: [
      "Počas celej doby spolupráce sme vám kedykoľvek k dispozícií. Od prvého stretnutia po finálne odovzdanie projektu a aj po ňom sa o nás dokážete oprieť. Skonzultujeme vaše nápady pripomienky a postrehy, poradíme vám a spoločne nájdeme riešenie na všetko.",
      "Každý klient je pre nás rovnocenným partnerom a každý projekt na ktorom pracujeme, si tak trochu berieme za vlastný. Nič u nás nejde cez kopirák a ku všetkým zakázkam sa staviama maximálne profesionálne a vždy inak. Lebo veríme, že tak to má byť.",
      "Na našu prácu cheme byť vždy hrdí a preto každý projekt doťahujeme do posledného a čo najmenšieho detialu tak, aby sme vedeli garantovať 100%-tný výsledok a spokojnosť zákaznika. O kvalite našich služieb hovorí aj to, že nám dôveruje už niekoľko spokojných klientov a našich partnerov.",
    ],
  };
  const [imageIndex, setImageIndex] = useState(0);
  const pickImage = (index) => {
    setImageIndex(index);
  };

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setImageIndex(index);
      index === 2 ? (index = 0) : index++;
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section2 section4">
      <div className="diplay-container1">
        <Icon className="section4-picture">{displayData.imgs[imageIndex]}</Icon>
        <h2>{displayData.heading[imageIndex]}</h2>
        <p>{displayData.description[imageIndex]}</p>
      </div>
      <Icon
        className="arrow-btn"
        onClick={() =>
          setImageIndex((prevIdx) => (prevIdx == 2 ? 0 : prevIdx + 1))
        }
      >
        double_arrow
      </Icon>
      <span className="control-panel">
        <div className="btn-container">
          <button className="image-button" onClick={() => pickImage(0)}>
            1
          </button>
          CTA SUPPORT
        </div>
        -
        <div className="btn-container">
          <button className="image-button" onClick={() => pickImage(1)}>
            2
          </button>
          INDIVIDUÁLNY PRÍSTUP
        </div>
        -
        <div className="btn-container">
          <button className="image-button" onClick={() => pickImage(2)}>
            3
          </button>
          GARANCIA KVALITY
        </div>
      </span>
    </div>
  );
};
