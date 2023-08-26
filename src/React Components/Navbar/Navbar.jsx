import React, { useState, useContext, useEffect, useRef } from "react";
import "./Navbar.css";
import {useStorage} from "../ContextProvider";
import { Link, NavLink, redirect, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Navbar(prop) {
  const location=useLocation();
  const [navShow, setNavShow] = useState(true);
  const {UserPresent,setUserPresent}=useStorage();
  const HandleLogOut=async()=>{
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
    localStorage.removeItem("email");
    setUserPresent(false);
  }
  const HandleNavItemClick=()=>{
    if(window.innerWidth<=993){
      setNavShow(false);
    }
    // console.log("HandleNavItemClick is Clicked");
  }
  useEffect(()=>{
    if(window.innerWidth<=993){
      setNavShow(false);
    }else{
      setNavShow(true);
    }
  },[]);
  return (
    <nav className="navbar navbar-expand-lg navbar-light Navbar-main px-5">
      <div className="container-fluid mx-auto">
        <Link className="navbar-brand nb" to="/">
          <img src="./Media logos/sankalp  logo.png" alt="" srcSet="" />
        </Link>
        <button className="navbar-toggler" onClick={() => setNavShow(!navShow)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        {navShow ? (
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mg">
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#00a7e7" : "black",
                  })}
                  className="nav-link mx-auto"
                  aria-current="page"
                  to="/"
                  onClick={()=>HandleNavItemClick()}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item mg">
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#00a7e7" : "black",
                  })}
                  className="nav-link mx-auto"
                  to="/AboutUs" onClick={()=>HandleNavItemClick()}
                >
                  About Us
                </NavLink>
              </li>
              {/* <li className="nav-item dropdown mg">
                <a
                  style={{color:"black"}}
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
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#00a7e7" : "black",
                        "background-color":"white"
                      })}
                      className="dropdown-item mx-auto"
                      to="/WhatWeDo"
                      // onClick={HandleClick}
                    >
                      What we do
                    </NavLink>
                  </li>

                   <li>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#00a7e7" : "black",
                        "background-color":"white"
                      })}
                      className="dropdown-item mx-auto"
                      to="/Team"
                      // onClick={HandleClick}
                    >
                      Our Team
                    </NavLink>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#00a7e7" : "black",
                        "background-color":"white"
                      })}
                      className="dropdown-item mx-auto"
                      to="/gallery"
                      // onClick={HandleClick}
                    >
                      Gallery
                    </NavLink>
                  </li>
                </ul>
              </li> */}
              {location.pathname=="/" && <li className="nav-item dropdown mg">
                <a
                  style={{color:"black"}}
                  className="nav-link mx-auto"
                  href="#Initiative"
                  id="navbarDropdown2" onClick={()=>HandleNavItemClick()}
                > 
                  Our Initiative
                </a>
              </li>}
              <li className="nav-item dropdown mg">
                <a
                  style={{color:"black"}}
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
                    <a
                      // style={({ isActive }) => ({
                      //   color: isActive ? "#00a7e7" : "black",
                      //   "background-color":"white"
                      // })}
                      className="dropdown-item mx-auto"
                      href="/"
                    >
                      Reach Out
                    </a>
                  </li>
                  <li>
                    <a
                      // style={({ isActive }) => ({
                      //   color: isActive ? "#00a7e7" : "black",
                      // })}
                      className="dropdown-item mx-auto"
                      href="/"
                    >
                      Stories Of Change
                    </a>
                  </li>
                  <li>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#00a7e7" : "black",
                        "background-color":"white"
                      })}
                      className="dropdown-item mx-auto"
                      to="/WhatWeDo" onClick={()=>HandleNavItemClick()}
                      // onClick={HandleClick}
                    >
                      Awards and Recognitions
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      style={{color:"black"}}
                      className="dropdown-item mx-auto"
                      href="https://yourstory.com/hindi/social-work-with-job-meet-vikas-kumar-who-is-helping-poor-children-to-fulfill-their-dreams-education"
                    >
                      Blogs
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item mg">
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#00a7e7" : "black",
                  })}
                  className="nav-link mx-auto"
                  to="/contact" onClick={()=>HandleNavItemClick()}
                  // onClick={HandleClick}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            {!UserPresent && location.pathname!="/signUp" && <NavLink type="button" className="btn btn-primery btton my-3 mx-3" to="/signUp"
            style={({ isActive }) => ({
              color: isActive ? "#00a7e7" : "black",
              backgroundColor:isActive ? "white" : "#f0f8ff00"
            })} onClick={()=>HandleNavItemClick()}
            >
              Sign In
            </NavLink>}
            {!UserPresent && location.pathname=="/signUp" && <NavLink type="button" className="btn btn-primery btton my-3 mx-3" to="/logIn"
            style={({ isActive }) => ({
              color: isActive ? "#00a7e7" : "black",
              backgroundColor:isActive ? "white" : "#f0f8ff00"
            })} onClick={()=>HandleNavItemClick()}
            >
              LogIn
            </NavLink>}
            {UserPresent && <NavLink type="button" className="btn btn-primery btton my-3" to="/Donate"
            style={({ isActive }) => ({
              color: isActive ? "#00a7e7" : "black",
              "border-color":!isActive? "#00a7e7":"white",
              backgroundColor:isActive ? "white" : "#f0f8ff00"
            })} onClick={()=>HandleNavItemClick()}
            >
              Donate
            </NavLink>}
            {UserPresent && <button type="button" onClick={()=>{HandleLogOut();HandleNavItemClick()}} className="btn btn-primery rounded btton my-3">
              LogOut
            </button>}
            {/* {location.pathname!="/signIn" && <li className="nav-item dropdown mg"></li> */}
          </div>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
