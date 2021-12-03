import { AiFillAppstore } from "react-icons/ai";
import { SiMarketo } from "react-icons/si";
import { FaConnectdevelop, FaWordpressSimple } from "react-icons/fa";
import { BsGearWideConnected } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";

const CardsFeaturedArr = [
  {
    id: 1,
    // image: require("../../Assets/Images/Icons/atom.png").default,
    image: <AiFillAppstore />,
    title: "Web Development",
    para: "When it comes to website development, I push the limits and set new standards by creating functionally rich and aesthetically stunning websites.",
  },
  {
    id: 2,
    image: <FaWordpressSimple />,
    title: "WordPress Development",
    para: "Professional in Wordpress Development speciality in Page builders Elementor and WP Bakery and Flatsome and more.",
  },
  {
    id: 3,
    image: <SiMarketo />,
    title: "Ecommerce Solutions",
    para: "A compelling e-commerce design requires creativity, innovation, skill and experience on part of the developer and competitor",
  },
  {
    id: 4,
    image: <FaConnectdevelop />,
    title: "Real Estate & Marketing",
    para: "My marketing strategy is centered around helping you grow your business and reach out to millions of people.",
  },
  {
    id: 5,
    image: <BiSearchAlt />,
    title: "SEO & Optimization",
    para: "By working with me, you will get a premium SEO experience on knowing that your website is in good hands.",
  },
  {
    id: 6,
    image: <BsGearWideConnected />,
    title: "Customized Solution",
    para: "I am a dedicated person of front end developer gives you the best custom services worldwide.",
  },
];

// console.log(CardsFeaturedArr[2].image);

export default CardsFeaturedArr;
