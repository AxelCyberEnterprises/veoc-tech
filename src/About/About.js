import React from 'react'
import "./About.css"
import about from "../img/about.png"
import goals from "../img/goals.png"
import expertise from "../img/Expert-analysis.png"
import statistics from "../img/Statistics.png"
import retail from "../img/retail-execution.png"

export default function About() {
  return (
    <div className='about__container'>
      <div className="about__container-top_nav">
        <div className='about__container-top_nav-links'>
          <h3>Home</h3>
          <h3>About us</h3>
          <h3>Corporate</h3>
          <h3>Services</h3>
          <h3>Portfolio</h3>
          <h3>Careers</h3>
        </div>
        <div className='about__container-top_nav-button'>
          <button>Get a quote</button>
        </div>
      </div>  

      {/* approach */}
      <div className='about__container-approach'>
        <h1>A <span>novel approach</span> to client satisfaction</h1>
        <img src={about} alt="about-img" />
      </div>
      
      {/* strategy */}
      <div className='about__container-strategy'>
        <div className='about__container-strategy_tile-1'>
          <h2>Our <span>strategy</span></h2>
          <p>
            At Veoc tech. our cross-sectional teams collaborate to
            craft top-notch digital products that align with our
            client's business goals within planned timelines. 
            We have successfully collaborated with in-house
            product teams at various companies and delivered
            exceptional results.
          </p>
        </div>
        <div className='about__container-strategy_tile-2'>
          <h2>Our mission</h2>
          <p>
            At Veoc tech. our cross-sectional teams collaborate to
            craft top-notch digital products that align with our
            client's business goals within planned timelines. 
            We have successfully collaborated with in-house
            product teams at various companies and delivered
            exceptional results.
          </p>
        </div>
        <div className='about__container-strategy_tile-3'>
          <h2>Our <span>vision</span></h2>
          <p>
            At Veoc tech. our cross-sectional teams collaborate to
            craft top-notch digital products that align with our
            client's business goals within planned timelines. 
            We have successfully collaborated with in-house
            product teams at various companies and delivered
            exceptional results.
          </p>
        </div>
      </div>

      {/* vision */}
      <div className='about__container-vision'>
        <div className='about__container-vision_top'>
          <h1>Find your vision and goals align with ours?</h1>
        </div>
        <div className='about__container-vision_bottom'>
          <img src={goals} alt="visions-and-goals-img"/>
          <p>
            Over the years, VEOC Technologies Ltd. has been a visionary 
            company providing a variety of websites for top clients and
            organizations. The company is also a reliable engineering 
            partner for world-class brands. <br/>
            Our recent partnership with Axel Cyber Enterprises has
            shown our commitment level towards becoming the top
            providers of IT services worldwide.
          </p>
        </div>
      </div>

      {/* bulletin section */}
      <div className='about__container-bulletin'>
        <div className='about__container-bulletin_tile-1'>
          <img src={expertise} alt="expertise-img"/>
          <h3>Expertise</h3>
        </div>
        <div className='about__container-bulletin_tile-2'>
          <img src={retail} alt="expertise-img"/>
          <h3>Timely execution</h3>
        </div>
        <div className='about__container-bulletin_tile-3'>
          <img src={statistics} alt="expertise-img"/>
          <h3>Result-driven</h3>
        </div>
      </div>

      {/* footer */}
      <div className="about__container-footer_container">
        <div className='about__container-footer'> 
          <div className='about__container-footer_tile-1'>
            <h3>Veoc tech</h3>
            <p>12, Ransome-Allen road,<br/> Ikoyi, <br/> Lagos.</p>
            <small>Phone: +234 740 514 1694</small>
            <small>Email: support@veoctech.co.uk</small>
          </div>
          <div className='about__container-footer_tile-2'>
            <h3>Useful Links</h3>
            <small> <span>{">"}</span> Home </small>
            <small> <span>{">"}</span> About Us</small>
            <small> <span>{">"}</span> Services</small>
          </div>
          <div className='about__container-footer_tile-3'>
            <h3>Our Services</h3>
            <small> <span>{">"}</span> Product/web design </small>
            <small> <span>{">"}</span> Data Analysis</small>
            <small> <span>{">"}</span> Software engineering</small>
            <small> <span>{">"}</span> Video editing</small>
          </div>
          <div className='about__container-footer_tile-4'>
            <h3>Others</h3>
            <small> <span>{">"}</span> Careers</small>
            <small> <span>{">"}</span> Corporate</small>
            <small> <span>{">"}</span> Portolio</small>
          </div>
        </div>
      </div>
    </div>
  )
}
