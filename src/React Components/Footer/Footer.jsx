import React from "react";
import s from "./style.module.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className={s.siteFooter}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              "SANKALP" is the 'determination' of Being-able to help and serve
              the Society as per needed, according to the situation to reduce
              their sufferings and miseries. This is the "SANKALP" to create
              happy faces all around the area where our team works and
              progressively to large scale areas, where we could outreach our
              Generous Help.
            </p>
          </div>
          <div className="col-xs-6 col-md-3">
            {/* <h6>Programmes</h6>
            <ul className={s.footerLinks}>
              <li>
                <a href="/">A</a>
              </li>
              <li>
                <a href="/">B</a>
              </li>
              <li>
                <a href="/">C</a>
              </li>
              <li>
                <a href="/">D</a>
              </li>
              <li>
                <a href="/">E</a>
              </li>
              <li>
                <a href="/">F</a>
              </li>
            </ul> */}
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className={s.footerLinks}>
              <li>
                <NavLink to="/" onClick={()=>window.scrollTo(0,0)}>About Us</NavLink>
              </li>
              <li>
                <NavLink to="/privacyPolicy" onClick={()=>window.scrollTo(0,0)}>Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to="/Terms" onClick={()=>window.scrollTo(0,0)}>T&C</NavLink>
              </li>
              <li>
                <NavLink to="/Refund" onClick={()=>window.scrollTo(0,0)}>Refund Policy</NavLink>
              </li>
              <li>
              <NavLink to="/Contact" onClick={()=>window.scrollTo(0,0)}>Contact Us</NavLink>
              </li>
              <li>
                <a
                  dir="_blank"
                  href="https://www.google.com/maps/place/National+Institute+of+Technology,+Hamirpur/@31.7084336,76.5224817,17z/data=!3m1!4b1!4m6!3m5!1s0x3904d5487e12c4a1:0x395f92d3a202a7d0!8m2!3d31.7084291!4d76.5273526!16zL20vMGNybnJ4?entry=ttu"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className={s.copyrightText}>
              Copyright &copy; 2023 All Rights Reserved by
              <a href="/"> Sankalp Faundation</a>.
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className={s.socialIcons}>
              <li>
                <a
                  className={`${s.facebook} ${s.footerLogo}`}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/sankalpshiksha/"
                >
                  <img
                    className={s.logos}
                    src="./Media logos/linkedin.png"
                    alt=""
                    srcSet=""
                  />
                </a>
              </li>
              <li>
                <a className={`${s.twitter} ${s.footerLogo}`} href="/">
                  <img
                    className={s.logos}
                    src="./Media logos/twitter.png"
                    alt=""
                    srcSet=""
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className={`${s.dribbble} ${s.footerLogo}`}
                  href="https://www.youtube.com/channel/UC2xRMHVwMB8vuJBrjmylCPg"
                >
                  <img
                    className={s.logos}
                    src="./Media logos/youtube.png"
                    alt=""
                    srcSet=""
                  />
                </a>
              </li>
              <li>
                <a className={`${s.linkedin} ${s.footerLogo}`} href="/">
                  <img
                    className={s.logos}
                    src="./Media logos/instagram.png"
                    alt=""
                    srcSet=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
