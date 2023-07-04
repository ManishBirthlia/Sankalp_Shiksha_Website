import React from "react";
import s from "./Achievement.module.css";

export default function Achievement(){
  return (
    <div id="Achievement" className={s.Achievement}>
      <h1>Achievements</h1>
      <div className={s.mainContent}>
        <div className={s.card}>
          <h3>Kushinagar mahotsav</h3>
          <div className={s.line}></div>
          <p>
            Awarded by Swati Singh (Minister, women and child welfare U.P govt)
          </p>
        </div>
        <div className={s.card}>
          <h3>Noble citizen award</h3>
          <div className={s.line}></div>
          <p>Awarded by Ministry of Nepal (Issue of child beggar problems)</p>
        </div>
        <div className={s.card}>
          <h3>Appreciated by Jagrithi</h3>
          <div className={s.line}></div>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classNameical Latin
          </p>
        </div>
      </div>
    </div>
  );
};
