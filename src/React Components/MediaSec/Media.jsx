import { useEffect } from "react";
import React from "react";
import s from "./Media.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import i1 from "./assets/i1.png";
import i2 from "./assets/i2.jpeg";
import i3 from "./assets/i3.jpeg";
import i4 from "./assets/i4.jpeg";
import i5 from "./assets/i5.png";
import i6 from "./assets/i6.png";
import i7 from "./assets/i7.png";

function Navbar() {
  useEffect(() => {
    AOS.init({ duration: 6000 });
  }, []);
  return (
    <div className={s.GalleryStart}>
      <h1>Media</h1>
      <hr />
        <div className={s.mediaVideo}> 
          <video data-aos="zoom-in-up" class={s.vid} controls>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            ></source>
          </video>
          <div class={s.Iframe}>
            <iframe data-aos="zoom-in" src="https://www.youtube.com/embed/vw7FG1bDQ8M" title="YouTube video" allow="accelerometer; autoplay; 
          clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      <div id={s.gallery} class="container-fluid">
        <div className={s.galleryImg}><img alt="" src={i1} class="img-responsive" /></div>
        <div className={s.galleryImg}><img alt="" src={i2} class="img-responsive" /></div>
        <div className={s.galleryImg}><img alt="" src={i3} class="img-responsive" /></div>
        <div className={s.galleryImg}><img alt="" src={i4} class="img-responsive" /></div>
        <div className={s.galleryImg}><img alt="" src={i5} class="img-responsive" /></div>
        <div className={s.galleryImg}><img alt="" src={i6} class="img-responsive" /></div>
        <div className={s.galleryImg}><img alt="" src={i7} class="img-responsive" /></div>
      </div>

      <div id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
