import React, { useState } from "react";
import './App.css';
import logo from './assets/logo.png'
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer";
import HomePage from './pages/HomePage.js';
import CurrentFeatures from './pages/CurrentFeatures.js';
import ComingSoon from './pages/ComingSoon.js'
import Menu from "./pages/Menu";
import Rules from './pages/Rules.js';
import AboutUs from './pages/AboutUs.js';

export default function App() {
  const [navLinks] = useState([
    { name: "Welcome" },
    { name: "Now Playing" },
    // { name: "Coming Soon"},
    { name: "Menu" },
    { name: "Rules" },
    // { name: "About Us" }
  ]);

  const [currentNav, setCurrentNav] = useState(navLinks[0]);

  return (
    <div>
      <NavBar
        navLinks={navLinks}
        currentLink={currentNav}
        setCurrentLink={setCurrentNav}
      />
      <header>
        <div id="banner" className=" mw-100 mh-100 text-center py-3">
          <img src={logo} alt="Belmont Drive-In logo" />
        </div>
      </header>
      <main 
      id="mainContainer"
      className="mw-100">
        {currentNav === navLinks[0] && <HomePage></HomePage>}
        {currentNav === navLinks[1] && <CurrentFeatures></CurrentFeatures>}
        {/* {currentNav === navLinks[2] && <ComingSoon></ComingSoon>} */}
        {currentNav === navLinks[2] && <Menu></Menu>}
        {currentNav === navLinks[3] && <Rules></Rules>}
        {/* {currentNav === navLinks[5] && <AboutUs></AboutUs>} */}
      </main>
      <Footer></Footer>
    </div>
  );
}