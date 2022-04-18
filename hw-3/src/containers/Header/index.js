import React from "react";
import "./styles.css";

import { Link } from "react-router-dom";

import HeaderTitle from "../../components/HeaderTitle";
import PrimaryButton from "../../components/PrimaryButton";
import HeaderImage from "../../components/HeaderImage";

function Header() {
  return (
    <div className="header-container">
      <div className="h-text-container">
        <HeaderTitle
          title="The Grand Budapest Hotel"
          paragraph="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam et
          repellat voluptatum vero cumque soluta dolores excepturi, voluptatibus
          itaque."
        />
        <div className="t-button-container">
          <Link to="/login">
            <PrimaryButton>Book Now</PrimaryButton>
          </Link>
        </div>
      </div>
      <HeaderImage
        alt="Grand Budapest Hotel"
        src="http://www.filmdoktoru.com/wp-content/uploads/2015/02/grand-budapest-hotel-filmdoktoru2.jpg"
      />
    </div>
  );
}

export default Header;
