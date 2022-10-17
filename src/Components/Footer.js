import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <h5 style={{ textAlign: "center", paddingBottom: "1rem" }}>
        Made By <a href="https://github.com/drew990">Andrew Banagas</a>
      </h5>
      <h6>&copy; 2022 Feedup</h6>
    </footer>
  );
}

export default Footer;
