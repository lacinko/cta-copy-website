import React from "react";
import { ListItem } from "../components/ListItem";
import "../styles/Section2.css";

export const Section2 = () => {
  return (
    <div className="section2">
      <h2>
        Vieme vám
        <br /> Zabezpečiť <span className="section-span">_</span>{" "}
      </h2>
      <div className="section2-container">
        <ul className="section2-list">
          <ListItem logo="http" text="Tvorba webov" />
          <ListItem logo="important_devices" text="Webdesign na mieru" />
          <ListItem logo="ballot" text="Tvorba contentu" />
          <ListItem logo="code" text="Programovanie software" txtWrap={true} />
          <ListItem logo="create" text="Budovanie značky" txtWrap={true} />
          <ListItem logo="campaign" text="Digitálny marketing" txtWrap={true} />
        </ul>
      </div>
    </div>
  );
};
