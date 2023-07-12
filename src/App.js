import React from "react"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Landing_page/Home"
import About from "./About/About"
import Contact from "./Contact/Contact"
import Services from "./Services/Services"
import Portfolio from "./Portfolio/Portfolio"
import Corporate from "./Corporate/Corporate"




function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Corporate" element={<Corporate />} />
      </Routes>
    </Router>
  )
}

export default App