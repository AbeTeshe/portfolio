import React from 'react';
import "./header.css";
import {Menu}  from "@mui/icons-material";

const Header = () => {
  
  return (
    <div className="header">
        <div className='header-title'>
            MyPortfolio
        </div>
        
        <div className="header-links">
            <input type="checkbox" id="check"/>
            <label for="check" className="checkbtn">
                <Menu className="menuIcon" />
            </label>
            <ul className="ulClass">
                <li>
                  <a href='#intro'>Home</a>
                </li>
                <li>
                  <a href='#about'>About</a>
                </li>
                <li>
                  <a href='#resume'>Resume</a>
                </li>
                <li>
                  <a href='#projects'>Projects</a>
                </li>
                <li>
                  <a href='#contact'>ContactMe</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header;