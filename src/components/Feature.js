import React from "react";
import { FeatureBox } from "./FeatureBox";
import Cardio from "../images/cardio.png";
import Flex from "../images/flex muscles.jpg";
import Weight from "../images/weight lifting.webp";
import SpecifcM from "../images/specific muscles.webp";

export const Feature = () => {
  return (
    <div className="features__tx">
      <div className="feature__text-fe">
        <h1 className="txt">features</h1>
      </div>
      <div id="features">
        <div className="a-container">
          <FeatureBox
            image={Weight}
            title="Weight Lifting"
            para=" your goal is to build muscle mass or achieve a fitter, more toned body, lifting weights can help you get there."
          />
          <FeatureBox
            image={SpecifcM}
            title="Specific Muscle"
            para="You have more than 600 muscles in your body that you use almost constantly. Some move your body — others help your internal organs keep you alive"
          />
          <FeatureBox
            image={Flex}
            title="Flex Your Muscle"
            para="If a group, organization, or country flexes its muscles, it does something to impress or frighten people, in order to show them that it has power and is considering using it."
          />
          <FeatureBox
            image={Cardio}
            title="Cardio Exercise"
            para="cardio exercise is any rhythmic activity that raises your heart rate
          into your target heart rate zone."
          />
        </div>
      </div>
    </div>
  );
};
