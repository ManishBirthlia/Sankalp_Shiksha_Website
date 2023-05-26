import React, { useEffect } from "react";
import Styles from "./Initiative.module.css";
import { DiNodejs, DiCss3 } from "react-icons/di";
import { FaCopyright } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Initiative() {
  useEffect(() => {
    AOS.init({ duration: 6000 });
  }, []);
  return (
    <div>
      <div className={Styles.Services} id="services">
        <h2 data-aos="zoom-in">Services</h2>
        <div className={Styles.row}>
          <div class={Styles.column} data-aos="zoom-in">
            <div class={Styles.card}>
              <div class={Styles.iconwrap}>
                <i>
                  <DiCss3 />
                </i>
              </div>
              <h3>Frontend Developement</h3>
            </div>
          </div>
          <div class={Styles.column} data-aos="zoom-in">
            <div class={Styles.card}>
              <div class={Styles.iconwrap}>
                <i>
                  <DiNodejs />
                </i>
              </div>
              <h3>Backend Developement</h3>
            </div>
          </div>
          <div class={Styles.column} data-aos="zoom-in">
            <div class={Styles.card}>
              <div class={Styles.iconwrap}>
                <i>
                  <FaCopyright />
                </i>
              </div>
              <h3>CPP Developement</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Initiative;
