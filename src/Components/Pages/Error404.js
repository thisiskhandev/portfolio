import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <main className="container">
        <section className="row">
          <div className="col-12">
            <h1>Oops! You've missed something?</h1>
            <NavLink to="/portfolio" className="text-capitalize">
              Back to homepage
            </NavLink>
          </div>
        </section>
      </main>
    </>
  );
};

export default Error404;
