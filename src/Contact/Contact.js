import react from "react"
import "./Contact.css"
import Topnav from "../Components/Navbar/Topnav"
import Footer from "../Components/Footer/Footing"
import download from "../img/Download.png"
import contactimg from "../img/contactimg.png"
import folder from "../img/folder.png"
import message from "../img/message.png"
import notification from "../img/notification.png"
import checkbox from "../img/checkbox.png";
import blockchain from "../img/blockchain.png"
import editing from "../img/editing.png"
import guitar from "../img/guitar.png"
import macbook from "../img/macbook.png"


function Contact() {
  return (
    <div className="contact__container">
      <Topnav />
      <div className="contact__container-get_in-touch">
        <h1>Get in touch and let us know how we can help</h1>
        <p>
          Veoc Tech. is always happy to hear from potential clients who want to become pacesetters in <br />  their various respective niches
        </p>
        <img src={contactimg} alt="contact-img"/>
      </div>
      <div className="contact__container-forms">
        <form className="contact__container-forms_left">
          <div className="contact__container-forms_left-top">
            <input type="text" placeholder="Your Name"></input>
            <input type="number" placeholder="Phone"></input>
          </div>
          <input type="email" placeholder="Email"></input>
          <textarea className="textarea" placeholder="Message"></textarea>
        </form>
        <div className="contact__container-forms_right">
          <div className="contact__container-forms_right-top">
            <h3>Location</h3>
            <p>12, Ransom Allen road Ikoyi, Lagos.</p>
          </div>
          <div className="contact__container-forms_right-bottom">
            <h3>Email</h3>
            <p>support@veoctech.co.uk</p>
          </div>
        </div>
      </div>
      <div className="contact-container-footer">
        <Footer /> 
      </div>
    </div>
  )
}


export default Contact