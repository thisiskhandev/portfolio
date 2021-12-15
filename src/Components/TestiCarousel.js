import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import img1 from "../Assets/Images/portfolio-01.webp";
import { FaStar } from "react-icons/fa";
import QuoteIcon from "../Assets/Images/Icons/quote.webp";
import TestimonialsDataArr from "./Environments/TestimonialsDataArr";
const TestiCarousel = () => {
  return (
    <>
      <OwlCarousel
        className="owl-theme testimonials"
        autoplay
        nav
        dots
        loop
        margin={0}
        lazyLoad
        items={1}
        navText={["&#10229;", "&#10230;"]}
        // smartSpeed={3000}
      >
        {/* <div className="item">
          <TestiCards
            client="testing"
            clientName="Nevine Dhawan"
            clientDesignation="CEO Of Officer"
            title="Android App Design"
          />
        </div> */}
        {TestimonialsDataArr.map((val) => {
          return (
            <div className="item" key={val.id}>
              <TestiCards
                client={val.client}
                clientName={val.clientName}
                clientDesignation={val.clientDesignation}
                title={val.title}
                date={val.date}
                comments={val.comments}
              />
            </div>
          );
        })}
      </OwlCarousel>
    </>
  );
};
export default TestiCarousel;

const TestiCards = (props) => {
  return (
    <>
      <main className="container testi_card">
        <section className="row mt-5 g-4">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 height-100">
            <div className="card">
              <div className="testi_content">
                <div className="inner_image mb-3">
                  <picture>
                    <img src={img1} alt="images" className="img-fluid" />
                  </picture>
                </div>
                <span className="subtitle">{props.client}</span>
                <h3 className="card-title">{props.clientName}</h3>
                <span className="designation">{props.clientDesignation}</span>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 height-100 position-relative">
            <picture>
              <img
                src={QuoteIcon}
                alt="images"
                className="img-fluid opacity-50 quote_image"
                width="135"
              />
            </picture>
            <div className="card no_hover card_line">
              <div className="row card_description">
                <div className="title_area row">
                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-7 col-12">
                    <h3 className="title">{props.title}</h3>
                    <span className="date">{props.date}</span>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-12 d-flex justify-content-end align-items-center justify-content-sm-center my-xl-0 my-lg-0 my-md-0 my-sm-0 my-3">
                    <div className="rating">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <hr />
                <p className="description">{props.comments}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
