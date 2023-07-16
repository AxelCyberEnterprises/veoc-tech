import react, {useState} from "react"
import VTS from "../../img/VTS.png"
import hamburger from "../../img/hambuger.png"
import {NavLink, Link} from "react-router-dom"
import "./Topnav.css"


function Topnav(props) {
  const [trigger, setTrigger] = useState(false);

  const handleClick = () => {
    setTrigger(!trigger)
  } 

  return (
    <div className={props.blue? "topnav__container-blue": "topnav__container" }>
      <div className="topnav__container-left">
        <img src={VTS} alt="logo.png" />
      </div>
      <div className="topnav__container-right">
        <div className={props.blue? 'topnav__container-links-blue' : 'topnav__container-links'}>
          <NavLink exact to="/" className="custom-link">Home</NavLink>
          <NavLink to="/About" className="custom-link">About us</NavLink>
          <NavLink to="/Corporate" className="custom-link">Corporate</NavLink>
          <NavLink to="/Services" className="custom-link">Services</NavLink>
          <NavLink to="/Portfolio" className="custom-link">Portfolio</NavLink>
          <NavLink to="/" className="custom-link">Contact</NavLink>
        </div>
        <div className='topnav__container-button'>
          <button>Get a quote</button>
        </div>
      </div>
      <div className="topnav__container-ham">
        <div onClick={handleClick} className="topnav__container-hambuger"> 
          <img src={hamburger} alt="hambuger-img"/>
        </div>
        <div className="topnav__container-hambuger_links">
         {trigger && (
            <ul className="topnav__container-hambuger_links-container">
              <li><Link className="ham-link" to="/">Home</Link></li>
              <li><Link className="ham-link" to="/About">About us</Link></li>
              <li><Link className="ham-link" to="/Corporate">Corporate</Link></li>
              <li><Link className="ham-link" to="/Services">Services</Link></li>
              <li><Link className="ham-link" to="/Portfolio">Portfolio</Link></li>
              <li><Link className="ham-link" to="/">Contact</Link></li>
          </ul>
         ) } 
        </div>
      </div>

    </div>  
    
  )
}


export default Topnav