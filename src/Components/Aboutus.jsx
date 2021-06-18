import React from 'react';
import Form from "./Services/form";
import dimensions from "./../OtherFiles/Dimensions";
import NavigationBar from "./PageComp/navigationBar.jsx"
import Footer from "./PageComp/Footer";

const AboutUs = () => {

    const {width} = dimensions();
    return(
        <>
        <NavigationBar></NavigationBar>
        <div class="types">
            <div class="darkBg">
            <div class="section01 about01">
          <div class="mainTxt">
          <div class="headone" style={{color: "#FFFFFF"}}>
              <p>About Us</p>
          </div>
          <div class="subhead" style={{color: "#FEB848"}}>
              <p>Izart Content Services is your one stop solution for a 360 degree coverage of Content Marketing.</p>
          </div>
          {/* <div class="subhead" style={{color: "#FEB848"}}>
            <p>About Us</p>
          </div> */}
          {/* <div class="extra"></div> */}
          </div>
          {/* <div class="mainIll"><img src="../Images/about.jpg" /></div> */}
        </div>
        </div>
        <div class="section02H1" >
            <p>Our Story</p>{width<1025 ? <br/> : null}
        </div>
        <div class="aboutWFF">
        <div class="aboutS" >
                <p><b>T</b>he story of Izart is more significant than just the glorified chronicles of a Content Marketing company. It's the exposition of every story where an underdog overcomes the odds to succeed.<br /><br />When the world was closing down during the ill-fated pandemic, Izart Content Services found a reason to exist. The reason was simple. It was to help.<br /><br />Help every business, whether it be an MSME, Startup, or a Fortune 500 Company. Help them to thrive in the digital space by realizing the true potential of CONTENT.<br /><br />The democratization of the Internet has lowered the barrier of entry for every business, but consequentially, it has exponentially increased competition in every vertical. Consumer 4.0 will not convert by mere promises of good service or products that all your competitors are making. They will convert when you provide them with personalized value with tangible results. And the only way you can achieve that as a brand is through effective Content Marketing. <br /><br />That's where we came in!<br/><br />At Izart, we pride ourselves on creating scalable content that drives traffic, leads, recognition, and revenue. Our in-house writers are Data Driven Storytellers who can weave hard hitting stories that can convert a passive reader to an active consumer.<br/><br />Don't believe us? Set up a free consultation call and see for yourself!</p>
        </div>
        <div class="aboutIm">
        {width>1025 ? <img src="Images/8.png" /> : null}
        </div>
        </div>
        <div class="darkBg">
            <div class="section02H">
                <p>A Word from Our Founder</p>
            </div>
            <div class="aboutWFF">
            <div class="foundIm">
                <img class="founder"  src="Images/founder.png" />
            </div>
                <div class="aboutF" style={{color: "rgba(255 ,255 ,255 , 0.9)"}}>
                    <p><b>“ </b>Throughout my childhood, I was fascinated with the ability of mere words to evoke a strong emotional reaction in me. So in a typical fashion of a disciple turning master, I decided to switch from being a reader to being a wordsmith. And ever since I picked up the pen to write my first novella at age 12, to writing the script for an advertisement just a few hours ago, I have loved the process of writing. <br/><br/>When I was working as a Data Analyst, I would build mechanisms to retrieve organized and structured data from unorganized sources. I would then display the inferences of those datasets in lucid dashboards. Observing those dashboards, even then, I would create personas for different demographics and develop storylines to connect with all of them.<br/><br/>So it wasn't long before I realized that there is a considerable gap in the market for writers who are not just creative but are also pragmatic. Hence, I built a team of like-minded individuals who can position your brand to be innovative, empathetic, and impactful. But at the same time provide you with technical insights and data driven reports to augment your marketing ROIs.<br/><br/>At Izart, my goal is to allow my partners to reach the pinnacle of success through one element that I believe will shape the 21st Century; CONTENT.<br/><br/>We have already helped more than 20 companies realize the true potential of Content Marketing, and we are just getting started!<b> ”</b><br/><br/></p></div>


            </div>
            </div>
        </div>
        <a data-aos="fade-up" data-aos-delay="2500" data-aos-offset="50" data-aos-duration="500" class="whatsapp" target="_blank" href="https://api.whatsapp.com/send?phone=+919711106474"><img src="../Images/whatsapp.svg" /></a>
        <Footer />
        </>

)}

export default AboutUs;
