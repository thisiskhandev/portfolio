import React from "react";
import "./styles.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Error404 from "./Components/Pages/Error404";
import PortfolioPage from "./Components/Pages/PortfolioPage";
import BlogsPage from "./Components/Pages/Blogs/BlogsPage";
import JamesWebBlog from "./Components/Pages/Blogs/AllBlogs/JamesWebBlog";
import AboutPage from "./Components/Pages/AboutPage";
import "aos/dist/aos.css";
const PageUrls = () => {
  return (
    <>
    {/* Childern k parent ko exact dena lazmi hai */}
      <Switch>
        <Route exact path="/portfolio" component={Home} />
        <Route path="/portfolios" component={PortfolioPage} />
        <Route exact path="/portfolio/blogs" component={BlogsPage} />;
        <Route
          
          path="/portfolio/blogs/james-webb-telescope"
          component={JamesWebBlog}
        />
        <Route path="/portfolio/about" component={AboutPage} />
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
      <Footer/>
    </>
  );
};

export default App;
