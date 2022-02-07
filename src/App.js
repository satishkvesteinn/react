import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path="/" element ={<Home />}/>
      <Route path="/about" element ={<About />}/>
      <Route path="/contact" element ={<Contact />}/>
      <Route path="/service" element ={<Service />}/>
      {/* <Redirect to="/" /> */}
    </Routes>
    <Footer />
    </>
  );
}

export default App;
