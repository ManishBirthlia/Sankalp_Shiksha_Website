import { BiLibrary } from "react-icons/bi";
import { FaSchool } from "react-icons/fa";
import React, { useEffect } from "react";
import { VscRocket,VscOrganization,VscMortarBoard} from "react-icons/vsc";
import styles from "./Mission.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Mission() {
  useEffect(() => {
    AOS.init({ duration: 6000 });
  }, []);
  return (
      <div className={`${styles.initiative} container`}>
        <div className={styles.row}>
          <div className={styles.column} data-aos="zoom-in">
            <div className={styles.card}>
            <div className={`${styles.iconwrap} mb-4`}>
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
          <div className={styles.column} data-aos="zoom-in">
            <div className={styles.card}>
            <div className={`${styles.iconwrap} mb-4`}>
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