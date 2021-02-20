import './App.css';
import './App1.css';
import './serv.css';
import React, {useEffect, useRef, useState} from 'react';
import NavigationBar from "./navigationBar.jsx"
import Footer from "./Footer";
import OurWork from "./ourWork"
import Form from "./form"
import dimensions from "./Dimensions";

const Service = () => {

    const hovI1 = useRef(null);
    const hovI2 = useRef(null);
    const hovI3 = useRef(null);
    const hovI4 = useRef(null);
    const frm = useRef(null);

    const sugHov = (e) => {
      e.current.childNodes[1].childNodes[0].style.fontSize = "28px";
      e.current.childNodes[1].childNodes[0].style.marginLeft = "25px";
      e.current.childNodes[0].style.width= "220px";
      e.current.childNodes[0].style.height= "220px";
      console.log(e.current.childNodes[1].childNodes[0].style.fontSize);
    }

    const sugHovN = (e) => {
      e.current.childNodes[1].childNodes[0].style.fontSize = "25px";
      e.current.childNodes[1].childNodes[0].style.marginLeft = "20px";
      e.current.childNodes[0].style.width= "200px";
      e.current.childNodes[0].style.height= "200px";
    }

    const formfunc = () => {
        return(
            <div class="container-contact1">
                <form class="contact1-form validate-form">
                    <span class="contact1-form-title">
                        Contact Us
                    </span>
                    <div class="wrap-input1 validate-input" data-validate = "Name is required">
                        <input class="input1" type="text" name="name" placeholder="Name" />
                        <span class="shadow-input1"></span>
                    </div>

                    <div class="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                        <input class="input1" type="text" name="email" placeholder="Email" />
                        <span class="shadow-input1"></span>
                    </div>

                    <div class="wrap-input1 validate-input" data-validate = "Phone Number is required">
                        <input class="input1" type="text" name="phone" placeholder="Phone Number" />
                        <span class="shadow-input1"></span>
                    </div>

                    <div class="wrap-input1">
                        <input class="input1" type="text" name="company" placeholder="Company Name (optional)" />
                        <span class="shadow-input1"></span>
                    </div>

                    <div class="wrap-input1">
                        <textarea class="input1" name="message" placeholder="Message"></textarea>
                        <span class="shadow-input1"></span>
                    </div>

                    <div class="container-contact1-form-btn">
                        <button class="contact1-form-btn">
                            <span>
                                Send Email
                                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        );
    }




    return(
        <div class="serv">
          <div class="section01">
          <div class="mainTxt">
          <div class="headone">
            <p>Article Writing</p>
          </div>
          <div class="subhead">
            <p>When you have your content strategy and you just need an executioner.</p>
          </div>
          </div>
          <div class="mainIll"><img src="Images/Services/article.svg" /></div>
        </div>
        <div class="darkBg">
            <div class="servContent">
                <div class="writeUp">
<p>Facebook has over 2.45 BILLION Monthly users. How many of them are your brand’s consumers? <br />

What if we tell you that you can beat your <i>competition and increase your revenues</i> tenfold by just investing in a good Social Media Content Strategy and creating content regularly. <br /><br />

Want to know how we can do it for you?<br />

At Izart, we create content that is carefully structured, methodically curated, and strategically promoted. We use data driven insights to understand your audience. We then position your brand via content in such a way that potential prospects discover you and not the other way around.<br />

Our content converts idle readers to active consumers. So fill out the form, and let us increase your brand’s revenue right now!<br />
</p></div>
                <div class="servForm">
                    {formfunc()}
                </div>
                </div>
                </div>
                <div class="graphics">
                    <div class="blank-start">
                    </div>
                    <div class="blk">
                        <div class="blkContent">
                            <div class="blkHead"><p>INITIATE</p></div>
                            <div class="blkBdy"><p>Our Delivery Executive gets on a quick call with you, understands your requirements, and allocates a Content Strategist for your brand. </p></div>

                        </div>
                        <img class="tri-2" src="Images/triangle02.svg" />
                        <img class="tri-1" src="Images/triangle.svg" />
                    </div>
                    <div class="blk">
                        <div class="blkContent">
                            <div class="blkHead"><p>RECON</p></div>
                            <div class="blkBdy"><p>Our Content Strategist gets on a call with you. They brainstorm on ideas with you and finalize a plan of action that will serve you the best. </p></div>

                        </div>
                        <img class="tri-2" src="Images/triangle02.svg" />
                        <img class="tri-1" src="Images/triangle.svg" />
                    </div>
                    <div class="blk">
                        <div class="blkContent">
                            <div class="blkHead"><p>EXECUTION</p></div>
                            <div class="blkBdy"><p>Sit back and relax. Our team of writers are now working on your requirement and will provide the final deliverable right on time.</p></div>
                        </div>
                        <img class="tri-2" src="Images/triangle02.svg" />
                        <img class="tri-1" src="Images/triangle.svg" />
                    </div>
                    <div class="blk">
                        <div class="blkContent">
                            <div class="blkHead"><p>CURATION </p></div>
                            <div class="blkBdy"><p>Have some edits? Great! We love editing. Send your comments to our first draft and we will edit it in no time.</p></div>
                        </div>
                        <img class="tri-2" src="Images/triangle02.svg" />
                        <img class="tri-1" src="Images/triangle.svg" />
                    </div>
                    <div class="blk">
                        <div class="blkContent">
                            <div class="blkHead"><p>IT’S A WRAP</p></div>
                            <div class="blkBdy"><p>Publish the final content and see your inbound traffic, leads, and revenues grow exponentially.</p></div>
                        </div>
                        <img class="tri-2" src="Images/triangle02.svg" />
                        <img class="tri-1" src="Images/triangle.svg" />
                    </div>
                    <div class="blank-end"></div>

                </div>
            <div class="suggestions">
              <div class="suggHd"><p>Articles</p></div>
              <div class="itms">
                <div ref={hovI1} onMouseEnter={() => {sugHov(hovI1)}} onMouseLeave={() => {sugHovN(hovI1)}} class="itm"><img id="sgI" src="Images/suggestion.svg"/><div class="itmBody">
                  <a href="#">SEO <br/>Writing</a>  
                  </div>
                </div>
                <div ref={hovI2} onMouseEnter={() => {sugHov(hovI2)}} onMouseLeave={() => {sugHovN(hovI2)}} class="itm"><img id="sgI" src="Images/suggestion.svg"/><div class="itmBody">
                  <a href="#">Product Article</a>  
                  </div>
                </div>
                <div ref={hovI3} onMouseEnter={() => {sugHov(hovI3)}} onMouseLeave={() => {sugHovN(hovI3)}} class="itm"><img id="sgI" src="Images/suggestion.svg"/><div class="itmBody">
                  <a href="#">Informative Article</a>  
                  </div>
                </div>
                <div ref={hovI4} onMouseEnter={() => {sugHov(hovI4)}} onMouseLeave={() => {sugHovN(hovI4)}} class="itm"><img id="sgI" src="Images/suggestion.svg"/><div class="itmBody">
                  <a href="#">Technical Article</a>  
                  </div>
                </div>
              </div>
            </div>
            <OurWork />
        </div>
    )
}

export default Service;