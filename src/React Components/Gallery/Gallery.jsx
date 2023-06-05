import React from "react";
import s from "./Gallery.module.css";
import img4 from "./4.JPG";
import img11 from "./11.JPG";
import img2 from "./2.JPG";
import img12 from "./12.JPG";

function Gallery() {
  return (
    <div id="gallery" className={s.GalleryStart}>
      <h1>Image Gallery</h1>
      {/* <hr /> */}
      <div id={s.gallery} class="container-fluid">
        <img alt="" src="./Main_pics/1.jpg" class="img-responsive" />
        <img alt="" src="./Main_pics/16.jpg" class="img-responsive" />
        <img alt="" src="./Main_pics/15.jpg" class="img-responsive" />
        <img alt="" src="./Main_pics/14.jpg" class="img-responsive" />
        <img alt="" src="./Main_pics/13.jpg" class="img-responsive" />
        <img alt="" src={img12} class="img-responsive" />
        <img alt="" src={img11} class="card img-responsive" />
        <img alt="" src="./Main_pics/10.jpg" class="img-responsive" />
        <img alt="" src="./Main_pics/9.jpg" class="img-responsive" />
        <img alt="" src={img4} class="img-responsive" />
        <img alt="" src="./Main_pics/6.jpg" class="img-responsive" />
        <img alt="" src="./Main_pics/7.jpg" class="img-responsive" />
        <img alt="" src="./Main_pics/3.jpg" class="img-responsive" />
        <img alt="" src={img2} class="img-responsive" />
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
