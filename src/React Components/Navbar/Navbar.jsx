import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";


function Navbar(prop) {
  const [navShow,setNavShow]=useState(window.innerWidth<800?false:true);
  function HandleClick(e){
    if(window.innerWidth<800){
      setNavShow(!navShow);
    }
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark Navbar-main">
      <div className="container-fluid mx-2">
        <Link className="navbar-brand nb" to="/" >
          <img src="./Media logos/SANKALP SHIKSHA ICON.png" alt="" srcSet="" />
          <div>
            SANKALP <br />
            <p>SHIKSHA</p>
          </div>
        </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        > */}
        <button className="navbar-toggler" onClick={()=>setNavShow(!navShow)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        {navShow? <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mg">
              <NavLink style={{width:"100px"}} className="nav-link mx-auto" aria-current="page" to="/" onClick={HandleClick}>
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown mg">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li>
                  <NavLink style={{width:"min-content"}} className="dropdown-item mx-auto" to="/WhatWeDo" onClick={HandleClick}>
                    What we do
                  </NavLink>
                </li>

                <li>
                  <NavLink style={{width:"min-content"}} className="dropdown-item mx-auto" to="/Team" onClick={HandleClick}>
                    Our Team
                  </NavLink>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink style={{width:"min-content"}} className="dropdown-item mx-auto" to="/gallery" onClick={HandleClick}>
                    Gallery
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown mg">
              <a 
                style={{width:"max-content"}}
                className="nav-link mx-auto" // dropdown-item
                href="#Initiative"
                id="navbarDropdown2"
                // role="button"
                // data-bs-toggle="dropdown"
                // aria-expanded="false"
              >
                Our Initiative
              </a>
              {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                <li>
                  <NavLink className="dropdown-item" href="/">
                    #
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" href="/">
                    #
                  </NavLink>
                </li>
              </ul> */}
            </li>
            <li className="nav-item dropdown mg">
              <a style={{width:"min-content"}}
                className="nav-link dropdown-toggle mx-auto"
                href="/"
                id="navbarDropdown2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Impact{" "}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                <li>
                  <a style={{width:"min-content"}} className="dropdown-item mx-auto" href="/">
                    Reach Out
                  </a>
                </li>
                <li>
                  <a style={{width:"min-content"}} className="dropdown-item mx-auto" href="/">
                    Stories Of Change
                  </a>
                </li>
                <li>
                  <NavLink style={{width:"min-content"}} className="dropdown-item mx-auto" to="/WhatWeDo" onClick={HandleClick}>
                    Awards and Recognitions
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a style={{width:"min-content"}}
                    className="dropdown-item mx-auto"
                    href="https://yourstory.com/hindi/social-work-with-job-meet-vikas-kumar-who-is-helping-poor-children-to-fulfill-their-dreams-education"
                  >
                    Blogs
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item mg">
              <NavLink style={{width:"max-content"}} className="nav-link mx-auto" to="/contact" onClick={HandleClick}>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <button type="button" className="btn btn-warning btton my-3 mx-3">
            Donate
          </button>
        </div>:null}
      </div>
    </nav>
  );
}

export default Navbar;
