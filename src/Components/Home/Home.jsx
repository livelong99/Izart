import React, {useRef, useEffect} from 'react';
import Typical from "react-typical";
import ThreeC from "./threeC";
import OurWork from "./ourWork";
import Testimonials from "./Testimonials";
import Clients from "./Clients";
import Form from "../Services/form";
import dimensions from "../../OtherFiles/Dimensions";
import NavigationBar from "../PageComp/navigationBar.jsx"
import Footer from "../PageComp/Footer";
import Count from "./Count";
import {
  Link
} from "react-router-dom";


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

useEffect(() => {
  document.getElementById('video').play();

});

  return (
    <div>
        <NavigationBar></NavigationBar>
      <div class="landmain">
      <div class="VidBg">
      <video id="video" loop="true" autoplay muted><source id="mp4" src="Images/video.mp4" type="video/mp4"/></video></div>
        <div ref={oneRef} class="section01 home01">
          <div class="mainTxt">
          <div class="headone">
            <Typical
              steps={[1200, 'Izart : Home of Data Driven Storytellers.', 1000]}
              loop={1}
              wrapper="p"
            />
          </div>
          <div data-aos="fade-zoom-out" data-aos-delay="2500" data-aos-offset="50" data-aos-duration="500" class="subhead">
            <p>We write content that’s easy to read, hard to ignore and impossible to forget.</p>
          </div>

          <div class="extra"></div>
          </div>

          <div class="mainIll">
            {(width > 1025) ? <img src="Images/homeS.svg" /> : null}
            </div>
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
          {width<1025 ? <div class="illus" ><img src="Images/2.png" /></div>: null}
            <div class="content">
              <div class="head"><p>Content Omnipotent</p></div>
              <div class="sub-head"><p>For those who want to start from scratch.</p></div>
              <div class="body"><p>We’ll kickstart your content marketing by creating detailed buyer personas, curating a data driven content strategy, and creating content that drives in increased revenues. </p></div>
              <Link onClick={() => {document.body.scrollTop = 0; document.documentElement.scrollTop = 0}} to="/Content+Omnipotent"><a href="#"><div class="more"><div class="btnText">learn more</div></div></a></Link>
            </div>
            {width>=1025 ? <div class="illus" ><img src="Images/2.png" /></div>: null}
          </div>
          <div class="service">
            <div class="illus lefti"><img class="left" src="Images/4.png" /></div>
            <div class="content">
              <div class="head al-right"><p>Residential Wordsmith</p></div>
              <div class="sub-head al-right"><p>When you have your content strategy and you just need an executioner.</p></div>
              <div class="body al-right"><p>There is no one better than the handpicked writers of Izart, to bring your vision to light. Use our internal resources for all your content creation needs.</p></div>
              <Link onClick={() => {document.body.scrollTop = 0; document.documentElement.scrollTop = 0}} to="/Residential+Wordsmith"><a href="#"><div class="more bt-right"><div class="btnText">learn more</div></div></a></Link>
            </div>
          </div>
          <div class="service">
              {width<1025 ? <div class="illus"  ><img src="Images/6.png" /></div>: null}
            <div class="content">
              <div class="head"><p>No strings attached </p></div>
              <div class="sub-head"><p>For all your immediate content requirements.</p></div>
              <div class="body"><p>Our team of writers can deliver high quality content deliverables at scale without any long term commitment. </p></div>
              <Link onClick={() => {document.body.scrollTop = 0; document.documentElement.scrollTop = 0}} to="/No+strings+attached"><a href="#"><div class="more"><div class="btnText">learn more</div></div></a></Link>
            </div>
            {width>=1025 ? <div class="illus"><img src="Images/6.png" /></div>: null}
          </div>
        </div>
        <ThreeC />
        <Testimonials />
        <OurWork />
        <Count />
        <Clients />
        <hr />
        <div class="homeContactUs">
        {(width >=971) ? (<div class="contactUsEmo"><img src="Images/email.svg" width="256px" height="256px" /></div>) : null}
        <div class="contactUsForm"><Form /></div>
        </div>
        <a data-aos="fade-up" data-aos-delay="2500" data-aos-offset="50" data-aos-duration="500" class="whatsapp" target="_blank" href="https://api.whatsapp.com/send?phone=+919711106474"><img src="../Images/whatsapp.svg" /></a>
        <Footer />
    </div>
  );
}

export default Home;
