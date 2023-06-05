import React, { useEffect } from "react";
import styles from "./Initiative.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Initiative() {
  useEffect(() => {
    AOS.init({ duration: 6000 });
  }, []);
  return (
    <div class="RegularBackground RegularOverlay">
    <div className={styles.initiative}>
      <h2>Initiative</h2>
      <div className={styles.row}>
      <div class={styles.column} data-aos="zoom-in">
          <div class={styles.card}>
            <h3>Innovators of Tomorrow</h3>
            <h5>Aspire to Inspire</h5>
            <p>
            We aim to foster a conducive learning environment that facilitates the identification of career pathways, provides guidance for further education, and cultivates essential skills in English Proficiency, Computer Education, Coding, and various tech & soft skills, ultimately leading to enhanced employment opportunities.
            </p>
          </div>
        </div>
      <div class={styles.column} data-aos="zoom-in">
          <div class={styles.card}>
            <h3>Rojgar Buddy</h3>
            <h5>Get your job Ready</h5>
            <p>
            Our objective is to empower young people by providing them with the necessary information to make informed decisions about their career, facilitate aspirants in enhancing the overall well-being of their families, and focus on skills enhancement in areas such as Robotics, Drones, IoT, Coding, and soft skills. This preparation will enable students to secure employment in fast-emerging sectors like Retail, IT, and BPOs, thereby opening up better employment opportunities.
            </p>
          </div>
        </div>
      <div class={styles.column} data-aos="zoom-in">
          <div class={styles.card}>
            <h3>Sankalp Se Vikalp</h3>
            <h5>Empowering the Neat Generation</h5>
            <p>
            Our objective is to provide a diverse range of training opportunities that enhance the skills, knowledge, and career aspirations of rural youths, equipping them to pursue their personal goals and establish their own businesses, while simultaneously fostering job creation and economic empowerment in rural areas through initiatives like Gil Google Pay and Phony-cards.
            </p>
          </div>
        </div>
        {/* <div className={styles.card}>
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
        </div> */}
      </div>
    </div>
    </div>
  );
}

export default Initiative;
