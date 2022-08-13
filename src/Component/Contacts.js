import React from "react";

function Contacts() {
  return (
    <div
      style={{
        paddingLeft: "15rem",
        paddingRight: "15rem",
        paddingTop: "4rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="socials">
        <h3>Contact</h3>
        <ul>
          <li>LinkedIn</li>
          <li>Instagram</li>
          <li>Github</li>
        </ul>
      </div>
      <div className="mails">
        <h3>Subscribe To Weekly Mailing</h3>
        <input type="text" placeholder="Enter Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Contacts;
