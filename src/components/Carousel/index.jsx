import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

// pictures need to be 1190x800
function MyCarousel(props) {
  // console.log("(MyCarousel) props ", props);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container justify-content-center">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100 h-auto img-thumbnail mt-3" src={props.img[0]} alt="First Slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-auto img-thumbnail mt-3" src={props.img[1]} alt="Second Slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-auto img-thumbnail mt-3" src={props.img[2]} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MyCarousel;
