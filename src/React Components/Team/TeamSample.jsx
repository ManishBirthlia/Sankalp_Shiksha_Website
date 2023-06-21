import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default (prop) => {
  return (
    <>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-2 TeamInner">
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
    </>
  );
};
