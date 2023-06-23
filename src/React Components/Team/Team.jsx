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
import Amit from "./executive/Amit Jaiswal.jpg";
import Anshu from "./executive/Anshu Yadav.jpg";
import Ranjan from "./executive/Ranjan Kumar.jpg";
import Simran from "./executive/Simran Patel.png";
// import Nikita from "./executive/Screenshot (124).png";
// import Pesaru from "./executive/Screenshot (125).png";
// import firsdaus from "./executive/Screenshot (126).png";
// import jas from "./executive/Screenshot (127).png";
// import ani from "./executive/Screenshot (128).png";
// import parvi from "./executive/Screenshot (129).png";
// import Harsha from "./executive/Screenshot (130).png";
// import vandi from "./executive/Screenshot (131).png";
// import tiwari from "./executive/Screenshot (132).png";
// import vicky from "./executive/Screenshot (133).png";
// import praveen from "./executive/Screenshot (134).png";
// import dev from "./executive/Screenshot (135).png";
// import kriti from "./executive/Screenshot (136).png";
// import shashank from "./executive/Screenshot (137).png";
// import varun from "./executive/Screenshot (138).png";
// import Mayur from "./executive/Screenshot (139).png";
import aditya from "./mentors/Screenshot (151).png";
import kaushar from "./mentors/Screenshot (164).png";
import rao from "./mentors/Screenshot (165).png";
import dolly from "./mentors/Screenshot (161).png";
import singh from "./mentors/Screenshot (155).png";
import mahajan from "./mentors/Screenshot (156).png";
import kumar from "./mentors/Screenshot (157).png";
import bhusan from "./mentors/Screenshot (152).png";
import swati from "./mentors/Screenshot (159).png";
import mukund from "./mentors/Screenshot (160).png";
import ashok from "./mentors/Screenshot (153).png";
import ishita from "./mentors/Screenshot (158).png";
import banyal from "./mentors/Screenshot (163).png";
import ujjawal from "./mentors/Screenshot (166).png";
import bissa from "./mentors/Screenshot (162).png";
import vivek from "./mentors/Screenshot (164).png";
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

function Team() {
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
      {/* <h1>Volunteers</h1> */}
      <div class="row">
        <Carousel class="row" responsive={responsive}>
          <ExTeam
            photo={Amit}
            name="Amit Jaiswal"
            title="project assistant Sankalp Shiksha"
          />
          <ExTeam
            photo={Simran}
            name="Simran Patel"
            title="Project coordinator Sankalp Shiksha"
          />
          <ExTeam
            photo={Anshu}
            name="Anshu Yadav"
            title="project assistant Sankalp Shiksha"
          />
          <ExTeam
            photo={Ranjan}
            name="Ranjan Kumar"
            title="project assistant Sankalp Shiksha"
          />
        </Carousel>
      </div>
      <h1>Mentors</h1>
      <div class="row">
        <Carousel class="row" responsive={responsive}>
          <ExTeam photo={aditya} name="Aditya Kumar" title="SDE-Facebook" />
          <ExTeam photo={kaushar} name="Sahil kaushar" title="Director NCF" />
          <ExTeam photo={rao} name="Sumit Rao" title="SDE-Samsung" />

          <ExTeam
            photo={singh}
            name="Surjeet Singh"
            title="SDO-Electricity Dept."
          />
          <ExTeam
            photo={mahajan}
            name="Siddarth Mahajan"
            title="Er.-Maruti Suzuki"
          />
          <ExTeam
            photo={kumar}
            name="Abhishek Kumar "
            title="PHD,IIT Kharagpur"
          />
          <ExTeam
            photo={bhusan}
            name="Shashi Bhusan"
            title="Gate AIR-7,PHD-IITM"
          />
          <ExTeam photo={swati} name="Swati" title="SDE-Samsung" />
          <ExTeam
            photo={mukund}
            name="Mukund Agarwal"
            title="SDE-Urban Company"
          />
          <ExTeam photo={bissa} name="Priyanka Bissa" title="Social Activist" />
          <ExTeam photo={ujjawal} name="Ujjawal Gupta" title="SDE-Samsung*" />
          <ExTeam photo={banyal} name="Vinumar Banyal" title="NIT-Hamirpur" />
          <ExTeam photo={vivek} name="Vivek Singh" title="Social Activist" />
          <ExTeam photo={ishita} name="Ishita Bhatia" />
          <ExTeam photo={ashok} name="Ashok Gupta" />
          <ExTeam photo={dolly} name="Dolly Razora" title=" " />
        </Carousel>
      </div>
      <h1>Intern Team</h1>
      <div class="row">
        <Carousel class="row" responsive={responsive}>
          <ExTeam name="Manish Birthlia" title="Team Leader & Web Developer, NIT hamirpur" />
          <ExTeam name="Sidhant Sadyal" title="Web Developer, NIT hamirpur" />
          <ExTeam name="Sunil Goyal" title="Video Editor & Web Developer" />
          <ExTeam name="Sourabh Awasthy" title="Web Developer, NIT hamirpur" />
        </Carousel>
      </div>
    </div>
  );
}
export default Team;
