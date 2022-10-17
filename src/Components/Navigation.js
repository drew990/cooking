import React from "react";
import { Link } from "react-router-dom";
import HalloweenIcon from "../images/Halloween-Icon.png";

function Navigation() {
  return (
    <div className="nav-background">
      <div className="nav-padding">
        <Link to="/">
          <h1 style={{ fontStyle: "italic" }} className="brand">
            <img src={HalloweenIcon} alt="Icon" />
            Feedup
          </h1>
        </Link>
        {/* <div className="nav-list">
          <Link to="/drinks">
            <h6>Drinks</h6>
          </Link>
          <h6>Meals</h6>
          <h6>Contact</h6>
          <h6>About</h6>
        </div> */}
      </div>
    </div>
  );
}

export default Navigation;
