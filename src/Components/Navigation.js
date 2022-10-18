import React, { useState } from "react";
import { Link } from "react-router-dom";
import HalloweenIcon from "../images/Halloween-Icon.png";
import close from "../images/icons/close.png";

function Navigation() {
  const [open, setOpen] = useState(true);

  console.log(open);
  return (
    <>
      <div className="nav-background">
        <div className="nav-padding">
          <Link to="/">
            <h1 style={{ fontStyle: "italic" }} className="brand">
              <img src={HalloweenIcon} alt="Icon" />
              Feedup
            </h1>
          </Link>
          <div className="nav-list">
            <Link to="/drinks">
              <h6>Drinks</h6>
            </Link>
            <Link to="/meals">
              <h6>Meals</h6>
            </Link>
            {/* <h6>About</h6> */}
            <Link to="/contact">
              <h6>Contact</h6>
            </Link>
          </div>
        </div>
      </div>
      {open ? (
        <div className="nav-warning-popup">
          <div className="nav-warning-text flex">
            <img
              src={close}
              alt="X"
              style={{ width: "35px", height: "35px", cursor: "pointer" }}
              onClick={() => setOpen(false)}
            />
            <h5>Warning! This Website Is in Early Development</h5>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Navigation;
