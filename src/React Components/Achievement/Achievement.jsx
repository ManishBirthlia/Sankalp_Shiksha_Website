import { MdOutlineFestival } from "react-icons/md";
import { TbAward } from "react-icons/tb";
import { BiParty } from "react-icons/bi";
import React, { useEffect } from "react";
import { VscRocket,VscOrganization,VscMortarBoard} from "react-icons/vsc";
import styles from "./Achievement.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Achievement() {
  useEffect(() => {
    AOS.init({ duration: 6000 });
  }, []);
  return (
      <div className={`${styles.initiative} container`}>
        <h2>Achievements</h2>
        <div className={styles.row}>
          <div className={styles.column} data-aos="zoom-in">
            <div className={styles.card}>
            <div className={`${styles.iconwrap} mb-4`}> 
                 <MdOutlineFestival /> 
            </div>
            <h3>Kushinagar mahotsav</h3>
              <p>
              Awarded by Swati Singh (Minister, women and child welfare U.P govt)
              </p>
            </div>
          </div>
          <div className={styles.column} data-aos="zoom-in">
            <div className={styles.card}>
            <div className={`${styles.iconwrap} mb-4`}> 
                 <TbAward /> 
            </div>
            <h3>Noble citizen award</h3>
              <p>Awarded by Ministry of Nepal (Issue of child beggar problems) </p>
            </div>
          </div>
          <div className={styles.column} data-aos="zoom-in">
            <div className={styles.card}>
            <div className={`${styles.iconwrap} mb-4`}> 
                 <BiParty /> 
             </div>
             <h3>Appreciated by Jagrithi</h3>
             <p> Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classNameical Latin </p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Achievement;

// import React from "react";
// import s from "./Achievement.module.css";

// export default function Achievement(){
//   return (
//     <div id="Achievement" className={s.Achievement}>
//       <h1>Achievements</h1>
//       <div className={s.mainContent}>
//         <div className={s.card}>
//           <h3>Kushinagar mahotsav</h3>
//           <div className={s.line}></div>
//           <p>
//             Awarded by Swati Singh (Minister, women and child welfare U.P govt)
//           </p>
//         </div>
//         <div className={s.card}>
//           <h3>Noble citizen award</h3>
//           <div className={s.line}></div>
//           <p>Awarded by Ministry of Nepal (Issue of child beggar problems)</p>
//         </div>
//         <div className={s.card}>
//           <h3>Appreciated by Jagrithi</h3>
//           <div className={s.line}></div>
//           <p>
//             Contrary to popular belief, Lorem Ipsum is not simply random text.
//             It has roots in a piece of classNameical Latin
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
