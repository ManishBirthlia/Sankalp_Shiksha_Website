import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top Navbar-main">
        <div className="container-fluid mx-2">
          <a className="navbar-brand nb" href="/">
            <img src="" alt="" srcset="" />
            SANKALP <br />
            <p>SHIKSHA</p>
          </a>
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
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
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
                    <a className="dropdown-item" href="/">
                      Founder's Story
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Mission Vision & Values
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Our Supporters
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Blogs
                    </a>
                  </li>
                </ul>
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
                  All Programmes
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
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
                </ul>
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
                      Outreach Mission
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Stories Of Change
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Awards and Recognitions
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Annual Reports
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item mg">
                <a className="nav-link" href="/">
                  What We Do
                </a>
              </li>
              <li className="nav-item mg">
                <a className="nav-link" href="/">
                  Our Community
                </a>
              </li>
              <li className="nav-item mg">
                <a className="nav-link" href="/">
                  Contact
                </a>
              </li>
            </ul>
            <button type="button" className="btn btn-warning bttn">
              Donate
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
