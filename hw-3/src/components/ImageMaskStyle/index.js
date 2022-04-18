import React from "react";
import "./styles.css";

function ImageMaskStyle(props) {
  return (
    <div>
      {/* https://i.pinimg.com/originals/59/58/2d/59582d6cf2d9da047608c8a13ac0081e.jpg */}
      <img src={props.src} alt={props.alt} className="image-mask-stlye-img" />
      {/* <svg>
        <clipPath id="myClipPath">
          <circle cx="20" cy="50" r="500" />
        </clipPath>
      </svg> */}
    </div>
  );
}

export default ImageMaskStyle;
