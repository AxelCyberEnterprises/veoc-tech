import react from "react"
import VTS from "../../img/VTS.png"
import {NavLink} from "react-router-dom"
import "./Topnav.css"


function Topnav(props) {
  return (
    <div className={props.blue? "topnav__container-blue": "topnav__container" }>
      <div className="topnav__container-left">
        <img src={VTS} alt="logo.png" />
      </div>
      <div className="topnav__container-right">
        <div className={props.blue? 'topnav__container-links-blue' : 'topnav__container-links'}>
          <NavLink exact to="/" activeClassName="active" className="custom-link">Home</NavLink>
          <NavLink to="/About" activeClassName="active" className="custom-link">About us</NavLink>
          <NavLink to="/Corporate" activeClassName="active" className="custom-link">Corporate</NavLink>
          <NavLink to="/Services" activeClassName="active" className="custom-link">Services</NavLink>
          <NavLink to="/Portfolio" activeClassName="active" className="custom-link">Portfolio</NavLink>
          <NavLink to="/Contact" activeClassName="active" className="custom-link">Contact</NavLink>
        </div>
        <div className='topnav__container-button'>
          <button>Get a quote</button>
        </div>
      </div>
    </div>  
    
  )
}


export default Topnav