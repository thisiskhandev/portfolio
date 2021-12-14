import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import img1 from "../Assets/Images/portfolio-01.webp";
const Carousel = () => {
  return (
    <>
      <OwlCarousel
        className="owl-theme"
        autoplay
        nav
        dots
        loop
        margin={10}
        lazyLoad
      >
        <div className="item">
          <img src={img1} alt="img1" />
        </div>
        <div className="item">
          <img src={img1} alt="img1" />
        </div>
        <div className="item">
          <img src={img1} alt="img1" />
        </div>
        <div className="item">
          <img src={img1} alt="img1" />
        </div>
      </OwlCarousel>
    </>
  );
};
export default Carousel;
