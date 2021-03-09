import React, { useState } from "react";
import "../styles/Header.css";
import Icon from "@material-ui/core/Icon";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const openMenu = () => {
    setIsActive((prevState) => !prevState);
  };
  return (
    <div className="header">
      <div className="header-container">
        <img src="https://www.cta.sk/Assets/img/logo.svg" alt="logo" />
        <Icon className="header-menu" fontSize="large" onClick={openMenu}>
          {isActive ? "menu_open" : "menu"}
        </Icon>
      </div>
      <nav className="header-nav">
        <ul className={isActive ? "nav-list" : "nav-list closed"}>
          <li className="list-link">
            <a href="X">
              Služby <Icon>keyboard_arrow_down</Icon>
            </a>
          </li>
          <li className="list-link">
            <a href="X">Referencie</a>
          </li>
          <li className="list-link">
            <a href="X">My</a>
          </li>
          <li className="list-link">
            <a href="X">Karéra</a>
          </li>
          <li className="list-link">
            <a href="X">Kontaktuj nás</a>
          </li>
          <li className="list-link">
            <a href="X">
              <Icon fontSize="large">facebook</Icon>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
