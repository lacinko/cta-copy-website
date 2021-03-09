import React from "react";
import Icon from "@material-ui/core/Icon";
import "../styles/ListItem.css";

export const ListItem = ({ logo, text, txtWrap }) => {
  return (
    <div className="list-item">
      <li>
        <a href="">
          <span className="list-heading">
            <Icon className="list-logo">{logo}</Icon>
            {txtWrap ? text.split(" ").join("\n") : text}
          </span>
          <Icon className="list-arrow">keyboard_arrow_right</Icon>
        </a>
      </li>
    </div>
  );
};
