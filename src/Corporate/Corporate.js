import React from 'react'
import "./Corporate.css"
import Navbar from "../Components/Navbar/Topnav"
import Footer from "../Components/Footer/Footing"
import iphone from "../img/iphone.png"
import data from "../img/data.png"
import videoediting from "../img/editing.png"
import blockchain from "../img/blockchain.png"
import guitar from "../img/guitar.png"
import macbook from "../img/macbook.png"



function Corporate() {
  return (
    <div className='corporate__container'>
      <Navbar />
      <div className='corporate__container-hero_section'>
        <div className='corporate__container-hero_section-texts'>
          <h1>Simple solutions to complex needs</h1>
          <p>
            Our solutions to our clients‘ complex needs are approached
            using various methods. These methods however different 
            are simple enough to be understood by our clients.
          </p>
        </div>
        <div className='corporate__container-hero_section-image'>
          <img src={iphone} alt="iphone-img" />
        </div>
      </div>
      <div className='corporate__container-data_section'>
        <div className='corporate__container-data_section-top'>
          <h1>Database management and <span>data analytics</span></h1>
        </div>
        <div className='corporate__container-data_section-bottom'>
          <img src={data} alt="data-img"/>
          <p>
            Our database management and data analytics team consists of 
            highly skilled data professionals who have a flare for data and
            work to deliver client needs. <br />
            The team is highly skilled in software such as SQL, Amazon RDS, 
            Razor SQL, Microsoft Access, Microsoft Excel, Python, Tableau,
            and R.
          </p>
        </div>
      </div>
      <div className='corporate__container-editing'>
        <h1>Explore what makes our video editing process <span>unique</span></h1>
        <img src={videoediting} alt="videoediting-img"/>
      </div>

      {/* blog section */}

      <div className='corporate__container-blog_section'>
        <div className='corporate__container-blog_section-top'>
          <h1>Our latest blog posts</h1>
        </div>
        <div className='corporate__container-blog_section-bottom'>
          <div className='corporate__container-blog_section-bottom_tile'>
            <img src={blockchain} alt="blockchain-img"/>
            <h3>The Blockchain: demystification</h3>
          </div>
          <div className='corporate__container-blog_section-bottom_tile'>
            <img src={macbook} alt="macbook-img"/>
            <h3>The Blockchain: demystification</h3>
          </div>
          <div className='corporate__container-blog_section-bottom_tile'>
            <img src={guitar} alt="guitars-img"/>
            <h3>The Blockchain: demystification</h3>
          </div>
        </div>
      </div>
      <div className='corporate__container-footer_section'>
        <Footer />
      </div>
    </div>
  )
}


export default Corporate 