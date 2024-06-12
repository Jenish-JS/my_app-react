import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login";
import Signup from "../Signup";
import Home from "../Home";
import OutLets from "../outlet/OutLets";
import About from "../About";
import Services from "../Services";
import Contact from "../Contact";
import Error from "../Error";
import A from "../A";
import A4 from "../A4";
// import Notes from "../../notes";
// import Getdata from "../../Getdata";

function Navigations() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signUp" element={<Signup />}></Route>
          <Route path="/" element={<Signup />}></Route>
          {/* <Route path="/getdata/:id" element = {<Getdata />}></Route> */}

          <Route element={<OutLets />}> 
            <Route index element={<Home />}></Route>
            {/* <Route path="/logIn" element={<Login />}></Route> */}
            {/* <Route path="/logIn/:num" element={<Home />}></Route> */}
            <Route path="/logIn/123" element={<Login />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/about/" element={<About />}></Route>
            {/* <Route path="/notes/" element = {<Notes/>}></Route> */}
            
          </Route>
          <Route path="*" element={<Error/>}></Route>
          <Route path="/A-S/" element={<A />}></Route>
          <Route path="/A4/" element={<A4 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Navigations;