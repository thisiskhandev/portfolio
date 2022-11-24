import React from "react";
import "./styles.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Error404 from "./Components/Pages/Error404";
import PortfolioPage from "./Components/Pages/PortfolioPage";
import BlogsPage from "./Components/Pages/Blogs/BlogsPage";
import JamesWebBlog from "./Components/Pages/Blogs/AllBlogs/JamesWebBlog";
import AboutPage from "./Components/Pages/AboutPage";
import ThankYouPage from "./Components/Pages/ThankYouPage";
import ContactPage from "./Components/Pages/ContactPage";
import "aos/dist/aos.css";
import AOS from "aos/dist/aos.js";
import Features from "./Components/Features";
// import ScrollToTopButton from "./Components/ScrollToTopButton";
AOS.init();
const PageUrls = () => {
  return (
    <>
      {/* Childern k parent ko exact dena lazmi hai */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={PortfolioPage} />
        <Route exact path="/blogs" component={BlogsPage} />;
        <Route path="/features" component={Features} />;
        <Route path="/blogs/james-webb-telescope" component={JamesWebBlog} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/thank-you" component={ThankYouPage} />
        <Route
          path="/portfolio"
          render={() => <Redirect to="/" component={Home} />}
        />
        <Route component={Error404} />
      </Switch>
    </>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <PageUrls />
      {/* <ScrollToTopButton /> */}
      <Footer />
    </>
  );
};

export default App;
