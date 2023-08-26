import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./React Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Team from "./React Components/Team/Team";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Contact from "./Pages/Contact/Contact";
import PrivacyPolicy from "./Pages/legal/privacyPolicy";
import Refund from "./Pages/legal/Refund";
import Terms from "./Pages/legal/Terms";
import Footer from "./React Components/Footer/Footer";
import NotFound from "./Pages/NotFound";
import Signin from "./React Components/SignIn";
import Login from "./React Components/Login";
import {useStorage} from "./React Components/ContextProvider";
import "./App.css";

function App() {
  const {user,UserPresent,signIn}=useStorage();
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/gallery" element={<Gallery />}/> */}
          <Route path="/AboutUs" element={<AboutUs />}/>
          <Route path="/Team" element={<Team />}/>
          <Route path="/privacyPolicy" element={<PrivacyPolicy />}/>
          <Route path="/Refund" element={<Refund />}/>
          <Route path="/Terms" element={<Terms />}/>
          {!UserPresent && <Route path="/signUp" element={ <Signin /> }/>}
          {!UserPresent && <Route path="/logIn" element={ <Login /> }/>}
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
      </div>{" "}
    </BrowserRouter>
  );
}

export default App;
