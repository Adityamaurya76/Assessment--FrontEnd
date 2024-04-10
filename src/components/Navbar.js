import './navbar.css';
import logo from "../Assests/time logo.png";
import React, { useState } from "react";

import { FaBars, FaSearch } from 'react-icons/fa';

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
      setOpenMenu(!openMenu);
    };
   
  return (
    <nav className='nav'>
    <div className="logo">
    <FaBars className="menu-icon" />

      <a href='/'> <img id='logoIcon'
       src={logo}
        /> </a>
    </div>
             <div className="searchbox">
             <FaSearch className="search-icon" />
              <input type="text" name='search' placeholder='Search...' />
             </div>
    
  
      </nav>

  
  )
}
export default Navbar;