import React from "react";
import "./styles.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Components/Navbar";
const App = () => {
  return (
    <>
      <main className="">
        <Navbar />
      </main>
    </>
  );
};

export default App;
