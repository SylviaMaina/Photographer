import React from "react";
import { Carousel } from "react-bootstrap";
import carrousel1 from "./Media/collage1.jpg";
import carrousel2 from "./Media/collage2.jpg";
import carrousel3 from "./Media/collage3.jpg";

function Carousels() {
  return (
    <div className="car">
      <div className="top"></div>
      <h2>Portflio</h2>
      <div className="side"></div>
      <Carousel>
        <Carousel.Item>
          <img src={carrousel1} alt="..." />
        </Carousel.Item>
        <Carousel.Item>
          <img src={carrousel2} alt="..." />
        </Carousel.Item>
        <Carousel.Item>
          <img src={carrousel3} alt="..." />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousels;
