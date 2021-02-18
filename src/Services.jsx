import './App.css';
import './App1.css';
import './serv.css';
import React, {useEffect, useRef, useState} from 'react';
import NavigationBar from "./navigationBar.jsx"
import Footer from "./Footer";
import Form from "./form"
import dimensions from "./Dimensions";

const Service = () => {

    const write = useRef(null);
    const frm = useRef(null);

    const formfunc = () => {
        return(
            <div ref={frm} class="container-contact1">
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
        <div>
            
            <div class="headServ"></div>
            <div class="home">
            <div class="heading">
                Article Writing
              </div>
              <div class="backimg">
              </div>
            </div>
            <div class="servContent">
                <div ref={write} class="writeUp">
                <h1 >Facebook</h1>

<p>Facebook has over 2.45 BILLION Monthly users. How many of them are your brand’s consumers?

What if we tell you that you can beat your competition and increase your revenues tenfold by just investing in a good Social Media Content Strategy and creating content regularly.

Want to know how we can do it for you?

At Izart, we create content that is carefully structured, methodically curated, and strategically promoted. We use data driven insights to understand your audience. We then position your brand via content in such a way that potential prospects discover you and not the other way around.

Our content converts idle readers to active consumers. So fill out the form, and let us increase your brand’s revenue right now!
</p></div>
                <div class="servForm">
                    {formfunc()}
                </div>
                </div>
                <div class="graphics">
                    <div class="blank-start">
                    </div>
                    <div class="blk">
                        <div class="blkContent">
                            <div class="blkHead"><p>Header</p></div>
                            <div class="blkBdy"><p>id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut </p></div>

                        </div>
                        <img class="tri-2" src="Images/triangle02.svg" />
                        <img class="tri-1" src="Images/triangle.svg" />
                    </div>
                    <div class="blk">
                        <div class="blkContent">
                            <div class="blkHead"><p>Header</p></div>
                            <div class="blkBdy"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p></div>

                        </div>
                        <img class="tri-2" src="Images/triangle02.svg" />
                        <img class="tri-1" src="Images/triangle.svg" />
                    </div>
                    <div class="blk">
                        <div class="blkContent">
                            <div class="blkHead"><p>Header</p></div>
                            <div class="blkBdy"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p></div>
                        </div>
                        <img class="tri-2" src="Images/triangle02.svg" />
                        <img class="tri-1" src="Images/triangle.svg" />
                    </div>
                    <div class="blk">
                        <div class="blkContent">
                            <div class="blkHead"><p>Header</p></div>
                            <div class="blkBdy"><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p></div>
                        </div>
                        <img class="tri-2" src="Images/triangle02.svg" />
                        <img class="tri-1" src="Images/triangle.svg" />
                    </div>
                    <div class="blk">
                        <div class="blkContent">
                            <div class="blkHead"><p>Header</p></div>
                            <div class="blkBdy"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p></div>
                        </div>
                        <img class="tri-2" src="Images/triangle02.svg" />
                        <img class="tri-1" src="Images/triangle.svg" />
                    </div>
                    <div class="blank-start"></div>

                </div>
            <div class="testimonials">
              <div class="inner">
                <h1>Articles</h1>
                <div class="border"></div>
                <div class="row1">
                  <div class="colind">
                </div>

                  <div class="col">
                    <div class="testimonial">
                      <img src="Images/seo.jpg" width="512" height="512" alt="" />
                      <div class="name">SEO writing</div>
                    </div>
                  </div>

                  <div class="col">
                    <div class="testimonial">
                      <img src="Images/articleback.jpg" alt="" />
                      <div class="name">Product Article</div>
                    </div>
                  </div>

                  <div class="col">
                    <div class="testimonial">
                      <img src="Images/informative.jpg" alt="" />
                      <div class="name">Informative Article</div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="testimonial">
                      <img src="Images/technical.jpg" alt="" />
                      <div class="name">Technical Articles</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="OuterDiv">
            <div class="section03">
              <div class="Box-l"><p>Our Work</p>  <svg preserveAspectRatio="none" viewBox="-5 -5 406 10" class="line2"><path d="M 0 0 L 396 0"  /></svg>  </div>
              <div className="Box-r white-bg"></div>
              <div className="Box-l white-bg"></div>
              <div className="Box-r white-bg"></div>
               {/*<div className="Box-r"><div data-aos-delay="1000" data-aos="fade-left" data-aos-offset="0" data-aos-duration="1000" class="button-cont black-bg"><div class="btnText">see more</div></div></div> */}
            </div>
            <div class="blogrow">
            <div class="containerforourwork">
              <div class="headOurWork">
                Blog
              </div>
              <div class="subheadWork">
                Latest blogs from izart works
              </div>
              <div class="readmore1">
                Read more
              </div>
            </div>
            <div class="containerforourwork">
            <div class="headOurWork">
              Whitepaper
            </div>
            <div class="subheadWork">
              Latest whitepaper from izart works
            </div>
            <div class="readmore1">
              Read more
            </div>
            </div>
            <div class="containerforourwork">
            <div class="headOurWork">
              Case Study
            </div>
            <div class="subheadWork">
              Latest case study from izart works
            </div>
            <div class="readmore1">
              Read more
            </div>
            </div>
            <div class="containerforourwork">
            <div class="headOurWork">
              Article
            </div>
            <div class="subheadWork">
              Latest Article from izart works
            </div>
            <div class="readmore1">
              Read more
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Service;
