import React from "react";

import "./styles.css";

function HeaderTitle(props) {
  return (
    <div className="header-title-container">
      <h1 className="ht-title">{props.title}</h1>
      <p className="ht-paragraph">{props.paragraph}</p>
    </div>
  );
}

export default HeaderTitle;
