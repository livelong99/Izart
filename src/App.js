import './App.css';
import './App1.css';
import React, {useEffect, useRef, useState} from 'react';
import Typical from "react-typical";


function App() {
  let navRef = useRef(null);
  let bookBtn = useRef(null);
  let oneRef = useRef(null);
  let navCenterRef = useRef(null);

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom >= 0 &&
        rect.right >= 0
    );
  }

  function showBook() {
    return (<div class="btnText">Book a Call</div>);
  }

  function hideBook() {
    return ;
  }

useEffect(() => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos || isInViewport(oneRef.current)) {
      navRef.style.top = "0";
    } else {
      navRef.style.top = "-10vh";
    }
    prevScrollpos = currentScrollPos;
  }

});
 
  return (
    <div>
      <nav>
        <div data-aos="fade-down" data-aos-delay="3000" data-aos-duration="1000"  ref={el => {navRef = el}} class="navbar">
          <div class="navbarheader">izart
          </div>
          <div ref={navCenterRef} class="navbarcenter">
            <div class="link selected">Home</div>
            <div class="link">Services</div>
            <div class="link">Industries</div>
            <div class="link">Resources</div>
          </div>
          <div ref={bookBtn}  class="navbarright">
          <div class="btnText">Book a Call</div>
          </div> 
        </div>
        </nav>
        <div ref={oneRef} class="section01">
          <div class="headone">
            <Typical 
              steps={[1000, 'Home of Data Driven Storytellers.', 1000]}
              loop={Infinity}
              wrapper="p"            
            />
          </div>
          <div data-aos="fade-zoon-out" data-aos-delay="3000" data-aos-offset="50" data-aos-duration="1000" class="subhead">
            <p>We scale up business’s revenues by writing content that sells.</p>
          </div>
          <div class="buttons">
            <div data-aos="fade-zoon-out" data-aos-delay="3000" dat-aos-offset="100" data-aos-duration="1000" class="leftB"><div class="btnText">Let's Talk</div></div>
            <div data-aos="fade-zoon-out" data-aos-delay="3000" dat-aos-offset="10  0" data-aos-duration="1000" class="rightB"><div  class="btnText">Let's Start</div></div>
          </div>
        </div>
        <div class="section02H">
          <p>Our Service Types</p>
        </div>
        <div class="section02">
          <div class="service">
            <div class="content">
              <div class="head"><p>Content Omnipotent</p></div>
              <div class="sub-head"><p>For those who want to start from scratch.</p></div>
              <div class="body"><p>We’ll kickstart your content marketing by creating detailed buyer personas, curating a data driven content strategy, and creating content that drives in increased revenues. </p></div>
              <div class="more"><div class="btnText">learn more</div></div>
            </div>
            <div class="illus"><img src="Images/ser-1.svg" /></div>
          </div>
          <div class="service">
            <div class="illus"><img class="left" src="Images/ser-2.svg" /></div>
            <div class="content">
              <div class="head al-right"><p>Residential Wordsmith</p></div>
              <div class="sub-head al-right"><p>When you have your content strategy and you just need an executioner.</p></div>
              <div class="body al-right"><p>There is no one better than the handpicked writers of Izart, to bring your vision to light. Use our internal resources for all your content creation needs.</p></div>
              <div class="more bt-right"><div class="btnText">learn more</div></div>
            </div>
          </div>
          <div class="service">
            <div class="content">
              <div class="head"><p>No strings attached </p></div>
              <div class="sub-head"><p>For all your immediate content requirements.</p></div>
              <div class="body"><p>Our team of writers can deliver high quality content deliverables at scale without any long term commitment. </p></div>
              <div class="more"><div class="btnText">learn more</div></div>
            </div>
            <div class="illus"><img src="Images/ser-3.svg" /></div>
          </div>
        </div>
        <div class="section03">
          <div class="Box-l"><p data-aos="fade-right" data-aos-offset="50" data-aos-duration="1000">Our Work</p>  <svg data-aos="fade-right" data-aos-offset="50" data-aos-delay="1000" data-aos-duration="1000" preserveAspectRatio="none" viewBox="-5 -5 406 10" class="line2"><path d="M 0 0 L 396 0"  /></svg>  </div>
          <div data-aos-delay="1000" data-aos="fade-left" data-aos-offset="50" data-aos-duration="1000" className="Box-c white-bg"></div>
          <div data-aos-delay="1000" data-aos="fade-left" data-aos-offset="50" data-aos-duration="1000" className="Box-r white-bg"></div>
          <div data-aos-delay="1000" data-aos="fade-right" data-aos-offset="50" data-aos-duration="1000" className="Box-l white-bg"></div>
          <div data-aos-delay="1000" data-aos="fade-right" data-aos-offset="50" data-aos-duration="1000" className="Box-c white-bg"></div>
          <div className="Box-r"><div data-aos-delay="1000" data-aos="fade-left" data-aos-offset="0" data-aos-duration="1000" class="button-cont black-bg"><div class="btnText">see more</div></div></div>
        </div>
        {/* <div class="section21"></div>
        <div class="section22">
          <div class="whatW">What we do</div>
          <div class="content">
            <div class="box_typeA"></div>
            <div class="box_typeB" ></div>
            <div class="box_typeA"></div>
            <div class="box_typeB"></div>
            <div class="box_typeA"></div>
            <div class="box_typeB"></div>
          </div>
        </div>
        <div class="section03">
          <div class="imgLap"></div>
        </div> */}
    </div>
  );
}

export default App;
