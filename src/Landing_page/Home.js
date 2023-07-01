import React from 'react'
import img1 from "../img/image1.png"
import img2 from "../img/image2.png"
import webdesign from "../img/webdesign.png"
import dataanalysis from "../img/dataanalysis.png"
import softwareeng from "../img/softwareeng.png"
import videoedit from "../img/videoedit.png"
import productimg from "../img/product.png"
import teamworkimg from "../img/teamwork.png"
import learning from "../img/learning.png"
import "./Home.css"

function Home() {
  return (
    <div className='home__container'>
      <div className='home__container-header_part'>

        <div className="home__container-header_part-top_nav">
          <div className='home__container-header_part-top_nav-text'>
            <h3>Home</h3>
            <h3>About us</h3>
            <h3>Corporate</h3>
            <h3>Services</h3>
            <h3>Portfolio</h3>
            <h3>Careers</h3>
          </div>
          <div className='home__container-header_part-top_nav-button'>
            <button>Get a quote</button>
          </div>
        </div>
        <div className='home__container-header_part-content'>
          <div className='home__container-header_part-content_text'>
            <h2>Leading Information Technology company</h2>
            <p>
              The best digital technology company that any business
              would require for cutting-edge solutions.<br />
              Begin your journey to exceptional results by making the
              decision to work with Veoc Tech.
            </p>
            <button>Get started</button>
          </div>
          <div className='home__container-header_part-content_image'>
            <img src={img1} alt="first-img" />
          </div>
        </div>
      </div>
      {/* Focused-on */}
      <div className='home__container-focused_on'>
        <div className="home__container-focused_on-top">
          <h1>A creative digital company <span>focused on</span> growing brands</h1>
        </div>
        <div className='home__container-focused_on-bottom'>
          <img src={img2 } alt="second-img"/>
          <p>
            Over the years, VEOC Technologies Ltd. has been a visionary 
            company providing a variety of websites for top clients and
            organizations. The company is also a reliable engineering 
            partner for world-class brands.
            We have collaborated with several local and international 
            brands, private, and government organizations to provide
            a variety of digital solutions.
          </p>
        </div>
      </div>


      {/* Explore-creatives */}
      <div className="home__container-explore_creatives">
        <div className='home__container-explore_creatives-top'>
          <h2><span>Explore</span> our creative services</h2>
        </div>
        <div className='home__container-explore_creatives-bottom'>
          <div className='home__container-explore_creatives-bottom_1'>
            <img src={webdesign} alt="third-img" />
            <p>Product/web design</p>
          </div>
          <div className='home__container-explore_creatives-bottom_2'>
            <img src={dataanalysis} alt="fourth-img" />
            <p>Data Analysis</p>
          </div>
          <div className='home__container-explore_creatives-bottom_3'>
            <img src={softwareeng} alt="fifth-img" />
            <p>Software Engineering</p>
          </div>
          <div className='home__container-explore_creatives-bottom_4'>
            <img src={videoedit} alt="sixth-img" />
            <p>Video editing</p>
          </div>
        </div>
      </div>

      {/* Satisfied clients */}
      <div className='home__container-satisfied_clients'>
        <div className='home__container-satisfied_clients-top'>
          <h2>Join our satisfied clients worldwide</h2>
        </div>
        <div className='home__container-satisfied_clients-bottom'>
          <div className='home__container-satisfied_clients-bottom_tile'>
            <p>10</p>
            <h4>Countries served</h4>
          </div>
          <div className='home__container-satisfied_clients-bottom_tile'>
            <p>100+</p>
            <h4>Projects completed</h4>
          </div>
          <div className='home__container-satisfied_clients-bottom_tile'>
            <p>30+</p>
            <h4>Support hours</h4>
          </div>
          <div className='home__container-satisfied_clients-bottom_tile'>
            <p>4</p>
            <h4>Worldwide partners</h4>
          </div>
        </div>
      </div>

      {/* products */}
      <div className='home__container-products'> 
        <div className='home__container-products_image'>
          <img src={ productimg } alt="product-img"/>
        </div>
        <div className='home__container-products_text'>
          <h2>Carefully crafted digital products</h2>
          <p>
            At Veoc tech. our cross-sectional teams collaborate to
            craft top-notch digital products that align with our
            client's business goals within planned timelines. 
            We have successfully collaborated with in-house
            product teams at various companies and delivered
            exceptional results.
          </p>
          <h4>Learn more</h4>
        </div>
      </div>

      {/* learning section */}
      <div className="home__container-learning_section">
        <h2><span>Learn</span> about software engineering process</h2>
        <img src={learning} alt="learning-img" />
      </div>

      {/* teamwork */}
      <div className='home__container-teamwork'>
        <div className='home__container-teamwork_top'>
          <h2>The <span>efficient</span> and <span>effective</span> team</h2>
          <p>
            We have the best team that employs a certain due
            process effectively. Our team is carefully sourced
            from a pool of the best diverse talent.
          </p>
        </div>
        <div className='home__container-teamwork_bottom'>
          <div className='home__container-teamwork_bottom-tile_1'>
            <h3>1. Project discovery call</h3>
            <p>
              We set up a brief meeting with prospective clients for
              general overview of the project.
            </p>
            <img src={teamworkimg} alt="teamwork-img" />
          </div>
          <div className='home__container-teamwork_bottom-tile_2'>
            <h3>2. Objectives description</h3>
            <p>
              Our client needs are properly outlined and described 
              in the objectives of the project.
            </p>
            <img src={teamworkimg} alt="teamwork-img" />
          </div>
          <div className='home__container-teamwork_bottom-tile_3'>
            <h3>3. Project process and completion</h3>
            <p>
              The project is executed following due process and in
              due time.
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter-section */}
      <div className='home__container-newsletter'>
        <div className='home__container-newsletter_top'>
          <h2>Subscribe to our newsletter</h2>
          <h4>All your information is completely confidential</h4>
        </div>
        <div className="home__container-newsletter_bottom">
          <input placeholder='Email'></input>
          <button>Subscribe</button>
        </div>
      </div>

      {/* Footer section */}
      <div className='home__container-footer'> 
        <div className='home__container-footer_tile-1'>
          <h3>Veoc tech</h3>
          <p>12, Ransome-Allen road,<br/> Ikoyi, <br/> Lagos.</p>
          <small>Phone: +234 740 514 1694</small>
          <small>Email: support@veoctech.co.uk</small>
        </div>
        <div className='home__container-footer_tile-2'>
          <h3>Useful Links</h3>
          <small> {"> "} Home </small>
          <small> {"> "} About Us</small>
          <small> {"> "} Services</small>
        </div>
        <div className='home__container-footer_tile-3'>
          <h3>Our Services</h3>
          <small> {"> "} Product/web design </small>
          <small> {"> "} Data Analysis</small>
          <small> {"> "} Software engineering</small>
          <small> {"> "} Video editing</small>
        </div>
        <div className='home__container-footer_tile-4'>
          <h3>Others</h3>
          <small> {"> "} Careers</small>
          <small> {"> "} Corporate</small>
          <small> {"> "} Portolio</small>
        </div>
      </div>
    </div>

  )
}



export default Home