import React from "react";
import "./styles.css";

function HeaderImage(props) {
  return (
    <div className="header-image-container">
      <img src={props.src} alt={props.alt} className="hi-image" />
    </div>
  );
}

export default HeaderImage;
