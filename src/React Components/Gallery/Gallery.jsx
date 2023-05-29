import React from "react";
import s from "./Gallery.module.css";

function Gallery() {
  return (
    <div className={s.GalleryStart}>
      <h1>Image Gallery</h1>
      <hr />
      <div id={s.gallery} class="container-fluid">
        <img alt="" src="./Main_pics/1.jpg" class="img-responsive" />
        <img alt="" src="./Main_pics/16.jpg" class="img-responsive" />
        <img alt="" src="./Main_pics/15.jpg" class="img-responsive" />
        <video class={s.vid} controls>
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          ></source>
        </video>
        <img alt="" src="./Main_pics/14.jpg" class="img-responsive" />
        <img alt="" src="./Main_pics/13.jpg" class="img-responsive" />
        <img alt="" src="./Main_pics/12.jpg" class="img-responsive" />
        <img alt="" src="./Main_pics/11.jpg" class="card img-responsive" />
        <img alt="" src="./Main_pics/10.jpg" class="img-responsive" />
        <img alt="" src="./Main_pics/9.jpg" class="img-responsive" />
        <img alt="" src="./Main_pics/4.jpg" class="img-responsive" />
        <img alt="" src="./Main_pics/6.jpg" class="img-responsive" />
        <img alt="" src="./Main_pics/7.jpg" class="img-responsive" />
        <img alt="" src="./Main_pics/3.jpg" class="img-responsive" />
        <img alt="" src="./Main_pics/2.jpg" class="img-responsive" />
        <img alt="" src="./Main_pics/5.jpg" class="img-responsive" />
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

export default Gallery;
