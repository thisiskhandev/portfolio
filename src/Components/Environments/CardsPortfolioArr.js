const CardsPortfolioArr = [
  {
    id: 1,
    title: "Trifecta Credit Solutions",
    para1: "Get credit now",
    para2: "Personal Credit Repair",
    feature: "WordPress",
    image: require("../../Assets/Images/trifecta.png").default,
    likes: Math.floor(Math.random() * 499),
    projectLink: "https://trifectacreditsolutions.com/",
    modalId: "portModal1",
  },
  {
    id: 2,
    title: "Cav Core Fitness",
    para1: "Fitness excersice",
    para2: "Start Achieving",
    feature: "WordPress",
    image: require("../../Assets/Images/cavcore.png").default,
    likes: Math.floor(Math.random() * 499),
    projectLink: "https://cavcorefitnessmi.com/",
    modalId: "portModal2",
  },
  {
    id: 3,
    title: "Wasta Learning",
    para1: "Live English Classes",
    para2: "The best value for a live English class",
    feature: "WordPress",
    image: require("../../Assets/Images/wasta.png").default,
    likes: Math.floor(Math.random() * 499),
    projectLink: "https://wastalearning.com/",
    modalId: "portModal3",
  },
];

// console.log(CardsPortfolioArr[2].image);

export default CardsPortfolioArr;
