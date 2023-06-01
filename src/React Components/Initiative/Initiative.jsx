import React, { useEffect } from "react";
import styles from "./Initiative.module.css";

import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 924 },
    items: 2,
  },

  mobile: {
    breakpoint: { max: 924, min: 0 },
    items: 1,
  },
};

function Initiative() {
  useEffect(() => {
    AOS.init({ duration: 6000 });
  }, []);
  return (
    <div className={styles.initiative}>
      <h2>Initiative</h2>
      <Carousel responsive={responsive}>
        <div className={styles.card}>
          <div className={styles.up}>
            <h1>Innovators of Tomorrow</h1>
            <h5>Aspire to Inspire</h5>
          </div>
          <div className={styles.objective}>
            <h3>Objectives</h3>
            <ul>
              <li>Creating a conducive learning environment.</li>
              <li>
                {" "}
                Identification of career pathways and guidance for further
                education.
              </li>
              <li>
                Developing the skills in English Proficiency, Computer
                Education, Coding and various tech & soft skills which can lead
                to better employment opportunities.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.up}>
            <h1>Rojgar Buddy</h1>
            <h5>Get your job Ready</h5>
          </div>
          <div className={styles.objective}>
            <h3>Objectives</h3>
            <ul>
              <li>
                To empower young people to make informed decision about their
                career.
              </li>
              <li>
                To facilitate aspirants for elevating overall well-being of
                their families
              </li>
              <li>
                To focus on skills enhancement in areas such as Robotics,
                Drones, loT, Coding and soft skills to prepare students for
                employment in fast emerging sectors such as Retail, IT and BPOs.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.up}>
            <h1>Sankalp Se Vikalp</h1>
            <h5>Empowering the Neat Generation</h5>
          </div>
          <div className={styles.objective}>
            <h3>Objectives</h3>
            <ul>
              <li>
                To offer a wide range of training options that improves the
                skills D i and knowledge of Rural youths, enabling them to
                pursue their onaie career goals and start their own business
              </li>
              <li>
                To contribute to the growth and development of Rural areas Gil
                Google Pay, Phony - cards through job creation and economic
                empowerment.
              </li>
            </ul>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Initiative;
