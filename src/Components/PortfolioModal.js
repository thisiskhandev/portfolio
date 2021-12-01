import React from "react";
import GreaterIcon from "../Assets/Images/Icons/greaterIcon.svg";
import BootClasses from "../Components/Environments/BootClasses";

const PortfolioModal = (props) => {
  return (
    <>
      <section className="portfolio_modal">
        <a type="button" data-bs-toggle="modal" data-bs-target="#pModal">
          {props.title}
        </a>

        <div
          className="modal fade"
          id="pModal"
          tabIndex="1"
          aria-labelledby="pModalLabel"
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
                      BootClasses[0].Col6Class + BootClasses[0].marginBMobile
                    }
                  >
                    <img
                      src={
                        require("../Assets/Images/portfolio-01.webp").default
                      }
                      alt=""
                      width="100%"
                      style={{ borderRadius: "8px" }}
                    />
                  </div>
                  <div
                    className={
                      BootClasses[0].Col6Class +
                      " text-start position-relative ps-lg-4"
                    }
                  >
                    <span>Featured - Development</span>
                    <h3 className="my-4">The services provide for design</h3>
                    <article>
                      <p className="mb-2">
                        Cupiditate distinctio assumenda explicabo veniam
                        temporibus eligendi.
                      </p>
                      <p className="mb-2">
                        Cupiditate distinctio assumenda explicabo veniam
                        temporibus eligendi.
                      </p>
                    </article>
                    <div className="modal_btn">
                      <a
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-uppercase view_project_btn"
                      >
                        View Project{" "}
                        <img src={GreaterIcon} alt="GreaterIcon" width="18" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioModal;
