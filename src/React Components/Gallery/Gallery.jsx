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
      <div id={s.gallery} className="container-fluid">
        <img alt="" src="./Main_pics/1.jpg" className="img-responsive" />
        <img alt="" src="./Main_pics/16.jpg" className="img-responsive" />
        <img alt="" src="./Main_pics/15.jpg" className="img-responsive" />
        <img alt="" src="./Main_pics/14.jpg" className="img-responsive" />
        <img alt="" src="./Main_pics/13.jpg" className="img-responsive" />
        <img alt="" src={img12} className="img-responsive" />
        <img alt="" src={img11} className="card img-responsive" />
        <img alt="" src="./Main_pics/10.jpg" className="img-responsive" />
        <img alt="" src="./Main_pics/9.jpg" className="img-responsive" />
        <img alt="" src={img4} className="img-responsive" />
        <img alt="" src="./Main_pics/6.jpg" className="img-responsive" />
        <img alt="" src="./Main_pics/7.jpg" className="img-responsive" />
        <img alt="" src="./Main_pics/3.jpg" className="img-responsive" />
        <img alt="" src={img2} className="img-responsive" />
        <img alt="" src="./Main_pics/5.jpg" className="img-responsive" />
      </div>

      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
