import react from "react"
import "./Footing.css"


function Footing(props) {
  return (
    <div className='footing__container'> 
      <div className={props.blue? 'footing__container-tile_1' : 'footing__container-tile_1-blue'}>
        <h3>Veoc tech</h3>
        <p>12, Ransome-Allen road,<br/> Ikoyi, <br/> Lagos.</p>
        <small>Phone: +234 740 514 1694</small>
        <small>Email: support@veoctech.co.uk</small>
      </div>
      <div className={props.blue? "footing__container-tile_2": "footing__container-tile_2-blue"}>
        <h3>Useful Links</h3>
        <small> <span>{"> "}</span>  Home </small>
        <small> <span>{"> "}</span> About Us</small>
        <small> <span>{"> "}</span> Services</small>
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
        <small> <span>{"> "}</span> Careers</small>
        <small> <span>{"> "}</span> Corporate</small>
        <small> <span>{"> "}</span> Portolio</small>
      </div>
    </div>
  )
}


export default Footing