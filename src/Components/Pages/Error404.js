import React from "react";
import CTA from "../CTA";

const Error404 = () => {
  return (
    <>
      <main
        className="container mt-5 p-5 head_line"
        id="errorPage"
        style={{ height: "70vh" }}
      >
        <section className="row">
          <div className="col-12 text-center">
            <h1 className="title">Oops! You've missed something?</h1>
            <CTA name="Back To Homepage" target="/" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Error404;
