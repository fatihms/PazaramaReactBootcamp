import React, { useState, useEffect, useContext } from "react";
import "./styles.css";

import UserContext from "../../context/UserContext";

function HomePage() {
  const { fullName, setFullName } = useContext(UserContext);

  const exitSite = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="home-page-container">
      <h1 className="hp-h1">Merhaba, {fullName}</h1>
      <br />
      <button className="hp-button" onClick={exitSite}>
        Sign Out
      </button>
    </div>
  );
}

export default HomePage;
