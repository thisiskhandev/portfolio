import React from "react";
import IconLinkedIn from "../Assets/Images/Icons/social-icons (3).svg";
import GitIcon from "../Assets/Images/Icons/github-w-icon.svg";
import SocialLinks from "./Environments/SocialLinks";
import WhatsappIcon from "../Assets/Images/Icons/whatsapp-w-icon.svg";

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
          imgsrc={IconLinkedIn}
          socialLink={SocialLinks[1].LinkedInLink}
          alter={SocialLinks[1].alter}
        />
        <SocialIconsLinks
          imgsrc={GitIcon}
          socialLink={SocialLinks[2].gitLink}
          alter={SocialLinks[2].alter}
        />
        <SocialIconsLinks
          imgsrc={WhatsappIcon}
          socialLink={SocialLinks[3].waLink}
          alter={SocialLinks[3].alter}
        />
      </ul>
    </>
  );
};

export default SocialIcons;
