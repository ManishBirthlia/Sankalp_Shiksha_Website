import React from "react";
import styles from "./Mission.module.css";
import team from "./DSC_0089.jpg";
import team2 from "./DSC_0006.jpg";

function Mission() {
  return (
    <div className={styles.aboutsec}>
      <div className={styles.aboutCont}>
        <div className={styles.About}>
          <h1>Our Mission</h1>
          <div className={styles.aboutCon}>
            <div className={styles.content1}>
              To empower children and youth in rural regions through various
              sustainable initiatives and links corporate competitiveness with
              social development initiatives.
            </div>
            <div className={styles.img}>
              <img src={team2} alt="team" />
            </div>
          </div>
        </div>
        <div className={styles.department}>
          <h1> Our vision </h1>
          <div className={styles.aboutCon}>
            <div className={styles.content1}>
              A world where children and youth are equipped with skills and
              abilities to reach their full potential .
            </div>
            <div className={styles.img}>
              <img src={team} alt="team" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
