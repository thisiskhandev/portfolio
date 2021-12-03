import React from "react";
import HeroSection from "../HeroSection";
import Linebar from "../Linebar";
import Features from "../Features";
import Portfolio from "../Porfolio";
import Resume from "../Resume";
const Home = () => {
  return (
    <>
      <HeroSection />
      <Linebar />
      <Features />
      <Linebar />
      <Portfolio />
      <Linebar />
      <Resume />
      <Linebar />
    </>
  );
};

export default Home;
