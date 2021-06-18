import React from "react";
import {
  Link
} from "react-router-dom";


const OurWork = () => {
    return(
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
          <a href="#"><div class="readmore1">read more</div></a>

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
    )
}

export default OurWork;
