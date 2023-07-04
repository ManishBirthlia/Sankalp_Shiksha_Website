import React from "react";
import "./team.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function ExTeam(prop) {
  return (
    <div>
      <div className=" m-2 TeamInner">
        <div className="our-team">
          <div className="picture">
            <img className="img-fluid" src={prop.photo} alt="" />
          </div>
          <div className="team-content">
            <h3 className="name">{prop.name}</h3>
            <h4 className="title">{prop.title}</h4>
          </div>
          <ul className="social">
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
