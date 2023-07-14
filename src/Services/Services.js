import react from "react"
import "./Services.css"
import Navbar from "../Components/Navbar/Topnav"
import Newsletter from "../Components/Newsletter/Newsletter"
import Footer from "../Components/Footer/Footing"
import codes from "../img/codes.png"
import product2 from "../img/product2.png"
import softwares from "../img/SEO.png"
import videos from "../img/VEO.png"




function Services (props) {
  return (
    <div className="services__container">
      <Navbar />
      <div className="services__container-dnd">
        <div className="services__container-dnd_top">
          <h1>Web <span>Design</span> & <span>Development</span></h1>
        </div>
        <div className="services__container-dnd_bottom">
          <img src={codes} alt="codes-img" />
          <p>
            Web design should be human-centered, compelling and adaptable. It is concerned
            with the aesthetics and look of a website. It includes the use of visual elements
            such as typography, images, iconography and colors to create an appealing and
            user-friendly interface.<br/>
            At Veoc. Tech, we visualize beyond being another web design and development
            service provision company. We believe  your website is a natural extension of 
            your brand’s story that sets the tone for your online presence.
          </p>
        </div>
      </div>
      {/* product-design */}
      <div className="services__container-product_design"> 
        <h1>Product design</h1>
        <img src={product2}  alt="product-img"/>
      </div>
      {/* software engineering */}
      <div className="services__container-software_engineering">
        <div className="services__container-software_engineering-top">
          <h1>Software Engineering</h1>
        </div>
        <div className="services__container-software_engineering-bottom">
          <img src={softwares} alt="software-engineering-img"/>
          <p>
            Software engineers apply engineering principles and practices to develop software solutions that meet specific user requirements and address complex user problems.
            Our team has highly skilled software engineers who are proficient in aspects of software engineering such as software quality assurance, software testing, and
            software maintenance.<br />
            The team is skilled in software such as Git, Jira, Trello, and Stack overflow.
          </p>
        </div>
      </div>

      {/* video editing */}
      <div className="services__container-video_editing">
        <div className="services__container-video_editing-top">
          <h1>Video editing</h1>
        </div>
        <div className="services__container-video_editing-bottom">
          <img src={videos} alt="video-editing-img" />
          <p>
            Video editing is the process of manipulating and rearranging video shots and clips to
            create a final edited video. It involves cutting and trimming, adding transitions &
            effects, adjusting audio levels, and incorporating graphics or text.<br />
            Veoc Tech. has a team of professionals with over 4 years of experience providing 
            video editing services for freelance clients. The team is highly proficient in Adobe 
            Premiere Pro, Final Cut Pro X, iMovie, and Lightworks.
          </p>
        </div>
      </div>
      <Newsletter />
      <Footer blue={true}/>
    </div>
  )
}

export default Services 