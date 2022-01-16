import React from "react";
import IconFB from "../Assets/Images/Icons/social-icons (1).svg";
import IconInsta from "../Assets/Images/Icons/social-icons (2).svg";
import IconLinkedIn from "../Assets/Images/Icons/social-icons (3).svg";
import SocialLinks from "./Environments/SocialLinks";

const SocialIconsLinks = (props) => {
  return (
    <>
      <li>
        <a href={props.socialLink} target="_blank" rel="noopener noreferrer">
          <img src={props.imgsrc} alt={props.alter} />
        </a>
      </li>
    </>
  );
};

const SocialIcons = () => {
  return (
    <>
      <ul className="hero_icons">
        <SocialIconsLinks
          imgsrc={IconFB}
          socialLink={SocialLinks[0].fbLink}
          alter={SocialLinks[0].alter}
        />
        <SocialIconsLinks
          imgsrc={IconInsta}
          socialLink={SocialLinks[2].gitLink}
          alter={SocialLinks[2].alter}
        />
        <SocialIconsLinks
          imgsrc={IconLinkedIn}
          socialLink={SocialLinks[1].LinkedInLink}
          alter={SocialLinks[1].alter}
        />
      </ul>
    </>
  );
};

export default SocialIcons;
