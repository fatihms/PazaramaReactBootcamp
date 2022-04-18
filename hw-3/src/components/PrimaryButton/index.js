import React from "react";
import "./styles.css";

function PrimaryButton({ children, ...props }) {
  return <button className="primary-button">{children}</button>;
}

export default PrimaryButton;
