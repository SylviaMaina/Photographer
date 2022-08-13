import React from "react";
import grandma from "./Media/grandma.jpg";
import bride from "./Media/bride.jpg";
import "./About.css";
function About() {
  return (
    <div>
      <div className="grandma">
        <img src={grandma} alt="..." />
        <div></div>
      </div>
      <div className="About">
        <h5>About Me</h5>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </h6>
      </div>
      <div className="bride">
        <div className="bbox"></div>
        <div className="bbox2"></div>
        <img src={bride} alt="..." />
      </div>
    </div>
  );
}

export default About;
