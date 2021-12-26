import React from "react";
import BootClasses from "./Environments/BootClasses";
import ArrowIconPortfolio from "../Assets/Images/Icons/arraowicon_portfolio.svg";
import { BiTime } from "react-icons/bi";
import BlogsArr from "./Environments/BlogsArr";
import CTA from "./CTA";
import { NavLink } from "react-router-dom";

const Blogs = () => {
  return (
    <>
      <main className="container cardss blogs" id="BlogsHome">
        <section className="row">
          <div className="col-12 text-center">
            <span className="subtitle">
              VISIT MY Blogs AND KEEP YOUR FEEDBACK
            </span>
            <h2 className="title">My Blogs</h2>
          </div>
        </section>
        <section className="row mt-5 g-4">
          {BlogsArr.map((val) => {
            return (
              <div className={BootClasses[0].CardClass} key={val.id}>
                <div className="card">
                  <div className="card-body">
                    <NavLink to={val.blogLink} className="text-decoration-none">
                      <div className="content portfolio_content">
                        <div className="image text-center mb-4 mt-2">
                          <img
                            src={val.image}
                            className="img-fluid"
                            alt={val.feature}
                          />
                        </div>
                        <section className="row">
                          <div className="col-xl-8 col-lg-8 col-md-6 col-sm-6 col-6">
                            <span className="sp_title text-capitalize">
                              {val.feature}
                            </span>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 text-end">
                            <span className="likes_project">
                              <BiTime />
                              &nbsp;
                              <span>{val.readTime}</span>
                            </span>
                          </div>
                        </section>
                      </div>
                      <div className="d-flex">
                        <h3 className="text-capitalize">{val.title}</h3>
                        &nbsp;
                        <img
                          src={ArrowIconPortfolio}
                          className="img-fluid mt-1 arrow_icons portfolio_icons"
                          alt="ArrowIcon"
                        />
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <CTA name="View All" target="/blogs" />
      </main>
    </>
  );
};

export default Blogs;
