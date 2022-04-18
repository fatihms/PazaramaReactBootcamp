import React from "react";
import "./styles.css";

function CommonButton({ children, onClick, btnColor = "#105652", variant }) {
  return (
    <button
      className={variant === "outlined" ? "cm-outline-btn" : "cm-btn"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default CommonButton;
