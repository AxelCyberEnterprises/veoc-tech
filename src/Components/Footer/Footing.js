import react from "react"
import "./Footing.css"


function Footing() {
  return (
    <div className='footing__container'> 
      <div className='footing__container-tile_1'>
        <h3>Veoc tech</h3>
        <p>12, Ransome-Allen road,<br/> Ikoyi, <br/> Lagos.</p>
        <small>Phone: +234 740 514 1694</small>
        <small>Email: support@veoctech.co.uk</small>
      </div>
      <div className='footing__container-tile_2'>
        <h3>Useful Links</h3>
        <small> {"> "} Home </small>
        <small> {"> "} About Us</small>
        <small> {"> "} Services</small>
      </div>
      <div className='footing__container-tile_3'>
        <h3>Our Services</h3>
        <small> {"> "} Product/web design </small>
        <small> {"> "} Data Analysis</small>
        <small> {"> "} Software engineering</small>
        <small> {"> "} Video editing</small>
      </div>
      <div className='footing__container-tile_4'>
        <h3>Others</h3>
        <small> {"> "} Careers</small>
        <small> {"> "} Corporate</small>
        <small> {"> "} Portolio</small>
      </div>
    </div>
  )
}


export default Footing