import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="App">
      <div id="home"><Home /></div>
      <div id="sobre"><About /></div>
      <div id="contato"><Contact /></div>
      <Footer />
    </div>
  );
};

export default LandingPage;
