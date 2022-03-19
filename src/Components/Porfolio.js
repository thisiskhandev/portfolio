import React from "react";
import BootClasses from "./Environments/BootClasses";
import ArrowIconPortfolio from "../Assets/Images/Icons/arraowicon_portfolio.svg";
import { AiOutlineHeart } from "react-icons/ai";
import CardsPortfolioArr from "../Components/Environments/CardsPortfolioArr";
import GreaterIcon from "../Assets/Images/Icons/greaterIcon.svg";
import CTA from "./CTA";

const Portfolio = () => {
  return (
    <>
      <main className="container cardss portfolioMain" id="portfolioMain">
        <section className="row" data-aos="fade-up" data-aos-duration="500">
          <div className="col-12 text-center">
            <span className="subtitle">
              VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
            </span>
            <h2 className="title">My Portfolio</h2>
          </div>
        </section>
        <section className="row mt-5 g-4">
          {CardsPortfolioArr.slice(-3).map((val, index) => {
            return (
              <div className={BootClasses[0].CardClass} key={val.id}>
                <div className="card">
                  <div className="card-body">
                    <div className="content portfolio_content">
                      <div className="image text-center mb-4 mt-2">
                        <img
                          src={val.image}
                          className="img-fluid"
                          alt="Portfolio Images"
                        />
                      </div>
                      <section className="row">
                        <div className="col-6">
                          <span className="sp_title">{val.feature}</span>
                        </div>
                        <div className="col-6 text-end">
                          <span className="likes_project">
                            <AiOutlineHeart />
                            &nbsp;
                            <span>{val.likes}</span>
                          </span>
                        </div>
                      </section>
                    </div>
                    <div className="d-flex title_link">
                      {/* Modal */}
                      <section className="portfolio_modal">
                        <a
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target={"#" + val.modalId}
                        >
                          {val.title}
                        </a>
                        <div
                          className="modal fade modalBg"
                          id={val.modalId}
                          tabIndex="1"
                          aria-labelledby={val.modalId + "Label"}
                          aria-hidden="true"
                        >
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-header">
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">
                                <div className="row">
                                  <div
                                    className={
                                      BootClasses[0].Col6Class +
                                      BootClasses[0].marginBMobile
                                    }
                                  >
                                    <img
                                      src={val.image}
                                      alt=""
                                      width="100%"
                                      style={{ borderRadius: "8px" }}
                                    />
                                  </div>
                                  <div
                                    className={
                                      BootClasses[0].Col6Class +
                                      "text-start position-relative ps-lg-4"
                                    }
                                  >
                                    <span>Featured - {val.feature}</span>
                                    <h3 className="my-4">{val.title}</h3>
                                    <article>
                                      <p className="mb-2">{val.para1}</p>
                                      <p className="mb-2">{val.para2}</p>
                                    </article>
                                    <div className="modal_btn">
                                      <a
                                        href={val.projectLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-uppercase view_project_btn"
                                      >
                                        View Project{" "}
                                        <img
                                          src={GreaterIcon}
                                          alt="GreaterIcon"
                                          width="18"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
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
            );
          })}
        </section>
        <CTA name="View All" target="/portfolio/portfolios" />
      </main>
    </>
  );
};

export default Portfolio;
