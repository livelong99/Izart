import React from 'react';
import Form from "../Services/form";
import dimensions from "../../OtherFiles/Dimensions";

const Types = ({data}) => {
    
    const {width} = dimensions();


    const inf = () => {
        if(width <= 970){
            return(
                <div class="mobInfoT">
                    <div class="mobBoxT">
                            <h2>Resource Allocation</h2>
                            <p>Our Delivery Executive will get on a call with you and understand your requirements. Based on your requirements, they will allocate the appropriate number of internal resources dedicated to your brand.</p>
                        </div>
                    <img src="../Images/serArry.svg" />
                    <div class="mobBoxT">
                            <h2>Content Creation</h2>
                            <p>Our Content Writers will get on board and immediately start executing your content calendar across all Marketing channels to perfection.</p>
                        </div>
                    <img src="../Images/serArry.svg" />
                    <div class="mobBoxT">
                            <h2>Content Optimization</h2>
                            <p>If required, Izart will also provide a dedicated resource to SEO Optimize every piece of content created by us.</p>
                    </div>
                    <img src="../Images/serArry.svg" />
                    <div class="mobBoxT">
                            <h2>Content Review</h2>
                            <p>At the end of every month, we will extend a feedback form so that we meet your expectation in every way possible.</p>
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
                            <p>Our Content Writers will get on board and immediately start executing your content calendar across all Marketing channels to perfection. </p>
                        </div>
                        <img src="../Images/tyPtr.svg"></img>
                    </div>
                    <div class="stCont">
                        <div class="boxT">
                            <h2>Content Review</h2>
                            <p>At the end of every month, we will extend a feedback form so that we meet your expectation in every way possible.</p>
                        </div>
                        <img src="../Images/tyPtr.svg"></img>
                    </div>
                </div>
                <div class="c-line"><img src="../Images/typeLine03.svg"/></div>
                <div class="bxs-r">
                    <div class="stCont">
                        <img src="../Images/tyPtr-y.svg"></img>
                        <div class="boxT">
                            <h2>Resource Allocation</h2>
                            <p>Our Delivery Executive will get on a call with you and understand your requirements. Based on your requirements, they will allocate the appropriate number of internal resources dedicated to your brand. </p>
                        </div>
                    </div>
                    <div class="stCont">
                        <img src="../Images/tyPtr-y.svg"></img>
                        <div class="boxT">
                            <h2>Content Optimization</h2>
                            <p>If required, Izart will also provide a dedicated resource to SEO Optimize every piece of content created by us.</p>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }



    return(
            <div class="types">
                <div class="darkBg">
            <div class="section01">
          <div class="mainTxt">
          <div class="headone" style={{color: "#FFFFFF"}}>
              <p>Residential Wordsmith</p>
          </div>
          <div class="subhead" style={{color: "#FEB848"}}>
            <p>Your thoughts translated by our words.</p>
          </div>
          
          <div class="extra"></div>
          </div>
          <div class="mainIll"><img src="../Images/ser-2.svg" /></div>
        </div>
        </div>
        <div class="typeContent">
                <p>This service type is for brands that already have a Content Strategy in place. All they are looking for are creative and punctual content writers. At Izart, we provide flexible options for companies of all sizes.</p>    
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
    )
}

export default Types;