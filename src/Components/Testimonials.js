import React from "react";
import TestiCarousel from "./TestiCarousel";
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
          <TestiCarousel />
        </section>
      </main>
    </>
  );
};

export default Testimonials;