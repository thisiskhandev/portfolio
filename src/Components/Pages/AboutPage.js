import React from "react";
import TargetButton from "../TargetButton";
import ResumeShot from "../../Assets/Images/Resume-Hassan-28-01-22.png";

const AboutPage = () => {
  return (
    <>
      <main className="general my-5 py-5 head_line" id="about">
        <section className="container">
          <div className="row" data-aos="fade-up" data-aos-duration="500">
            <div className="col-12 text-center">
              <span className="subtitle">WHO AM I?</span>
              <h1 className="title">About Me</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-lg-start text-md-start text-sm-center text-center">
              <p>
                Hi,
                <br />I am <strong>Hassan Khan</strong> Creative Front-End /
                WordPress Developer offering robust experience providing
                highly-impact web solutions for diverse industry, organizations.
                Aspiring to combine broad background with strong technical
                skills to excel as Front-End Developer.
                <br />
                As a Front End Developer, I am responsible for implementing
                visual elements that are visible from the computer users vantage
                point within a web application. I am a person combine the art of
                design with the science of programming. I am responsible for the
                translation of UI/UX design wireframes to actual code. There are
                various times I am expected to work independently and with team
                to meet tight deadlines following design guidelines. An ideal
                candidate will have a bachelor's degree in Computer Science. I
                have a good understanding of SEO and be expert level with
                Windows / Linux and OS with proficiency in code visioning tools
                and familiarity with Figma / XD / Canva and Photoshop.
              </p>
              <div className="little_info">
                <h3 className="text-capitalize">
                  My Responsibilities As a Front End Developer
                </h3>
                <ul>
                  <li> Develop new user facing features</li>
                  <li>Use and create custom template / components</li>
                  <li>
                    {" "}
                    Enhance web application for maximum speed and scalability
                  </li>
                  <li>Validate input before submitting to back end</li>
                  <li>Collaborate with team members</li>
                  <li>
                    {" "}
                    Bridge the gap between graphic design and technical
                    implementation
                  </li>
                  <li>Define how the application looks and how it works</li>
                  <li>Translate UI/UX design wireframes to actual code</li>
                </ul>
              </div>
              <div className="little_info">
                <h3 className="text-capitalize">Qualifications</h3>
                <ul>
                  <li>
                    1+ years of experience in a wordpress and custome web
                    applications
                  </li>
                  <li>Good understanding of SEO</li>
                  <li>Expert level with Windows and Beginner in Linux OS </li>
                  <li>Proficient in code visioning tools</li>
                  <li>Familiarity with Figma / XD / Canva and Photoshop</li>
                  <li>Knowledge of image authoring tools</li>
                  <li>Proficient understanding of web markup</li>
                  <li>Possess competent in Javascript and JQuery</li>
                </ul>
              </div>
              <small className="signature">Hassan Khan</small>
            </div>
          </div>
          <div className="row" data-aos="zoom-in" data-aos-duration="800">
            <div className="col-12 text-center">
              <img
                src={ResumeShot}
                alt="about"
                className=""
                width="600px"
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>
          <div className="btnss" data-aos="fade-up" data-aos-duration="1500">
            <TargetButton
              name="Download Resume"
              target="https://drive.google.com/file/d/1TBjho1c1xUZLaismdKQA_6VCZRSVD5yg/view?usp=sharing"
            />
            <TargetButton
              name="View Projects"
              target="https://docs.google.com/spreadsheets/d/1YVG7fvLISMtkrtwgz6UGcTtst3PJ0GbL/edit#gid=750940437"
            />
          </div>
        </section>
      </main>
    </>
  );
};
export default AboutPage;
