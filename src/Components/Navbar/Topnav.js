import react from "react"
import "./Topnav.css"


function Topnav() {
  return (
    <div className="topnav__container">
      <div className='topnav__container-links'>
        <h3>Home</h3>
        <h3>About us</h3>
        <h3>Corporate</h3>
        <h3>Services</h3>
        <h3>Portfolio</h3>
        <h3>Careers</h3>
      </div>
      <div className='topnav__container-button'>
        <button>Get a quote</button>
      </div>
    </div>  
    
  )
}


export default Topnav