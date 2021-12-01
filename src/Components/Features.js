import React from "react";
import ArrowIcon from "../Assets/Images/Icons/arrowIcon.svg";
import CardsFeaturedArr from "../Components/Environments/CardsFeaturedArr";
import BootClasses from "./Environments/BootClasses";

const Features = () => {
  return (
    <>
      <main className="container cardss" id="featuresMain">
        <section className="row gx-5">
          <div className="col-12">
            <span className="subtitle">FEATURES</span>
            <h2 className="title">What I Do</h2>
          </div>
        </section>
        <section className="row mt-5 g-4">
          {CardsFeaturedArr.map((val, index) => {
            {
              /* console.log(index); */
            }
            return (
              <div className={BootClasses[0].CardClass} key={val.id}>
                <div className="card">
                  <div className="card-body">
                    <div className="content">
                      {/* <img
                        src={val.image}
                        className="img-fluid"
                        alt="TwitchIcon"
                        width="70"
                      /> */}
                      <div className="icons">{val.image}</div>
                      <h3 className="card-title mt-4">{val.title}</h3>
                      <p className="card-text mt-4">{val.para}</p>
                      <img
                        src={ArrowIcon}
                        className="img-fluid mt-1 arrow_icons"
                        alt="ArrowIcon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default Features;
