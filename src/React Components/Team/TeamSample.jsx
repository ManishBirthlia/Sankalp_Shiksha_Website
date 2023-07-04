import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function TeamSample(prop){
  return (
    <>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-2 TeamInner">
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
    </>
  );
};
