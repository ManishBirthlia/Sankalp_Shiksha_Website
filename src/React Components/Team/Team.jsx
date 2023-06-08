import React from "react";
import T from "./TeamSample";
import ExTeam from "./ExTeam";
import "./team.css";
import vikas from "./Screenshot (119).png";
import ansari from "./Screenshot (118).png";
import sourabh from "./Screenshot (120).png";
import abhishek from "./Screenshot (121).png";
import aakash from "./Screenshot (122).png";
import satyam from "./Screenshot (123).png";
import Carousel from "react-multi-carousel";
import Nikita from "./executive/Screenshot (124).png";
import Pesaru from "./executive/Screenshot (125).png";
import firsdaus from "./executive/Screenshot (126).png";
import jas from "./executive/Screenshot (127).png";
import ani from "./executive/Screenshot (128).png";
import parvi from "./executive/Screenshot (129).png";
import Harsha from "./executive/Screenshot (130).png";
import vandi from "./executive/Screenshot (131).png";
import tiwari from "./executive/Screenshot (132).png";
import vicky from "./executive/Screenshot (133).png";
import praveen from "./executive/Screenshot (134).png";
import dev from "./executive/Screenshot (135).png";
import kriti from "./executive/Screenshot (136).png";
import shashank from "./executive/Screenshot (137).png";
import varun from "./executive/Screenshot (138).png";
import Mayur from "./executive/Screenshot (139).png";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1224 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1224, min: 764 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
  },
};

export default () => {
  return (
    <div class="container Team" style={{ textAlign: "center" }}>
      <h1>Our Founders</h1>
      <div class="row">
        <T
          photo={sourabh}
          name="Saurabh kumar sharma"
          title="CEO, GSVM medical college Kanpur"
        />
        <T photo={vikas} name="Vikas kumar" title="CEO, NIT hamirpur" />
        <T
          photo={ansari}
          name="Allaudin ansari"
          title="Director, (BRD medical college, gorakhpur)"
        />
        <T
          photo={abhishek}
          name="Abhishek kumar "
          title="Communication head, NIT "
        />
        <T
          photo={aakash}
          name="Aakash kumar "
          title="Research head, NIT hamirpur"
        />
        <T
          photo={satyam}
          name="Satyam tripathi"
          title="Media Co-Ordinator, NIT hamirpur"
        />
      </div>
      <h1>Executive Members</h1>
      <div class="row">
        <Carousel class="row" responsive={responsive}>
          <ExTeam
            photo={ani}
            name="Aniket Sharma"
            title="Social Media Manager"
          />
          <ExTeam
            photo={parvi}
            name="Parvi Gupta"
            title="Chief Marketing Head"
          />
          <ExTeam
            photo={Harsha}
            name="Harsha Baredia"
            title="Public Relation Head"
          />
          <ExTeam
            photo={Nikita}
            name="Nikita Mahoviya"
            title="Content Writer"
          />
          <ExTeam photo={tiwari} name="Ayush Tiwari" title="Legal Advisory" />
          <ExTeam
            photo={Pesaru}
            name="Pesaru abhinay"
            title="Graphics Designer"
          />
          <ExTeam photo={kriti} name="Kriti Sharma " title="PR Co-ordinator" />
          <ExTeam photo={dev} name="Devsagar" title="Finance Co-Ordinator" />
          <ExTeam
            photo={shashank}
            name="Shashank Shekhar"
            title="Content Writer"
          />
          <ExTeam
            photo={firsdaus}
            name="Firdaus Ansari"
            title="PR Co-Ordinator"
          />
          <ExTeam photo={jas} name="Jasmine Thakur" title="PR Co-Ordinator" />
          <ExTeam
            photo={varun}
            name="Saurabh Varun"
            title="Graphics Designer"
          />
          <ExTeam photo={vandi} name="Vandit Sharma " title="PR Co-ordinator" />
          <ExTeam photo={vicky} name="Vicky Soni" title="NIT-H REP" />
          <ExTeam photo={praveen} name="Praveen Tiwari" title="NIT-H REP" />
          <ExTeam photo={Mayur} name="Mayur Gupta" title="Web Developer" />
        </Carousel>
      </div>
      <h1>Mentors</h1>
      <div class="row">
        <T name="Vikas kumar" title="CEO, NIT hamirpur" />
        <T name="Vikas kumar" title="CEO, NIT hamirpur" />
        <T name="Vikas kumar" title="CEO, NIT hamirpur" />
        <T name="Vikas kumar" title="CEO, NIT hamirpur" />
      </div>
      <h1>Our Community</h1>
      <div class="row">
        <T name="Vikas kumar" title="CEO, NIT hamirpur" />
        <T name="Vikas kumar" title="CEO, NIT hamirpur" />
        <T name="Vikas kumar" title="CEO, NIT hamirpur" />
        <T name="Vikas kumar" title="CEO, NIT hamirpur" />
      </div>
    </div>
  );
};
