import "./App.css";
import Navigation from "./Components/Navigation";
// import Hero from "./Components/Hero";
import Footer from "./Components/Footer.js";
import Home from "./Components/Pages/Home.js";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Drinks from "./Components/Pages/Drinks";
import Meals from "./Components/Pages/Meals";
import Contact from "./Components/Pages/Contact";

// TO-DO-LIST
//

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/drinks" element={<Drinks />}></Route>
        <Route path="/meals" element={<Meals />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
