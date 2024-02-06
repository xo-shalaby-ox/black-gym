import React, { useState } from "react";
import OfferImg from "../images/offer.png";
import CrisOne from "../images/cris one.jpg";
import CrisTwo from "../images/cris two.jpg";
import CrisThree from "../images/cris three.jpg";

export const Offers = () => {
  const [active, setActive] = useState(0);
  const ToggleTab = (index) => {
    setActive(index);
  };
  return (
    <div className="offer__edit">
      <div className="offer__text">
        <h1 className="offer__tx">offers</h1>
      </div>
      <div className="offer">
        <div className="offer__img">
          <img src={OfferImg} alt="" />
        </div>
        <div className="pr-heading">
          <h1>
            A BIG <span>OFFER</span> FOR THIS SUMMER
          </h1>
          <p className="details">
            Offers valid until the end of summer, up to 50%
          </p>
          <div className="pr-btns">
            <button onClick={() => ToggleTab(1)} className="pr-btn">
              JOIN NOW
            </button>
          </div>
        </div>
        <div
          className={
            active === 1 ? "offer__content show__offer" : "offer__content"
          }
        >
          <span onClick={() => ToggleTab(0)} className="offer__close">
            +
          </span>
          <div className="offer__box">
            <div className="offer__img-cont">
              <img src={CrisOne} alt="" />
            </div>
            <div className="offer__text-cont">
              <p>
                Don’t forget your legs during your new year fitness drive. Work
                them from every angle and build lower-body strength from home
                with this dumbbell leg workout ...
              </p>
            </div>
          </div>
          <div className="offer__box">
            <div className="offer__img-cont">
              <img src={CrisTwo} alt="" />
            </div>
            <div className="offer__text-cont">
              <p>
                Whether you’re completely new to fitness or you’re a seasoned
                gym-goer, these core workouts for men will work your abs from
                every angle ...
              </p>
            </div>
          </div>
          <div className="offer__box">
            <div className="offer__img-cont">
              <img src={CrisThree} alt="" />
            </div>
            <div className="offer__text-cont">
              <p>
                This full-body dumbbell workout is a useful option for building
                muscle at home to keep your new year’s fitness regime on track
                ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
