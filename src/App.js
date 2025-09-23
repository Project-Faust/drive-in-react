import React, { useState } from "react";
import './App.css';
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import HomePage from './pages/HomePage.js';
import CurrentFeatures from './pages/CurrentFeatures.js';
import ComingSoon from './pages/ComingSoon.js'
import Menu from "./pages/Menu";
import Rules from './pages/Rules.js';
// import AboutUs from './pages/AboutUs.js';

export default function App() {
  const [navLinks] = useState([
    { name: "Welcome" },
    // { name: "Now Playing" },
    // { name: "Coming Soon"},
    { name: "Menu" },
    { name: "Rules" },
    // { name: "About Us" }
  ]);

  const [currentNav, setCurrentNav] = useState(navLinks[0]);

  return (
    <div className="bg-dark">
      <NavBar
        navLinks={navLinks}
        currentLink={currentNav}
        setCurrentLink={setCurrentNav}
      />
      <main 
      id="mainContainer"
      className="mw-100">
        {currentNav === navLinks[0] && <HomePage></HomePage>}
        {/* {currentNav === navLinks[1] && <CurrentFeatures></CurrentFeatures>} */}
        {/* {currentNav === navLinks[2] && <ComingSoon></ComingSoon>} */}
        {currentNav === navLinks[1] && <Menu></Menu>}
        {currentNav === navLinks[2] && <Rules></Rules>}
        {/* {currentNav === navLinks[5] && <AboutUs></AboutUs>} */}
      </main>
      <Footer></Footer>
    </div>
  );
}