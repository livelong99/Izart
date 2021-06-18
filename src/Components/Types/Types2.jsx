// import "./types.css";
// import "./App.css"
import React from 'react';
import Form from "../Services/form";
import dimensions from "../../OtherFiles/Dimensions";
import NavigationBar from "../PageComp/navigationBar.jsx"
import Footer from "../PageComp/Footer";
const Types = ({data}) => {
    
    const {width} = dimensions();


    const inf = () => {
        if(width <= 970){
            return(
                <div class="mobInfoT">
                    <div class="mobBoxT">
                            <h2>Data Collection</h2>
                            <p>Our Content Strategists sit with you and understand your brand’s vision, its goals, and its core values. Furthermore, we collect all the available data points from you to understand you audience.</p>
                        </div>
                    <img src="../Images/serArry.svg" />
                    <div class="mobBoxT">
                            <h2>Izart’s Research</h2>
                            <p>Our Strategists will then conduct their in-house research in the form of independent interviews, testimonials, surveys/polls to understand your target demographic. Based on this research our Content Strategists create unique Buyer Personas for your brand.</p>
                        </div>
                    <img src="../Images/serArry.svg" />
                    <div class="mobBoxT">
                            <h2>Competitor Analysis</h2>
                            <p>We conduct a comprehensive competitive analysis to figure out the current gaps in your competitor’s Content Marketing that your brand can capitalize on.</p>
                    </div>
                    <img src="../Images/serArry.svg" />
                    <div class="mobBoxT">
                            <h2>Content Strategy</h2>
                            <p>Our team will now create an overarching content strategy that will elucidate Content themes across all Marketing Funnels. Furthermore, it will also set milestones for 1 month, 3 Months, 6 Months, and 1 Year.</p>
                    </div>
                    <img src="../Images/serArry.svg" />
                    <div class="mobBoxT">
                            <h2>Content Calendar</h2>
                            <p>Now, Izart’s Content Writers get on board. They implement the curated Content Strategy by creating a dynamic weekly content calendar. If required, our in-house designers can get on board to bring our writer’s exact vision to life.</p>
                    </div>
                    <img src="../Images/serArry.svg" />
                    <div class="mobBoxT">
                            <h2>Content Review</h2>
                            <p>Our team will monitor analytics across all marketing funnels and create a monthly report for your benefit. We will review the performance of all content pieces and update the content calendar appropriately</p>
                    </div>

                </div>
            )
        }
        else{
            return(
                <div className="infoT">
                <div class="bxs-l">
                    <div class="stCont">
                        <div class="boxT">
                            <h2>Izart’s Research</h2>
                            <p>Our Strategists will then conduct their in-house research in the form of independent interviews, testimonials, surveys/polls to understand your target demographic. Based on this research our Content Strategists create unique Buyer Personas for your brand. </p>
                        </div>
                        <img src="../Images/tyPtr.svg">
                        </img>
                    </div>
                    <div class="stCont">
                        <div class="boxT">
                            <h2>Content Strategy</h2>
                            <p>Our team will now create an overarching content strategy that will elucidate Content themes across all Marketing Funnels. Furthermore, it will also set milestones for 1 month, 3 Months, 6 Months, and 1 Year. </p>
                        </div>
                        <img src="../Images/tyPtr.svg"></img>
                    </div>
                    <div class="stCont">
                        <div class="boxT">
                            <h2>Content Review</h2>
                            <p>Our team will monitor analytics across all marketing funnels and create a monthly report for your benefit. We will review the performance of all content pieces and update the content calendar appropriately</p>
                        </div>
                        <img src="../Images/tyPtr.svg"></img>
                    </div>
                </div>
                <div class="c-line"><img src="../Images/typeLine02.svg"/></div>
                <div class="bxs-r">
                    <div class="stCont">
                        <img src="../Images/tyPtr-y.svg"></img>
                        <div class="boxT">
                            <h2>Data Collection </h2>
                            <p>Our Content Strategists sit with you and understand your brand’s vision, its goals, and its core values. Furthermore, we collect all the available data points from you to understand you audience.</p>
                        </div>
                    </div>
                    <div class="stCont">
                        <img src="../Images/tyPtr-y.svg"></img>
                        <div class="boxT">
                            <h2>Competitor Analysis</h2>
                            <p>We conduct a comprehensive competitive analysis to figure out the current gaps in your competitor’s Content Marketing that your brand can capitalize on.</p>
                        </div>
                    </div>
                    <div class="stCont">
                        <img src="../Images/tyPtr-y.svg"></img>
                        <div class="boxT">
                            <h2>Content Calendar</h2>
                            <p>Now, Izart’s Content Writers get on board. They implement the curated Content Strategy by creating a dynamic weekly content calendar. If required, our in-house designers can get on board to bring our writer’s exact vision to life.</p>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }


    return(
        <>
        <NavigationBar></NavigationBar>
        <div class="types">
            <div class="darkBg">
            <div class="section01">
          <div class="mainTxt">
          <div class="headone" style={{color: "#FFFFFF"}}>
              <p>Content Omnipotent</p>
          </div>
          <div class="subhead" style={{color: "#FEB848"}}>
            <p><i>Your one-stop solution for ALL THINGS CONTENT!</i></p>
          </div>
          <div class="extra"></div>
          </div>
          <div class="mainIll"><img src="../Images/ser-1.svg" /></div>
        </div>
        </div>
            <div class="typeContent">
                <p>With Content Omnipotent you get complete coverage of Content Marketing. We handle everything from Content Ideation to Creation to Curation; allowing you to focus solely on your core functionalities.</p>    
            </div>
            <div class="darkBg">
            <div class="section02H">
                <p>How This is Gonna Work</p>
            </div>
           {inf()}
            </div>
            <div class="homeContactUs">
            {(width >=971) ? (<div class="contactUsEmo"><img src="../Images/email.svg" width="256px" height="256px" /></div>) : null}
            <div class="contactUsForm"><Form /></div>
            </div>
        </div>
        <a data-aos="fade-up" data-aos-delay="2500" data-aos-offset="50" data-aos-duration="500" class="whatsapp" target="_blank" href="https://api.whatsapp.com/send?phone=+919711106474"><img src="../Images/whatsapp.svg" /></a>
        <Footer />
        </>
    )
}

export default Types;