import React from "react";
import ProgressBarLeft from "./Environments/Progress/ProgressBarLeft";
import ProgressBarRight from "./Environments/Progress/ProgressBarRight";
import BootClasses from "./Environments/BootClasses";

const Resume = () => {
  return (
    <>
      <main className="container resume" id="resume">
        <section className="row">
          <div className="col-12 text-center">
            <span className="subtitle">7+ YEARS OF EXPERIENCE</span>
            <h2 className="title">My Resume</h2>
          </div>
        </section>
        <section className="row">
          <div className="col-12">
            <ResumeTab />
          </div>
        </section>
      </main>
    </>
  );
};

export default Resume;

const ResumeTab = () => {
  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <TabsPillsBtns TabName="Education" ActiveClassName=" active " />
          <TabsPillsBtns TabName="ProfessionalSkills" />
          <TabsPillsBtns TabName="Experince" />
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <TabContent
          ActiveClassName=" active "
          showContent=" show "
          TabContentName="Education"
          TabContent={<EducationData />}
          TitleContent="Education Quality"
          Features="2015 - 2021"
        />
        <TabContent
          TabContentName="ProfessionalSkills"
          TabContent={<ProgressData />}
          TitleContent="Design & Development Skills"
          Features="Features"
        />
        <TabContent
          TabContentName="Experince"
          TabContent={<ExperinceData />}
          TitleContent="Job Experience"
          Features="2017 - 2021"
        />
      </div>
    </>
  );
};

const TabsPillsBtns = (props) => {
  return (
    <>
      <button
        className={"nav-link " + props.ActiveClassName}
        id={props.TabName + "-tab"}
        data-bs-toggle="tab"
        data-bs-target={"#" + props.TabName}
        type="button"
        role="tab"
        aria-controls={props.TabName}
        aria-selected="true"
        activeClassName="activeClassName"
      >
        {props.TabName}
      </button>
    </>
  );
};

const TabContent = (props) => {
  return (
    <>
      <div
        className={
          "text-start tab-pane fade py-5 " +
          props.ActiveClassName +
          props.showContent
        }
        id={props.TabContentName}
        role="tabpanel"
        aria-labelledby={props.TabContentName + "-tab"}
      >
        <div className="content_title">
          <span className="subtitle">{props.Features}</span>
          <h4 className="title mb-5">{props.TitleContent}</h4>
        </div>
        {props.TabContent}
      </div>
    </>
  );
};

const EducationData = () => {
  return (
    <>
      <div className="timeline">
        <div className="t_container left_container">
          <div className="timeline_content">
            <h2>Virtual University of Pakistan</h2>
            <h3>2021</h3>
            <p>Bachelor of Science in Computer Science</p>
            <ul>
              <li>GPA 3.1</li>
              <li>FYP (Inter Carpooling System PHP)</li>
            </ul>
          </div>
        </div>
        <div className="t_container right_container">
          <div className="timeline_content">
            <h2>D.J Sindh Govt. Science College</h2>
            <h3>2017</h3>
            <p>Pre-Engineering</p>
            <ul>
              <li>In Pre-Engineering</li>
              <li>Attended from Sept. 2015 to June 2017</li>
            </ul>
          </div>
        </div>
        <div className="t_container left_container">
          <div className="timeline_content">
            <h2>Programmer School</h2>
            <h3>2015</h3>
            <p>Computer Science</p>
            <ul>
              <li>Attended from Sept. 2015 to June 2017</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const ExperinceData = () => {
  return (
    <>
      <div className="timeline">
        <div className="t_container left_container">
          <div className="timeline_content">
            <h2>Limesoft Logics Pvt Ltd.</h2>
            <h3>Feb. 2021 to present</h3>
            <p>WordPress Developer</p>
            <ul>
              <li>Create WP sites from scratch according to Mockup design.</li>
              <li>Custom designing.</li>
              <li>SEO &amp; Metas.</li>
              <li>Optimizing and improve performance.</li>
              <li>PSD to WordPress using Page Builders.</li>
              <li>Created Woocommerce website</li>
              <li>
                Create multiple variable products for different types of
                categories
              </li>
              <li>
                Using different types of plugins for page building and theme
                building
              </li>
              <li>
                Use full version of Elementor to create Woocommerce websites.
              </li>
              <li>Create dynamic site Using theme builders.</li>
              <li>
                Use different type of page builders (Divi, Elementor, WP Bakery)
              </li>
              <li>Theme customizing.</li>
              <li>Create mobile friendly responsive websites</li>
            </ul>
          </div>
        </div>
        <div className="t_container right_container">
          <div className="timeline_content">
            <h2>Core2Plus</h2>
            <h3>Oct. 2020 to Feb. 2021</h3>
            <p>WordPress Developer</p>
            <ul>
              <li>C-Panel Manages</li>
              <li>WordPress &amp; Plugin Installation</li>
              <li>Create website using Page builders (Elementor, WP Bakery)</li>
              <li>Theme Customizations</li>
              <li>Plugin Customizations (Static)</li>
              <li>Remove Malware in WP Sites</li>
              <li>Mobile &amp; Tab responsive issue resolving</li>
            </ul>
          </div>
        </div>
        <div className="t_container left_container">
          <div className="timeline_content">
            <h2>Core2Plus</h2>
            <h3>Oct. 2019 to Oct. 2020</h3>
            <p>Human Resource Manager</p>
            <ul>
              <li>Accounting manage on WAVE</li>
              <li>Chq &amp; Cash deposit/withdrawl</li>
              <li>Monthly Acc maintain</li>
              <li>Planning &amp; Coordination</li>
              <li>Petty Cash record maintains</li>
            </ul>
          </div>
        </div>
        <div className="t_container right_container">
          <div className="timeline_content">
            <h2>Etronix Services</h2>
            <h3>Apr. 2017 to Aug. 2019</h3>
            <p>Front Desk Officer</p>
            <ul>
              <li>Accounting</li>
              <li>Invoices/Quotation</li>
              <li>Presentation</li>
              <li>LC/Draft handling and create for Import/Export</li>
              <li>Legal Documentation</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const ProgressData = () => {
  return (
    <>
      <main className="row progress_bars">
        <section className={BootClasses[0].Col6Class}>
          {ProgressBarLeft.map((values) => {
            return (
              <div
                className="progress_chart position-relative mb-5"
                key={values.id}
              >
                <h6 className="title text-uppercase">{values.progressTitle}</h6>
                <section
                  className="progress"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Tooltip on top"
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow={values.progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>{values.progress + "%"}</span>
                  </div>
                </section>
              </div>
            );
          })}
        </section>
        <section className={BootClasses[0].Col6Class}>
          {ProgressBarRight.map((values) => {
            return (
              <div
                className="progress_chart position-relative mb-5"
                key={values.id}
              >
                <h6 className="title text-uppercase">{values.progressTitle}</h6>
                <section
                  className="progress"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Tooltip on top"
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow={values.progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>{values.progress + "%"}</span>
                  </div>
                </section>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};
