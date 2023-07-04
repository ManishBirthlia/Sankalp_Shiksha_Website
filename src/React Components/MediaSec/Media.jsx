import { useEffect } from "react";
import React from "react";
import s from "./Media.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Main_c.css";
import i1 from "./assets/i1.png";
import i2 from "./assets/i2.jpeg";
import i3 from "./assets/i3.jpeg";
import i4 from "./assets/i4.jpeg";
import i5 from "./assets/i5.png";
import i6 from "./assets/i6.png";
import i7 from "./assets/i7.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1224 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1224, min: 764 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
  },
};

function Navbar() {
  useEffect(() => {
    AOS.init({ duration: 10000 });
  }, []);
  return (
    <div className={s.GalleryStart}>
      <h2>Media</h2>
      {/* <hr /> */}
      <div className={s.mediaVideo}>
        {/* <div className={`${s.video} text-center`}>
          <video data-aos="zoom-in-up" className={s.vid} controls>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            ></source>
          </video>
          <h3>Title</h3>
        </div> */}
        <div className={s.Iframe}>
          <iframe
            width="937"
            height="527"
            src="https://www.youtube.com/embed/QWY780JAQQc"
            title="Beyond Possible Stories ft. Vikas Kumar - The Changemaker"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h3>Vikas Kumar - The Changemaker</h3>
        </div>
        <div className={s.Iframe}>
          <iframe
            src="https://www.youtube.com/embed/vw7FG1bDQ8M"
            title="YouTube video"
            allow="accelerometer; autoplay; 
              clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h3>How Sankalp Foundation Began</h3>
        </div>
      </div>
      <Carousel
        className={s.Carouselmed}
        responsive={responsive}
        swipeable={true}
      >
        <figure data-aos="fade-up" className="snip1390 ">
          <img alt="" src={i1} className="img-responsive w-100 h-100" />
        </figure>
        <figure data-aos="fade-up" className="snip1390 ">
          <img alt="" src={i2} className="img-responsive w-100 h-100" />
        </figure>
        <figure data-aos="fade-up" className="snip1390 ">
          <img alt="" src={i3} className="img-responsive w-100 h-100" />
        </figure>
        <figure data-aos="fade-up" className="snip1390 ">
          <img alt="" src={i4} className="img-responsive w-100 h-100" />
        </figure>
        <figure data-aos="fade-up" className="snip1390 ">
          <img alt="" src={i5} className="img-responsive w-100 h-100" />
        </figure>
        <figure data-aos="fade-up" className="snip1390 ">
          <img alt="" src={i6} className="img-responsive w-100 h-100" />
        </figure>
        <figure data-aos="fade-up" className="snip1390 ">
          <img alt="" src={i7} className="img-responsive w-100 h-100" />
        </figure>
      </Carousel>
      {/* <div className="MainSection">
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-custom"
          data-bs-ride="carousel"
          data-bs-touch="true"
          data-bs-interval="5000"
          data-bs-pause="hover"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img alt="" src={i1} className="img-responsive w-100 h-100" />
            </div>
            <div className="carousel-item">
              <img alt="" src={i1} className="img-responsive w-100 h-100" />
            </div>
            <div className="carousel-item">
              <img alt="" src={i1} className="img-responsive w-100 h-100" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div> */}

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

export default Navbar;
