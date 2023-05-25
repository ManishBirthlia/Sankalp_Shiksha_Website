import React from "react";
import "./Navbar.css";

export default function (){
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top Navbar-main">
  <div class="container-fluid mx-5">
    <a class="navbar-brand" href="#"><img src="" alt="" srcset=""/>
    SANKALP SHIKSHA</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item mx-4">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item dropdown mx-4">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About Us
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
            <li><a class="dropdown-item" href="#">Founder's Story</a></li>
            <li><a class="dropdown-item" href="#">Mission Vision & Values</a></li>
            <li><a class="dropdown-item" href="#">Gallery</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Our Team</a></li>
            <li><a class="dropdown-item" href="#">Our Supporters</a></li>
            <li><a class="dropdown-item" href="#">Blogs</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown mx-4">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            All Programmes
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
            <li><a class="dropdown-item" href="#">#</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">#</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown mx-4">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our Impact
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
            <li><a class="dropdown-item" href="#">Reach Out</a></li>
            <li><a class="dropdown-item" href="#">Outreach Mission</a></li>
            <li><a class="dropdown-item" href="#">Stories Of Change</a></li>
            <li><a class="dropdown-item" href="#">Awards and Recognitions</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Annual Reports</a></li>
          </ul>
        </li>
        <li class="nav-item mx-4">
          <a class="nav-link" href="#">What We Do</a>
        </li>
        <li class="nav-item mx-4">
          <a class="nav-link" href="#">Our Community</a>
        </li>
        <li class="nav-item mx-4">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <button type="button" class="btn btn-warning px-5">Donate</button>
    </div>
  </div>
</nav>
    );
}