import React, { useState } from "react";
import imgOne from "../images/image one.jpg";
import imgTwo from "../images/image two.jpg";
import imgTrhee from "../images/image three.jpg";
import about from "../images/about.jpg";
export const About = () => {
  const [ToggleState, SetToggleState] = useState(0);
  const ToggleTab = (index) => {
    SetToggleState(index);
  };
  return (
    <div className="about-edit">
      <div className="about__tx">
        <h1 className="about-tx">about</h1>
      </div>
      <div id="about">
        <div className="about__pic">
          <img src={about} alt="about" />
        </div>
        <div className="about-text">
          <h1>LEARN MORE ABOUT US</h1>
          <p>
            Gymnasium apparatus like barbells, jumping boards, running paths,
            tennis-balls, cricket fields, and fencing areas are used for
            exercises. In safe weather, outdoor locations are the most conducive
            to health
          </p>
          <button onClick={() => ToggleTab(1)} className="btn__about">
            READ MORE
          </button>
          <div
            className={
              ToggleState === 1
                ? "about__content show__about"
                : "about__content"
            }
          >
            <span onClick={() => ToggleTab(0)} className="signup__close-about">
              +
            </span>
            <div className="about__box">
              <div className="about__img">
                <img className="pic" alt="" src={imgOne}></img>
              </div>
              <div className="about__info">
                <h2>WHO WE ARE …</h2>
                <h3>A 24/7 OPEN GYM TRAINING FACILITY </h3>
                <p className="about__info-txt">
                  Conveniently located in the heart of Cincinnati’s Northside
                  neighborhood, we offer coaching services, self-guided training
                  programs, and a 24/7 open gym
                </p>
              </div>
            </div>
            <div className="about__box">
              <div className="about__img">
                <img className="pic" alt="" src={imgTwo}></img>
              </div>
              <div className="about__info">
                <h2>WHAT WE DO …</h2>
                <h3>COACHING/PROGRAMS/RESULTS </h3>
                <p className="about__info-txt">
                  Leveraging over 14+ years of experience from a coach who truly
                  lives a fitness lifestyle, will guarantee you’re appropriately
                  guided with a coaching plan that works right for you
                </p>
              </div>
            </div>
            <div className="about__box">
              <div className="about__img">
                <img className="pic" alt="" src={imgTrhee}></img>
              </div>
              <div className="about__info">
                <h2>HOW WE DO IT …</h2>
                <h3>WE provides you all info </h3>
                <p className="about__info-txt">
                  By creating 100% customized coaching plans, using simple,
                  effective nutrition strategies, and implementing the science
                  of exercise physiology, we target a direct approach to your
                  results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
