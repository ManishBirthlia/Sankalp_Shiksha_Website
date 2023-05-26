import React from "react";
import "./Main_c.css";

export default function (){
    return(
        <div id="carouselExampleIndicators" class="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-interval="5000" data-bs-pause="hover" data-bs-touch="true" >
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div class="carousel-inner">
              <div class="carousel-caption my-5 position_absolute">
                <h1>SANKALP SHIKSHA</h1>
                <p>Sankalp Shiksha is a non-profit organization created by students of NIT/IIT/MBBS that aims to uplift the rural education, mentor young minds and give back to the community.</p>
                <button type="button" class="btn btn-outline-primary btn_same my-5 mx-5 btn-lg py-3 px-5">Join Us</button>
                <button type="button" class="btn btn-outline-success btn_same my-5 mx-5 btn-lg py-3 px-5">Donate</button>
              </div>
            <div class="carousel-item active" style={{width:"100vw",height:"90vh",backgroundColor:"#FFC7C7"}}>
            </div>
            <div class="carousel-item" style={{width:"100vw",height:"90vh",backgroundColor:"#8785A2"}}>
            </div>
            <div class="carousel-item" style={{width:"100vw",height:"90vh",backgroundColor:"#594545"}}>
            </div>
            <div class="carousel-item" style={{width:"100vw",height:"90vh",backgroundColor:"#A6E3E9"}}>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
    );
}