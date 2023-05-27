import React from "react";
import styles from "./Mission.module.css";
import team from "./DSC_0089.jpg";

function Mission() {
  return (
    <div className={styles.aboutsec}>
      <div className={styles.aboutCont}>
        <div className={styles.About}>
          <h1>Our Mission</h1>
          <div className={styles.aboutCon}>
            <div className={styles.content1}>
              Since 2010, the departmental team of Mechanical Engineering at NIT
              Hamirpur has been an integral part of the annual technical fest,
              NIMBUS. With a passion for engineering and problem-solving, our
            </div>
            <div className={styles.img}>
              <img src={team} alt="team" />
            </div>
          </div>
        </div>
        <div className={styles.department}>
          <h1>Our vision</h1>
          <div className={styles.aboutCon}>
            <div className={styles.content1}>
              Since 2010, the departmental team of Mechanical Engineering at NIT
              Hamirpur has been an integral part of the annual technical fest,
              NIMBUS. With a passion for engineering and problem-solving, our
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
