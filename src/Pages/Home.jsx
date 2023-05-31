import React from "react";
import Mainsection from "../React Components/Main/Main_section";
import Initiative from "../React Components/Initiative/Initiative";
import Mission from "../React Components/Mission/Mission";
import Media from "../React Components/MediaSec/Media";
import Testimonial from "../React Components/Testimonial/Testimonial";
import Supporters from "../React Components/Support/Support";

function Home() {
  return (
    <div id="/">
      <Mainsection />
      <Mission />
      <Initiative />
      <Media />
      <Testimonial />
      <Supporters />
    </div>
  );
}

export default Home;
