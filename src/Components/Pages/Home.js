import React from "react";
import HeroSection from "../HeroSection";
import Linebar from "../Linebar";
import Features from "../Features";
import Portfolio from "../Porfolio";
const Home = () => {
  return (
    <>
      <HeroSection />
      <Linebar />
      <Features />
      <Linebar />
      <Portfolio />
      <Linebar />
    </>
  );
};

export default Home;
