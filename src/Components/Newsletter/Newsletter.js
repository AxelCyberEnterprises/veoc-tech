import react from "react"
import "./Newsletter.css"


function Newsletter() {
  return (
    <div>
      <div className='newsletter__container'>
        <div className='newsletter__container-top'>
          <h2>Subscribe to our newsletter</h2>
          <h4>All your information is completely confidential</h4>
        </div>
        <div className="newsletter__container-bottom">
          <input placeholder='Email'></input>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter