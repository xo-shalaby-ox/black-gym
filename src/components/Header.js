import React from "react";
import BannerPhoto from "../images/banner.png";
export const Header = () => {
  return (
    <div id="main">
      <div className="header__img">
        <img src={BannerPhoto} alt="" />
      </div>
      <div className="name">
        <h2>STEP UP YOUR</h2>
        <h1>
          <span>FITNESS</span> WITH US
        </h1>
        <p className="details">
          Build Your Body And Fitness With Professional Touch
        </p>
      </div>
    </div>
  );
};
