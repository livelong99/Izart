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
                            <h2>Content Requirements</h2>
                            <p>Send a mail to us at operations@izart.in detailing your content requirements. We will reach back to you within 3-5 working hours with the quotation for the work. </p>
                        </div>
                    <img src="../Images/serArry.svg" />
                    <div class="mobBoxT">
                            <h2>Content Creation</h2>
                            <p>Sit back and relax! Our Content Writers will now work on your requirements. We deliver all non-retainer content within 48-72 Hours. However, for urgent requirements we also provide an express 24 Hour delivery as well.</p>
                        </div>
                    <img src="../Images/serArry.svg" />
                    <div class="mobBoxT">
                            <h2>Content Review</h2>
                            <p>Do you have edits? No issues, we love editing. Our writers always strive for perfection.Hence, at Izart, we provide 3 free edits to every piece of content we deliver.</p>
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
                            <h2>Content Creation</h2>
                            <p>Sit back and relax! Our Content Writers will now work on your requirements. We deliver all non-retainer content within 48-72 Hours. However, for urgent requirements we also provide an express 24 Hour delivery as well.</p>
                        </div>
                        <img src="../Images/tyPtr.svg"></img>
                    </div>
                </div>
                <div class="c-line"><img src="../Images/typeLine01.svg"/></div>
                <div class="bxs-r">
                    <div class="stCont">
                        <img src="../Images/tyPtr-y.svg"></img>
                        <div class="boxT">
                            <h2>Content Requirements</h2>
                            <p>Send a mail to us at operations@izart.in detailing your content requirements. We will reach back to you within 3-5 working hours with the quotation for the work. </p>
                        </div>
                    </div>
                    <div class="stCont">
                        <img src="../Images/tyPtr-y.svg"></img>
                        <div class="boxT">
                            <h2>Content Review</h2>
                            <p>Do you have edits? No issues, we love editing. Our writers always strive for perfection.Hence, at Izart, we provide 3 free edits to every piece of content we deliver.</p>
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
              <p>No Strings Attached</p>
          </div>
          <div class="subhead" style={{color: "#FEB848"}}>
            <p></p>
          </div>
          <div class="extra"></div>
          </div>
          <div class="mainIll"><img src="../Images/ser-3.svg" /></div>
        </div>
        </div>
        <div class="typeContent">
                <p>This service type is for brands that have immediate content requirements. Our writers will provide all Content Deliverables timely and that too at scale!</p>    
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