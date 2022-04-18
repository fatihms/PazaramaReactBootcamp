import React from "react";
import "./styles.css";

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

import Login from "../../containers/Login";
import ImageMaskStlye from "../../components/ImageMaskStyle";

function LoginPage() {
  return (
    <div className="login-page-container">
      <div className="login-area-container">
        <div className="la-left">
          <Login />
        </div>
        <div className="la-middle">
          <div className="la-middle-image">
            <img
              // https://i.hizliresim.com/gio6x6n.png
              src="https://i.hizliresim.com/7mt7atl.png"
              alt="the-grand-budapest-hotel"
              className="la-mi-img"
            />
          </div>
          <div className="la-middle-left"></div>
          <div className="la-middle-right">
            <img
              // https://i.hizliresim.com/9dlvat9.png
              src="https://i.hizliresim.com/e4xq7w9.png"
              height={200}
              className="la-mr-image"
              alt=""
            />
            <h3></h3>
          </div>
        </div>
        <div className="la-right">
          <div className="la-r-icon">
            <AiFillFacebook size={48} color="#592B56" className="social-icon" />
            <AiFillTwitterSquare
              size={48}
              color="#592B56"
              className="social-icon"
            />
            <AiFillInstagram
              size={48}
              color="#592B56"
              className="social-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
