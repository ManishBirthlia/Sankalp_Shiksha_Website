import React from "react";
import Initiative from "./React Components/Initiative/Initiative";
import Testimonial from "./React Components/Testimonial/Testimonial";
import Navbar from "./React Components/Navbar/Navbar";
import Mainsection from "./React Components/Main/Main_section";
import Contact from "./React Components/Contact/Contact";
import Mission from "./React Components/Mission/Mission";

function App() {
  return (
    <div>
      <Navbar />
      <Mainsection />
      <Initiative />
      <Mission />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
