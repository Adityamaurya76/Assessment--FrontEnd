import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import React, { useState } from "react";
import logo from "../src/Assests/time logo.png"


function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
      setOpenMenu(!openMenu);
    };
  return (
    <>
    
    <Navbar menuOpen={openMenu} toggleMenu={toggleMenu} logo={logo}/>
  <Router>
    
    <Home/>
  </Router>
  </>
  );
}

export default App;
