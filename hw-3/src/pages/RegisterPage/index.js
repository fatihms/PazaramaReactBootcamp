import React from "react";
import "./styles.css";

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

import Register from "../../containers/Register";
import ImageMaskStlye from "../../components/ImageMaskStyle";

function RegisterPage() {
  return (
    <div className="register-page-container">
      <div className="register-area-container">
        <div className="ra-left">
          <Register />
        </div>
        <div className="ra-middle">
          <div className="ra-middle-image">
            <img
              // https://i.hizliresim.com/gio6x6n.png
              src="https://i.hizliresim.com/7mt7atl.png"
              alt="the-grand-budapest-hotel"
              className="ra-mi-img"
            />
          </div>
          <div className="ra-middle-left"></div>
          <div className="ra-middle-right">
            <img
              // https://i.hizliresim.com/9dlvat9.png
              src="https://i.hizliresim.com/e4xq7w9.png"
              height={200}
              className="ra-mr-image"
              alt=""
            />
            <h3></h3>
          </div>
        </div>
        <div className="ra-right">
          <div className="ra-r-icon">
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

export default RegisterPage;
