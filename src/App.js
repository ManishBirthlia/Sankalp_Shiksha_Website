import React from "react";
import Initiative from "./React Components/Initiative/Initiative";
import Testimonial from "./React Components/Testimonial/Testimonial";
import Navbar from "./React Components/Navbar/Navbar";
import Mainsection from "./React Components/Main/Main_section";

function App() {
  return (
    <div>
      <Navbar />
      <Mainsection />
      <Initiative />
      <Testimonial />
    </div>
  );
}

export default App;
