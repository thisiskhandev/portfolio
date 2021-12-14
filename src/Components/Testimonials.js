import React from "react";
import BootClasses from "./Environments/BootClasses";
import Carousel from "./Carousel";
import { FaStar } from "react-icons/fa";
import img1 from "../Assets/Images/portfolio-01.webp";
import QuoteIcon from "../Assets/Images/Icons/quote.webp";
const Testimonials = () => {
  return (
    <>
      <main className="container cardss portfolioMain" id="testimonials">
        <section className="row">
          <div className="col-12 text-center">
            <span className="subtitle">WHAT CLIENTS SAY</span>
            <h2 className="title">Testimonials</h2>
          </div>
        </section>
        <section className="row">
          <Carousel />
          <TestiCards />
        </section>
      </main>
    </>
  );
};

export default Testimonials;

const TestiCards = () => {
  return (
    <>
      <main className="container testi_card">
        <section className="row mt-5 g-4">
          <div className={BootClasses[0].CardClass + " height-100"}>
            <div className="card">
              <div className="testi_content">
                <div className="inner_image mb-3">
                  <picture>
                    <img src={img1} alt="images" className="img-fluid" />
                  </picture>
                </div>
                <span className="subtitle">Glassfisom</span>
                <h3 className="card-title">Nevine Dhawan</h3>
                <span className="designation">CEO Of Officer</span>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12 height-100 position-relative">
            <picture>
              <img
                src={QuoteIcon}
                alt="images"
                className="img-fluid opacity-50"
                width="135"
              />
            </picture>
            <div className="card no_hover card_line">
              <div className="row card_description">
                <div className="title_area row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <h3 className="title">Android App Design</h3>
                    <span className="date">
                      Fiver - Mar 4, 2015 - Aug 30, 2021
                    </span>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-end align-items-center">
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
                <p className="description">
                  No more question for design. Ut tincidunt est ac dolor aliquam
                  sodales. Phasellus sed mauris hendrerit, laoreet sem in,
                  lobortis mauris hendrerit ante. Ut tincidunt est ac dolor
                  aliquam sodales phasellus smauris .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
