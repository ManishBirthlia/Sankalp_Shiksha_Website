import React from "react";
import s from "./Main_c.module.css";
import img4 from "./G2.png";
import img4_1 from "./G24.png";
// import img4_1 from "./12_small.JPG";
// import img4 from "./12.JPG";

function Mainsection() {
  return (
    <div id={s.Main_section} className={s.Main_top_Effect}>
          <div>
            <picture>
              <source media="(max-width:800px)" srcSet={img4_1} />
              <img
                src={img4}
                loading="lazy"
                className={`${s.Main_image} ${s.position_absolute}`}
                alt=""
              />
            </picture>
          </div>
            <div className="container">
          <div className={s.position_absolute}>
            <h1 className={s.mainh1}>SANKALP SHIKSHA</h1>
            <h2 className={s.mainh2}>Connecting Rural Students<br/> <span> to Digital India</span></h2>
            <p className={s.mainp}>
              We aims to uplift the rural education, mentor
              young minds and give back to the community.
            </p>
            <button type="button" className={`btn btn-primary btn-lg py-3 me-2 ${s.btn_same}`} >
              Join Us
            </button>
            <button type="button" className={`btn btn-primary btn-lg py-3 ms-2 ${s.btn_same}`} >
              Donate Now
            </button>
          </div>
          </div>
    </div>
  );
}

export default Mainsection;
