import React from "react";
import IconFB from "../../Assets/Images/Icons/social-icons (1).svg";
import IconInsta from "../../Assets/Images/Icons/social-icons (2).svg";
import IconLinkedIn from "../../Assets/Images/Icons/social-icons (3).svg";
import SocialLinks from "../Environments/SocialLinks";

const HeroSocialIcons = (props) => {
  return (
    <>
      <li>
        <a href={props.socialLink} target="_blank" rel="noopener noreferrer">
          <img src={props.imgsrc} alt="IconFB" />
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
            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
              <p>WELCOME TO MY WORLD</p>
              <h1 className="title">
                Hi, I’m <span className="p_color">Hassan Khan</span> a
                Professional Coder.
              </h1>
              <p>
                I use animation as a third dimension by which to simplify
                experiences and kuiding thro each and every interaction. I’m not
                adding motion just to spruce things up, but doing it in ways
                that.
              </p>
              <section className="row">
                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                  <span>FIND WITH ME</span>
                  <ul className="hero_icons">
                    <HeroSocialIcons
                      imgsrc={IconFB}
                      socialLink={SocialLinks[0].fbLink}
                    />
                    <HeroSocialIcons
                      imgsrc={IconInsta}
                      socialLink={SocialLinks[2].gitLink}
                    />
                    <HeroSocialIcons
                      imgsrc={IconLinkedIn}
                      socialLink={SocialLinks[1].LinkedInLink}
                    />
                  </ul>
                </div>
              </section>
            </div>
          </section>
        </main>
      </main>
    </>
  );
};

export default Home;
