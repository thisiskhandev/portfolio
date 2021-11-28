import React from "react";
import "./styles.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Pages/Home";

const PageUrls = () => {
  return (
    <>
      <Switch>
        <Route exact path="/portfolio" component={Home} />
      </Switch>
    </>
  );
};

const App = () => {
  return (
    <>
      <main className="">
        <Navbar />
        <PageUrls />
      </main>
    </>
  );
};

export default App;
