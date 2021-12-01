import React from "react";
import BootClasses from "./Environments/BootClasses";
import PortfolioModal from "./PortfolioModal";
import ArrowIconPortfolio from "../Assets/Images/Icons/arraowicon_portfolio.svg";
import { AiOutlineHeart } from "react-icons/ai";
import CardsPortfolioArr from "../Components/Environments/CardsPortfolioArr";
import CTA from "./CTA";

const Portfolio = () => {
  return (
    <>
      <main className="container cardss" id="portfolioMain">
        <section className="row gx-5">
          <div className="col-12 text-center">
            <span className="subtitle">
              VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
            </span>
            <h2 className="title">My Portfolio</h2>
            <PortfolioModal />
          </div>
        </section>
        <section className="row mt-5 g-4">
          {CardsPortfolioArr.map((val, index) => {
            return (
              <div className={BootClasses[0].CardClass} key={val.id}>
                <div className="card">
                  <div className="card-body">
                    <div className="content">
                      <div className="image text-center mb-4 mt-2">
                        <img
                          src={val.image}
                          className="img-fluid"
                          alt="Portfolio Images"
                        />
                      </div>
                      <section className="row">
                        <div className="col-6">
                          <span className="sp_title">Development</span>
                        </div>
                        <div className="col-6 text-end">
                          <span className="likes_project">
                            <AiOutlineHeart />
                            &nbsp;
                            <span>{val.likes}</span>
                          </span>
                        </div>
                      </section>
                      <div className="d-flex">
                        <h3 className="card-title portfolio_title mt-2">
                          <PortfolioModal title="just testing">
                            {val.title}
                          </PortfolioModal>
                        </h3>
                        &nbsp;
                        <img
                          src={ArrowIconPortfolio}
                          className="img-fluid mt-1 arrow_icons portfolio_icons"
                          alt="ArrowIcon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <CTA name="View All" target="/portfolio" />
      </main>
    </>
  );
};

export default Portfolio;
