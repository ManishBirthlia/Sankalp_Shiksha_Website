import React from "react";
import "./Main_c.css";
import img1 from "./4.JPG";
import img1_1 from "./4_small.JPG";
import img2_1 from "./11_small.JPG";
import img3_1 from "./2_small.JPG";
import img4_1 from "./12_small.JPG";
import img2 from "./11.JPG";
import img3 from "./2.JPG";
import img4 from "./12.JPG";

function Mainsection() {
  return (
    <div id="Main_section" className="Main_top_Effect">
      <div
        id="carouselExampleIndicators"
        className="carousel carousel-dark cDKR slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
        data-bs-touch="true"
      >
        <div className="carousel-indicators ">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner main_car">
          <div className="carousel-caption my-5 position_absolute">
            <h1>SANKALP SHIKSHA</h1>
            <p>
              Sankalp Shiksha is a non-profit organization created by students
              of NIT/IIT/MBBS that aims to uplift the rural education, mentor
              young minds and give back to the community.
            </p>
            <button
              type="button"
              className="btn btn-outline-primary btn_same my-5 mx-2 btn-lg py-3 px-5"
            >
              Join Us
            </button>
          </div>
          <div
            className="carousel-item active"
            style={{
              width: "100vw",
              height: "90vh",
              backgroundColor: "#FFC7C7",
            }}
          ><picture >
            <source media="(max-width:500px)" srcset={img1_1}/>
            <img
              src={img1}
              loading="lazy"
              style={{ width: "100vw", height: "90vh" }}
              alt=""
            />
          </picture>
          </div>
          <div
            className="carousel-item"
            style={{
              width: "100vw",
              height: "90vh",
              backgroundColor: "#8785A2",
            }}
          >
            <picture >
            <source media="(max-width:500px)" srcset={img2_1}/>
            <img
              src={img2}
              loading="lazy"
              style={{ width: "100vw", height: "90vh" }}
              alt=""
            />
          </picture>
          </div>
          <div
            className="carousel-item"
            style={{
              width: "100vw",
              height: "90vh",
              backgroundColor: "#594545",
            }}
          >
            <picture >
            <source media="(max-width:500px)" srcset={img3_1}/>
            <img
              src={img3}
              loading="lazy"
              style={{ width: "100vw", height: "90vh" }}
              alt=""
            />
          </picture>
          </div>
          <div
            className="carousel-item"
            style={{
              width: "100vw",
              height: "90vh",
              backgroundColor: "#A6E3E9",
            }}
          >
            <picture >
            <source media="(max-width:500px)" srcset={img4_1}/>
            <img
              src={img4}
              loading="lazy"
              style={{ width: "100vw", height: "90vh" }}
              alt=""
            />
          </picture>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Mainsection;
