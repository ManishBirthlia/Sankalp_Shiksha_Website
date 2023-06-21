import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./React Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Team from "./React Components/Team/Team";
import WhatWeDo from "./Pages/What We Do/Whatwedo";
import Gallery from "./React Components/Gallery/Gallery";
import Contact from "./Pages/Contact/Contact";
import Footer from "./React Components/Footer/Footer";
import NotFound from "./Pages/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/WhatWeDo" element={<WhatWeDo />}/>
          <Route path="/Team" element={<Team />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
      </div>{" "}
    </BrowserRouter>
  );
}

export default App;
