import React from "react";
import IconFB from "../Assets/Images/Icons/social-icons (1).svg";
import IconInsta from "../Assets/Images/Icons/social-icons (2).svg";
import IconLinkedIn from "../Assets/Images/Icons/social-icons (3).svg";
import SocialLinks from "./Environments/SocialLinks";
import Typewriter from "typewriter-effect";
import heroImg from "../Assets/Images/heroimg.webp";
import ReactIcon from "../Assets/Images/Icons/atom.png";
import WordPressIcon from "../Assets/Images/Icons/wordpress.png";
import PSDIcon from "../Assets/Images/Icons/adobe-photoshop.png";

let Col6Class = "col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12";

const HeroSocialIcons = (props) => {
  return (
    <>
      <li>
        <a href={props.socialLink} target="_blank" rel="noopener noreferrer">
          <img src={props.imgsrc} alt={props.alter}/>
        </a>
      </li>
    </>
  );
};

const Home = () => {
  return (
    <>
      <main id="home" className="pt-5">
        <main className="container">
          <section className="row">
            <div className={Col6Class}>
              <p>WELCOME TO MY WORLD</p>
              <h1 className="title">
                Hi, I’m <span className="p_color">Hassan Khan</span> a
                <Typewriter
                  options={{
                    strings: ["Developer.", "Professional Coder.", "Designer."],
                    autoStart: true,
                    loop: true,
                    delay: 65,
                    // pauseFor: 600,
                  }}
                />
              </h1>
              <p>
                I use animation as a third dimension by which to simplify
                experiences and kuiding thro each and every interaction. I’m not
                adding motion just to spruce things up, but doing it in ways
                that.
              </p>
              <section className="row mt-5">
                <div className={Col6Class}>
                  <span className="subtitle">FIND WITH ME</span>
                  <ul className="hero_icons">
                    <HeroSocialIcons
                      imgsrc={IconFB}
                      socialLink={SocialLinks[0].fbLink}
                      alter={SocialLinks[0].alter}
                    />
                    <HeroSocialIcons
                      imgsrc={IconInsta}
                      socialLink={SocialLinks[2].gitLink}
                      alter={SocialLinks[2].alter}
                    />
                    <HeroSocialIcons
                      imgsrc={IconLinkedIn}
                      socialLink={SocialLinks[1].LinkedInLink}
                      alter={SocialLinks[1].alter}
                    />
                  </ul>
                </div>
                <div
                  className={
                    Col6Class + " mt-5 mt-sm-5 mt-md-5 mt-lg-0 mt-xl-0"
                  }
                >
                  <span className="subtitle">BEST SKILL ON</span>
                  <ul className="hero_icons skills_icons">
                    <HeroSocialIcons
                      imgsrc={ReactIcon}
                    />
                    <HeroSocialIcons imgsrc={WordPressIcon} />
                    <HeroSocialIcons imgsrc={PSDIcon} />
                  </ul>
                </div>
              </section>
            </div>
            <div
              className={
                Col6Class + " d-flex align-items-center justify-content-center"
              }
            >
              <div className="inner">
                <img
                  src={heroImg}
                  alt="heroImg"
                  width="500"
                  className="hero_image"
                />
              </div>
            </div>
          </section>
        </main>
      </main>
    </>
  );
};

export default Home;
