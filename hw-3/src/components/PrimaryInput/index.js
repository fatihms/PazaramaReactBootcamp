import React from "react";
import "./styles.css";

import { AiOutlineEye } from "react-icons/ai";

function PrimaryInput(props) {
  return (
    <div className="primary-input-container">
      <span className="pi-text">{props.text}</span>
      <div className="pi-input-container">
        <input
          className="i-input-field"
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
        {/* <i className="i-input-icon">
          <AiOutlineEye />
        </i> */}
      </div>
      {props.type === "password" && (
        <p className="pi-forgot-text">Forgot Password?</p>
      )}
    </div>
  );
}

export default PrimaryInput;
