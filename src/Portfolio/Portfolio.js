import react from "react"
import "./Portfolio.css"
import Navbar from "../Components/Navbar/Topnav"
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footing"
import code from "../../src/img/code.png"
import port1 from "../../src/img/port1.png"
import port2 from "../../src/img/port2.png"
import port3 from "../../src/img/port3.png"
import port4 from "../../src/img/port4.png"
import port5 from "../../src/img/port5.png"
import port6 from "../../src/img/port6.png"



function Portfolio(props) {
  return(
    <div className="portfolio__container">
      <Navbar />
      <div className="portfolio__container-hero_section">
        <h1>Interested in working with us? check out some of our projects</h1>
        <p>
          View some projects from our web design/development portfolio for your perusal.
        </p>
        <img src={code} alt="code-img"/>
      </div>
      <div className="portfolio__container-body_section">
        <img src={port1} alt="portfolio-img-1" />
        <img src={port2} alt="portfolio-img-2" />
        <img src={port3} alt="portfolio-img-3" />
      </div>
      <div className="portfolio__container-body_section-1">
        <img src={port4} alt="portfolio-img-4" />
        <img src={port5} alt="portfolio-img-5" />
        <img src={port6} alt="portfolio-img-6" />
      </div>
      <Newsletter />
      <Footer blue={true} />
    </div>
  )
}


export default Portfolio