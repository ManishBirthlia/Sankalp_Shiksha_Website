import React from "react";
import Navbar from "./React Components/Navbar/Navbar";
import Gallery from "./React Components/Gallery/Gallery";
<<<<<<< HEAD
import Contact from "./Pages/Contact/Contact";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
=======
import Mainsection from "./React Components/Main/Main_section";
import Initiative from "./React Components/Initiative/Initiative";
import Mission from "./React Components/Mission/Mission";
import Media from "./React Components/MediaSec/Media";
import Achievement from "./React Components/Achievements/Achievement";
import Contact from "./React Components/Contact/Contact";
import Footer from "./React Components/Footer/Footer";
import Team from "./React Components/Team/Team";
import Testimonial from "./React Components/Testimonial/Testimonial";
import Supporters from "./React Components/Support/Support";
>>>>>>> a328fddd0153a02eae73d44b83514387701eb06e

function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />}></Route>
        </Routes>
      </div>{" "}
    </BrowserRouter>
=======
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
      {/* <Achievement /> */}
      {/* <Team /> */}
      <Footer />
    </div>
>>>>>>> a328fddd0153a02eae73d44b83514387701eb06e
  );
}

export default App;
