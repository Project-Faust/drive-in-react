import React, { useState } from "react";
import './App.css';
import logo from './assets/logo.png'
import NavBar from "./components/NavBar.js";
import HomePage from './pages/HomePage.js';
import CurrentFeatures from './pages/CurrentFeatures.js';
import Rules from './pages/Rules.js';
import Menu from "./pages/Menu";
import AboutUs from './pages/AboutUs.js';

export default function App() {
  const [navLinks] = useState([
    { name: "Welcome" },
    { name: "Current Features" },
    { name: "Rules" },
    { name: "Menu" },
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
        <div id="banner" className="text-center my-3">
          <img src={logo} alt="Belmont Drive-In logo" />
        </div>
      </header>
      <main id="mainContainer">
        {currentNav === navLinks[0] && <HomePage></HomePage>}
        {currentNav === navLinks[1] && <CurrentFeatures></CurrentFeatures>}
        {currentNav === navLinks[2] && <Rules></Rules>}
        {currentNav === navLinks[3] && <Menu></Menu>}
        {/* {currentNav === navLinks[4] && <AboutUs></AboutUs>} */}
      </main>
    </div>
  );
}