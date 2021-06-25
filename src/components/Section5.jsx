import { Icon } from "@material-ui/core";
import React from "react";
import "../styles/Section5.css";

export const Section5 = () => {
  return (
    <div className="section section5">
      <h2>
        26
        <br />
        Členný Tím <span className="section-span">_</span>{" "}
      </h2>
      <p>
        Máme radi ozajstné výzvy a tak dávame prednosť veľkým a zložitým
        projektom.
      </p>
      <div className="card-container">
        <div className="card">
          <Icon></Icon>
          <p>Máme za sebou desiatky projektov</p>
        </div>
        <div className="card">
          <Icon></Icon>
          <p>Spolupracujeme len so špičkami v marketingu a komunikácii</p>
        </div>
        <div className="card">
          <Icon></Icon>
          <p>Klienti k nám prichádzajú z celého sveta</p>
        </div>
      </div>
    </div>
  );
};
