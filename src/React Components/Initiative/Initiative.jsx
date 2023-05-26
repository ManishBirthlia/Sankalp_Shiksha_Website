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
        <h2 data-aos="zoom-in">Initiative</h2>
        <div className={Styles.row}>
          <div class={Styles.column} data-aos="zoom-in">
            <div class={Styles.card}>
              <div class={Styles.iconwrap}>
                <i>
                  <DiCss3 />
                </i>
              </div>
              <h3>Heading</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                minima modi repellendus error eos fugit ad ratione eligendi.
                Reprehenderit cum culpa fuga vero itaque nulla, iure ipsam
                doloremque inventore impedit.
              </p>
            </div>
          </div>
          <div class={Styles.column} data-aos="zoom-in">
            <div class={Styles.card}>
              <div class={Styles.iconwrap}>
                <i>
                  <DiNodejs />
                </i>
              </div>
              <h3>Heading</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                minima modi repellendus error eos fugit ad ratione eligendi.
                Reprehenderit cum culpa fuga vero itaque nulla, iure ipsam
                doloremque inventore impedit.
              </p>
            </div>
          </div>
          <div class={Styles.column} data-aos="zoom-in">
            <div class={Styles.card}>
              <div class={Styles.iconwrap}>
                <i>
                  <FaCopyright />
                </i>
              </div>
              <h3>Heading</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                minima modi repellendus error eos fugit ad ratione eligendi.
                Reprehenderit cum culpa fuga vero itaque nulla, iure ipsam
                doloremque inventore impedit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Initiative;
