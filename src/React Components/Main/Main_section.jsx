import React from "react";
import "./Main_c.css";

function Mainsection() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
        data-bs-pause="hover"
        data-bs-touch="true"
      >
        <div className="carousel-indicators">
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
            <button
              type="button"
              className="btn btn-outline-success btn_same my-5 mx-2 btn-lg py-3 px-5"
            >
              Donate
            </button>
          </div>
          <div
            className="carousel-item active"
            style={{
              width: "100vw",
              height: "90vh",
              backgroundColor: "#FFC7C7",
            }}
          >
            <img
              src="./Main_pics/4.jpg"
              style={{ width: "100vw", height: "90vh" }}
              alt=""
              srcset=""
            />
          </div>
          <div
            className="carousel-item"
            style={{
              width: "100vw",
              height: "90vh",
              backgroundColor: "#8785A2",
            }}
          >
            <img
              src="./Main_pics/11.jpg"
              style={{ width: "100vw", height: "90vh" }}
              alt=""
              srcset=""
            />
          </div>
          <div
            className="carousel-item"
            style={{
              width: "100vw",
              height: "90vh",
              backgroundColor: "#594545",
            }}
          >
            <img
              src="./Main_pics/2.jpg"
              style={{ width: "100vw", height: "90vh" }}
              alt=""
              srcset=""
            />
          </div>
          <div
            className="carousel-item"
            style={{
              width: "100vw",
              height: "90vh",
              backgroundColor: "#A6E3E9",
            }}
          >
            <img
              src="./Main_pics/12.jpg"
              style={{ width: "100vw", height: "90vh" }}
              alt=""
              srcset=""
            />
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
