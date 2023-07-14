import react from "react"
import {Link} from "react-router-dom"
import "./Footing.css"


function Footing(props) {
  return (
    <div className= {props.blue ? 'footing__container': "footing__container-blue"} > 
      <div className={props.blue? 'footing__container-tile_1' : 'footing__container-tile_1-blue'}>
        <h3>Veoc tech</h3>
        <p>12, Ransome-Allen road,<br/> Ikoyi, <br/> Lagos.</p>
        <small>Phone: +234 740 514 1694</small>
        <small>Email: support@veoctech.co.uk</small>
      </div>
      <div className={props.blue? "footing__container-tile_2": "footing__container-tile_2-blue"}>
        <h3>Useful Links</h3>
        <small> <span>{"> "}</span> <Link to="/" className={props.blue? "foot-link": "foot-link-blue"}>Home</Link>  </small>
        <small> <span>{"> "}</span> <Link to="/About" className={props.blue? "foot-link": "foot-link-blue"}>About Us</Link></small>
        <small> <span>{"> "}</span> <Link to="/Services" className={props.blue? "foot-link": "foot-link-blue"}>Services</Link></small>
      </div>
      <div className={props.blue? "footing__container-tile_3": "footing__container-tile_3-blue"}>
        <h3>Our Services</h3>
        <small> <span>{"> "}</span> Product/web design </small>
        <small> <span>{"> "}</span> Data Analysis</small>
        <small> <span>{"> "}</span> Software engineering</small>
        <small> <span>{"> "}</span> Video editing</small>
      </div>
      <div className={props.blue? "footing__container-tile_4": "footing__container-tile_4-blue"}>
        <h3>Others</h3>
        <small> <span>{"> "}</span> <Link to="/Contact" className={props.blue? "foot-link": "foot-link-blue"}>Contact</Link></small>
        <small> <span>{"> "}</span> <Link to="/Corporate" className={props.blue? "foot-link": "foot-link-blue"}>Corporate</Link> </small>
        <small> <span>{"> "}</span> <Link to="/Portfolio" className={props.blue? "foot-link": "foot-link-blue"}>Portfolio</Link> </small>
      </div>
    </div>
  )
}


export default Footing