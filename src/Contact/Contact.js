import react from "react"
import "./Contact.css"
import Topnav from "../Components/Navbar/Topnav"
import Footer from "../Components/Footer/Footing"
import download from "../img/Download.png"
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
      <div className="contact__container-hero">
        <div className="contact__container-hero_texts">
          <h1>Simple <span>solutions</span> to complex needs</h1>
          <p>
            Our solutions to our clients‘ complex needs are approached
            using various methods. These methods however different 
            are simple enough to be understood.
          </p>
          <button>Request demo</button>
        </div>
        <div className="contact__container-hero_guide">
          <div className="contact__container-hero_guide-container">
            <div className="contact__container-hero_guide-container_box-1">
              <h3>Style guide</h3>
              <p>
                The style guide created by Veoc Tech . for client X is part of the 
                steps being taken towards the client’s rebrand need.
              </p>
              <span>
                <img src={notification} alt="notification-img" />
                <p>3/5</p>
              </span>
              <span>
                <img src={message} alt="message-img" />
                <p>4</p>
              </span>
            </div>
            <div className="contact__container-hero_guide-container_box-2">
              <h3>File Attachments</h3>
              <div>
                <span>
                  <img src={folder} alt="folder-img" />
                  <p>User Interviews</p>
                </span>
                <img src={checkbox} alt="checkbox-img" />
              </div>
              <div>
                <span>
                  <img src={folder} alt="folder-img" />
                  <p>Usability testing</p>
                </span>
                <img src={download} alt="download-img" />
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* blog post section */}
      <div className="contact__container-blog">
        <div className="contact__container-blog_top">
          <h1>Our latest blog posts</h1>
        </div>
        <div className="contact__container-blog_bottom">
          <div className="contact__container-blog_bottom-tile">
            <img src={blockchain} alt="blockchain-img" />
            <h2>The Blockchain: demystification</h2>
          </div>
          <div className="contact__container-blog_bottom-tile">
            <img src={macbook} alt="macbook-img" />
            <h2>The new Macbook: key features</h2>
          </div>
          <div className="contact__container-blog_bottom-tile">
            <img src={guitar} alt="guitar-img" />
            <h2>The best guitars for harmony</h2>
          </div>
        </div>
      </div>

      {/* video editing section */}
      <div className="contact__container-editing">
        <h1>Explore what makes our video editing process <span>unique</span></h1>
        <img src={editing} alt="editing-img" />
      </div>
      <hr />
      <Footer /> 
    </div>
  )
}


export default Contact