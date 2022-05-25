import React from "react";
import "./Main.scss";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Project from "../components/Project/Project";
import Contact from "../components/Contact/Contact";

function Main() {
  return (
    <div id="main">
      <Header />
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default Main;
