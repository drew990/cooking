import React from "react";
import choice from "../images/icons/choice.png";
import cursor from "../images/icons/cursor.png";
import saltbae from "../images/icons/saltbae.png";

function Steps() {
  return (
    <div className="steps-background">
      <h2>Follow The Steps Below</h2>
      <div className="flex">
        {/* <div className="steps-icons-div">
          <img style={{ paddingBottom: "1.5rem" }} src={choice} alt="Choices" />
          <h4>Choose Your Meal</h4>
        </div> */}
        <div className="steps-icons-div">
          <img style={{ paddingBottom: "1.5rem" }} src={cursor} alt="Choices" />
          <h4>Get A Meal</h4>
        </div>
        <div className="steps-icons-div">
          <img
            style={{ paddingBottom: "1.5rem" }}
            src={saltbae}
            alt="Choices"
          />
          <h4>Start Cooking</h4>
        </div>
      </div>
    </div>
  );
}

export default Steps;
