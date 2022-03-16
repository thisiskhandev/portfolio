import React from "react";
import CTA from "../CTA";

const ThankYouPage = () => {
  return (
    <>
      <main className="container" id="thankYou">
        <div className="row" data-aos="fade-up" data-aos-duration="500">
          <div className="col-12 text-center head_line">
            <span className="subtitle">Got it!</span>
            <h1 className="title">Thank You</h1>
          </div>
        </div>
        <section className="row pt-5">
          <div className="col-md-6 m-auto">
            <h3 className="text-center">
              Your Query Has Been Received.
              <br /> I Will Get Back To You Soon.
            </h3>
          </div>
        </section>
        <CTA name="Back To Homepage" target="/portfolio" />
      </main>
    </>
  );
};

export default ThankYouPage;
