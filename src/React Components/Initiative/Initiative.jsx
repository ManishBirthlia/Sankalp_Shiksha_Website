import React, { useEffect } from "react";
import { VscRocket,VscOrganization,VscMortarBoard} from "react-icons/vsc";
import styles from "./Initiative.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Initiative() {
  useEffect(() => {
    AOS.init({ duration: 6000 });
  }, []);
  return (
    <div id="Initiative" className="RegularBackground RegularOverlay container">
      <div className={styles.initiative}>
        <h2>Our Initiative</h2>
        <div className={styles.row}>
          <div className={styles.column} data-aos="zoom-in">
            <div className={styles.card}>
              <h3>Innovators of Tomorrow</h3>
              <h5><VscRocket size={20} /> Aspire to Inspire</h5>
              <p>
                We aim to foster a conducive learning environment that
                facilitates the identification of career pathways, provides
                guidance for further education, and cultivates essential skills
                in English Proficiency, Computer Education, Coding, and various
                tech & soft skills, ultimately leading to enhanced employment
                opportunities.
              </p>
            </div>
          </div>
          <div className={styles.column} data-aos="zoom-in">
            <div className={styles.card}>
              <h3>Rojgar Buddy</h3>
              <h5><VscMortarBoard size={20}/>Get your job Ready</h5>
              <p>
                Our objective is to empower young people by providing them with
                the necessary information to make informed decisions about their
                career, facilitate aspirants in enhancing the overall well-being
                of their families, and focus on skills enhancement in areas such
                as Robotics, Drones, IoT, Coding, and soft skills. This
                preparation will enable students to secure employment in
                fast-emerging sectors like Retail, IT, and BPOs, thereby opening
                up better employment opportunities.
              </p>
            </div>
          </div>
          <div className={styles.column} data-aos="zoom-in">
            <div className={styles.card}>
              <h3>Sankalp Se Vikalp</h3>
              <h5><VscOrganization size={20} /> Empowering the Next Generation</h5>
              <p>
                Our objective is to provide a diverse range of training
                opportunities that enhance the skills, knowledge, and career
                aspirations of rural youths, equipping them to pursue their
                personal goals and establish their own businesses, while
                simultaneously fostering job creation and economic empowerment
                in rural areas through different initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Initiative;
