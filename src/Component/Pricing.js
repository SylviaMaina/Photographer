import React from "react";
import Card from "react-bootstrap/Card";
import streets from "./Media/streets.jpg";
import studio from "./Media/studio.jpg";
import video from "./Media/video.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

import "./Pricing.css";

function Pricing() {
  return (
    <div className="pricing">
      <div>
        <h2>Pricing</h2>
        <div className="pbox"></div>
        <div className="pbox1"></div>
        <div className="line"></div>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="cards">
        <Card style={{ width: "18rem" }}>
          <img src={studio} alt="..." />
          <Card.Body>
            <Card.Title>Studio Photograpy</Card.Title>
            <Card.Text>
              <h4>Perfect for rainy days</h4>
              <h5>
                <AccessTimeIcon />
                Up to 5 hours
              </h5>
              <h5>
                <MonetizationOnOutlinedIcon />
                $150 per hour
              </h5>
              <h5>20 edited photos</h5>
              <button>Book</button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            boxShadow: "25px 20px 10px #aaaaaa",
            border: "5px solid black",
          }}
        >
          <img src={streets} alt="..." />
          <Card.Body>
            <Card.Title>Street photography</Card.Title>
            <Card.Text>
              <h4>For real fashionistas</h4>
              <h5>
                <AccessTimeIcon />
                Up to 4 hours
              </h5>
              <h5>
                <MonetizationOnOutlinedIcon />
                $250 per hour
              </h5>
              <h5>30 edited photos</h5>
              <button>Book</button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <img src={video} alt="..." />
          <Card.Body>
            <Card.Title>Video + Photoshoot</Card.Title>
            <Card.Text>
              <h4>For quality content</h4>

              <h5>
                <AccessTimeIcon />
                Up to 5 hours
              </h5>
              <h5>
                <MonetizationOnOutlinedIcon />
                $150 per hour
              </h5>
              <h5>20 edited photos</h5>
              <button>Book</button>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Pricing;
