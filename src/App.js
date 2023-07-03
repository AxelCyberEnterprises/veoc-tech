import React from "react"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Landing_page/Home"
import About from "./About/About"
import Contact from "./Contact/Contact"




function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App