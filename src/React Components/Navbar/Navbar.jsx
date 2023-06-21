import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar(prop) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark Navbar-main">
      <div className="container-fluid mx-2">
        <Link className="navbar-brand nb" to="/">
          <img src="./Media logos/SANKALP SHIKSHA ICON.png" alt="" srcset="" />
          <div>
            SANKALP <br />
            <p>SHIKSHA</p>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mg">
              <NavLink className="nav-link" aria-current="page" to="/">
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
                  <NavLink className="dropdown-item" to="/WhatWeDo">
                    What we do
                  </NavLink>
                </li>

                <li>
                  <NavLink className="dropdown-item" to="/Team">
                    Our Team
                  </NavLink>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/gallery">
                    Gallery
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown mg">
              <a
                className="nav-link" // dropdown-item
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
                  <a className="dropdown-item" href="/">
                    #
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    #
                  </a>
                </li>
              </ul> */}
            </li>
            <li className="nav-item dropdown mg">
              <a
                className="nav-link dropdown-toggle"
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
                  <a className="dropdown-item" href="/">
                    Reach Out
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Stories Of Change
                  </a>
                </li>
                <li>
                  <Link className="dropdown-item" to="/WhatWeDo">
                    Awards and Recognitions
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://yourstory.com/hindi/social-work-with-job-meet-vikas-kumar-who-is-helping-poor-children-to-fulfill-their-dreams-education"
                  >
                    Blogs
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item mg">
              <NavLink className="nav-link" to="contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
          <button type="button" className="btn btn-warning btton">
            Donate
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
