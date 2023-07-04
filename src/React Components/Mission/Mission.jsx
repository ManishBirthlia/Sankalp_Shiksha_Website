import React from "react";
import Styles from "./Mission.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BiLibrary } from "react-icons/bi";
import { FaSchool } from "react-icons/fa";

function Mission() {
  useEffect(() => {
    AOS.init({ duration: 6000 });
  }, []);
  return (
    <div className={Styles.Services} id="services">
      <h2 data-aos="zoom-in">Our Mission and Vision</h2>
      <div className={Styles.row}>
        <div className={Styles.column} data-aos="zoom-in">
          <div className={Styles.card}>
            <div className={Styles.iconwrap}>
              <i>
                <BiLibrary />
              </i>
            </div>
            <h3>mission</h3>
            <p>
              To empower children and youth in rural regions through various
              sustainable initiatives and links corporate competitiveness with
              social development initiatives.
            </p>
          </div>
        </div>
        <div className={Styles.column} data-aos="zoom-in">
          <div className={Styles.card}>
            <div className={Styles.iconwrap}>
              <i>
                <FaSchool />
              </i>
            </div>
            <h3>vision</h3>
            <p>
              A world where children and youth are equipped with skills and
              abilities to reach their full potential .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
