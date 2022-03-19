import React from "react";
import Portfolio from "../Porfolio";

const PortfolioPage = () => {
  return (
    <>
      <section className="py-5">
        <Portfolio />
        <a
          href="https://docs.google.com/spreadsheets/d/1YVG7fvLISMtkrtwgz6UGcTtst3PJ0GbL/edit#gid=750940437"
          className="cta"
          target="_blank"
        >
          View All Projects
        </a>
      </section>
    </>
  );
};

export default PortfolioPage;
