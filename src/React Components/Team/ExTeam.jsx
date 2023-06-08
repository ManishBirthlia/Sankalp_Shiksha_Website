import React from "react";
import "./team.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function ExTeam(prop) {
  return (
    <div>
      <div class=" m-2 TeamInner">
        <div class="our-team">
          <div class="picture">
            <img class="img-fluid" src={prop.photo} alt="" />
          </div>
          <div class="team-content">
            <h3 class="name">{prop.name}</h3>
            <h4 class="title">{prop.title}</h4>
          </div>
          <ul class="social">
            <li>
              <a href="/" aria-hidden="true">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="/" aria-hidden="true">
                {" "}
                <FaTwitter />{" "}
              </a>
            </li>
            <li>
              <a href="/" aria-hidden="true">
                {" "}
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="/" aria-hidden="true">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExTeam;
