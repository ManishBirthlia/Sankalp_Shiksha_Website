import React, { useEffect } from "react";
import s from "./index.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Support() {
  useEffect(() => {
    AOS.init({ duration: 6000 });
  }, []);
  return (
    <div id="Supportes" className={s.center}>
      <h1 data-aos="fade-left">Our Supporters</h1>
      <div class={s.loopSlider}>
        <div class={s.loopSlideTrack}>
          <div class={s.loopSlide}>
            <img
              src="logos/SANKALP-SHIKSHA-ICON.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class={s.loopSlide}>
            <img
              src="logos/1.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class={s.loopSlide}>
            <img
              src="logos/2-2.jpg"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class={s.loopSlide}>
            <img src="logos/webd.jpg" height="100" width="250" alt="" />
          </div>
          <div class={s.loopSlide}>
            <img
              src="logos/3.jpg"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class={s.loopSlide}>
            <img
              src="logos/4-4.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class={s.loopSlide}>
            <img src="logos/Logo-NCF-1.png" height="100" width="250" alt="" />
          </div>
          <div class={s.loopSlide}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class={s.loopSlide}>
            <img
              src="logos/Tredence_logo.webp"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class={s.slide}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class={s.loopSlide}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class={s.loopSlide}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class={s.loopSlide}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class={s.loopSlide}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Support;
