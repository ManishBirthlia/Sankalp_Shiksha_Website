import React, { useState } from "react";
import Navbar from "./React Components/Navbar/Navbar";
import Gallery from "./React Components/Gallery/Gallery";
import Mainsection from "./React Components/Main/Main_section";
import Initiative from "./React Components/Initiative/Initiative";
import Mission from "./React Components/Mission/Mission";
import Media from "./React Components/MediaSec/Media";
import Contact from "./React Components/Contact/Contact";
import Footer from "./React Components/Footer/Footer";
import Testimonial from "./React Components/Testimonial/Testimonial";
import Supporters from "./React Components/Support/Support";

function App() {
  const [value, setValue] = useState(true);
  return (
    <div>
      <Navbar isClick={setValue} />
      {value ? (
        <div>
          <Mainsection />
          <Mission />
          <Initiative />
          <Media />
          <Testimonial />
          <Supporters />
          <Contact />
        </div>
      ) : (
        <Gallery />
      )}
      <Footer />
    </div>
  );
}

export default App;
