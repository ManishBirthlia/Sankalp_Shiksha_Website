import React from "react";
import T from "./TeamSample";
// import ExTeam from "./ExTeam";
import "./team.css";
import Manish from "./Manish.jpg";
import Sunil from "./Sunil.jpg";
import Sidhant from "./Sidhant.jpg";
import vikas from "./Screenshot (119).png";
import ansari from "./Screenshot (118).png";
import sourabh from "./Screenshot (120).png";
import abhishek from "./Screenshot (121).png";
import aakash from "./Screenshot (122).png";
import satyam from "./Screenshot (123).png";
import Amit from "./executive/Amit Jaiswal.jpg";
import Anshu from "./executive/Anshu Yadav.jpg";
import Ranjan from "./executive/Ranjan Kumar.jpg";
import Simran from "./executive/Simran Patel.png";
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
    <div className="container Team" style={{ textAlign: "center" }}>
      <h1>Our Team</h1>
      <h3>Core Team</h3>
      <div className="row">
        <T photo={sourabh}
          name="Saurabh kumar sharma"
          title="CEO, GSVM medical college Kanpur"
        />
        <T photo={vikas} name="Vikas kumar" title="CEO, NIT hamirpur" />
        <T photo={ansari}
          name="Allaudin ansari"
          title="Director, (BRD medical college, gorakhpur)"
        />
        <T photo={abhishek}
          name="Abhishek kumar "
          title="Communication head, NIT "
        />
        <T photo={aakash}
          name="Aakash kumar "
          title="Research head, NIT hamirpur"
        />
        <T photo={satyam}
          name="Satyam tripathi"
          title="Media Co-Ordinator, NIT hamirpur"
        />
      </div>
      
      <h3>Executive Members</h3>
      <div className="row">
        <T photo={Amit}
          name="Amit Jaiswal"
          title="project assistant Sankalp Shiksha"
        />
        <T photo={Simran} name="Simran Patel" title="project assistant Sankalp Shiksha" />
        <T photo={Anshu}
            name="Anshu Yadav"
            title="project assistant Sankalp Shiksha"
        />
        <T photo={Ranjan}
            name="Ranjan Kumar"
            title="project assistant Sankalp Shiksha"
        />
      </div>
      <h3>Mentors</h3>
      <div className="row">
        <T photo={aditya} name="Aditya Kumar" title="SDE-Facebook" />
        <T photo={kaushar} name="Sahil kaushar" title="Director NCF" />
        <T photo={rao} name="Sumit Rao" title="SDE-Samsung" />
        <T photo={singh}
            name="Surjeet Singh"
            title="SDO-Electricity Dept." />
        <T photo={mahajan}
            name="Siddarth Mahajan"
            title="Er.-Maruti Suzuki" />
        <T photo={kumar}
            name="Abhishek Kumar "
            title="PHD,IIT Kharagpur" />
        <T photo={bhusan}
            name="Shashi Bhusan"
            title="Gate AIR-7,PHD-IITM" />
        <T photo={swati} name="Swati" title="SDE-Samsung" />
        <T photo={mukund}
            name="Mukund Agarwal"
            title="SDE-Urban Company" />
        <T photo={bissa} name="Priyanka Bissa" title="Social Activist" />
        <T photo={ujjawal} name="Ujjawal Gupta" title="SDE-Samsung*" />
        <T photo={banyal} name="Vinumar Banyal" title="NIT-Hamirpur" />
        <T photo={vivek} name="Vivek Singh" title="Social Activist" />
        <T photo={ishita} name="Ishita Bhatia" />
        <T photo={ashok} name="Ashok Gupta" />
        <T photo={dolly} name="Dolly Razora" title=" " />
      </div>
      <h3>Intern Team</h3>
      <div className="row">
          <T photo={Manish} name="Manish Birthlia" title="Team Leader & Web Developer, NIT hamirpur" />
          <T photo={Sunil} name="Sunil Goyal" title="Video Editor & Web Developer" />
          <T photo={Sidhant} name="Sidhant Sadyal" title="Web Developer, NIT hamirpur" />
          <T name="Sourabh Awasthy" title="Web Developer, NIT hamirpur" />
      </div>
    </div>
  );
}
export default Team;