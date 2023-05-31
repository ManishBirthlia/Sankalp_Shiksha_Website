import { useEffect } from "react";
import React from "react";
import s from "./Media.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  useEffect(() => {
    AOS.init({ duration: 6000 });
  }, []);
  return (
    <div className={s.GalleryStart}>
      <h1>Media</h1>
      <hr />
      <div id={s.gallery} class="container-fluid">
        <video data-aos="zoom-in-up" class={s.vid} controls>
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          ></source>
        </video>
        <iframe
          data-aos="zoom-in"
          class="img-responsive"
          src="https://www.youtube.com/embed/vw7FG1bDQ8M"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
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
