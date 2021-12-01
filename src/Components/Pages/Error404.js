import React from "react";

const Error404 = () => {
  return (
    <>
      <main className="container">
        <section className="row">
          <div className="col-12">
            <h1>Oops! You've missed something?</h1>
            <a href="/portfolio" className="text-capitalize">
              Back to homepage
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Error404;
