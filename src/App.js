import React from "react";
import Navbar from "./React Components/Navbar/Navbar";
import Gallery from "./React Components/Gallery/Gallery";
import Contact from "./Pages/Contact/Contact";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
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
  );
}

export default App;
