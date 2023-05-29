import React from "react";
import s from "./Media.module.css";

const m=document.querySelector(".modal-body");

function Navbar() {
  return (
    <div className={s.GalleryStart}>
      <h1>Media</h1>
      <hr />
      <div id={s.gallery} class="container-fluid">
        <video class={s.vid} controls>
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          ></source>
        </video>
        <iframe
            class="img-responsive"
            src="https://www.youtube.com/embed/vw7FG1bDQ8M"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        <img
          // onClick={(prop)=>{
          //   m.innerHTML("<img src='"+prop.src+"' class='modal-img'>");
          //   // document.querySelector("#myModal").modal();
          // }}
          src="./Main_pics/1.jpg"
          class="img-responsive"
        />
        <img
          src="./Main_pics/16.jpg"
          class="img-responsive"
        />
        <img
          src="./Main_pics/15.jpg"
          class="img-responsive"
        />
        <img
          src="./Main_pics/14.jpg"
          class="img-responsive"
        />
        <img
          src="./Main_pics/13.jpg"
          class="img-responsive"
        />
        <img
          src="./Main_pics/12.jpg"
          class="img-responsive"
        />
        <img
          src="./Main_pics/11.jpg"
          class="card img-responsive"
        />
        <img
          src="./Main_pics/10.jpg"
          class="img-responsive"
        />
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
