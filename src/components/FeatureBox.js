import React from "react";

export const FeatureBox = (props) => {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} alt="" />
      </div>
      <p className="ex__para">{props.para}</p>
      <div className="a-b-text">
        <button className="btn"> {props.title} </button>
      </div>
    </div>
  );
};
