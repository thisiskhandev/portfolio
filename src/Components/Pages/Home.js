import React from "react";
import HeroSection from "../HeroSection";
import Linebar from "../Linebar";
import Features from "../Features";
import Portfolio from "../Porfolio";
import Resume from "../Resume";
import Testimonials from "../Testimonials";
import Clients from "../Clients";
import Blogs from "../Blogs";
import Contact from "../Contact";
const Home = () => {
  return (
    <>
      <HeroSection />
      <Linebar />
      <Features />
      <Linebar />
      <Portfolio limit="-3" />
      <Linebar />
      <Resume />
      <Linebar />
      <Testimonials />
      <Linebar />
      <Clients />
      <Linebar />
      <Blogs />
      <Linebar />
      <Contact />
      <Linebar />
    </>
  );
};

export default Home;
