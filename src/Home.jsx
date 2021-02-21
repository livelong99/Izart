import './App.css';
import './App1.css';
import React, {useEffect, useRef, useState} from 'react';
import Typical from "react-typical";
import NavigationBar from "./navigationBar.jsx"
import ThreeC from "./threeC";
import OurWork from "./ourWork";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import dimensions from "./Dimensions";

const Home = () => {
  let navRef = useRef(null);
  let bookBtn = useRef(null);
  let oneRef = useRef(null);
  let navCenterRef = useRef(null);
  const {width} = dimensions();

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom >= 0 &&
        rect.right >= 0
    );
  }

// useEffect(() => {
//   var prevScrollpos = window.pageYOffset;
//   window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos || isInViewport(oneRef.current)) {
//       navRef.style.top = "0";
//     } else {
//       navRef.style.top = "-10vh";
//     }
//     prevScrollpos = currentScrollPos;
//   }

// });

  return (
    <div>
      <div class="land">
        <div ref={oneRef} class="section01">
          <div class="mainTxt">
          <div class="headone">
            <Typical
              steps={[500, 'Home of Data Driven Storytellers.', 1000]}
              loop={1}
              wrapper="p"
            />
          </div>
          <div data-aos="fade-zoom-out" data-aos-delay="2500" data-aos-offset="50" data-aos-duration="500" class="subhead">
            <p>We scale up business’s revenues by writing content that sells.</p>
          </div>
          
          <div class="extra"></div>
          </div>

          <div class="mainIll"><img src="Images/homeS.svg" /></div>
          {/* <div class="buttons">
            <a href="#"><div data-aos="fade-zoon-out" data-aos-delay="3000" dat-aos-offset="100" data-aos-duration="1000" class="leftB"><div class="btnText">Let's Talk</div></div></a>
            <a href="#"><div data-aos="fade-zoon-out" data-aos-delay="3000" dat-aos-offset="10  0" data-aos-duration="1000" class="rightB"><div  class="btnText">Let's Start</div></div></a>
          </div> */}
        </div>
        </div>
        <div class="section02H1">
          <p>Our Service Types</p>
        </div>
        <div class="section02">
          <div class="service">
          {width<1025 ? <div class="illus"><img src="Images/ser-1.svg" /></div>: null}
            <div class="content">
              <div class="head"><p>Content Omnipotent</p></div>
              <div class="sub-head"><p>For those who want to start from scratch.</p></div>
              <div class="body"><p>We’ll kickstart your content marketing by creating detailed buyer personas, curating a data driven content strategy, and creating content that drives in increased revenues. </p></div>
              <a href="#"><div class="more"><div class="btnText">learn more</div></div></a>
            </div>
            {width>=1025 ? <div class="illus"><img src="Images/ser-1.svg" /></div>: null}
          </div>
          <div class="service">
            <div class="illus"><img class="left" src="Images/ser-2.svg" /></div>
            <div class="content">
              <div class="head al-right"><p>Residential Wordsmith</p></div>
              <div class="sub-head al-right"><p>When you have your content strategy and you just need an executioner.</p></div>
              <div class="body al-right"><p>There is no one better than the handpicked writers of Izart, to bring your vision to light. Use our internal resources for all your content creation needs.</p></div>
              <a href="#"><div class="more bt-right"><div class="btnText">learn more</div></div></a>
            </div>
          </div>
          <div class="service">
              {width<1025 ? <div class="illus"><img src="Images/ser-3.svg" /></div>: null}
            <div class="content">
              <div class="head"><p>No strings attached </p></div>
              <div class="sub-head"><p>For all your immediate content requirements.</p></div>
              <div class="body"><p>Our team of writers can deliver high quality content deliverables at scale without any long term commitment. </p></div>
              <a href="#"><div class="more"><div class="btnText">learn more</div></div></a>
            </div>
            {width>=1025 ? <div class="illus"><img src="Images/ser-3.svg" /></div>: null}
          </div>
        </div>
        <ThreeC />
        <Testimonials />
        <OurWork />
    </div>
  );
}

export default Home;