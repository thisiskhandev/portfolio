import React from "react";
import "./styles.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Error404 from "./Components/Pages/Error404";
import PortfolioPage from "./Components/Pages/PortfolioPage";

const PageUrls = () => {
  return (
    <>
      <Switch>
        <Route exact path="/portfolio" component={Home} />
        <Route path="/portfolios" component={PortfolioPage} />
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
    </>
  );
};

export default App;
