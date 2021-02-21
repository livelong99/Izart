import React from "react";
import dimensions from "./Dimensions";

const ThreeC = () => {
  const {width} = dimensions();

    return(
        <div class="c3">
            <div class="section02H">
                <p>How We Work</p>
            </div>
            <div class="steps">
                <div class="sContent">
                    <div data-aos="fade-down" data-aos-delay="0" data-aos-offset="50" data-aos-duration="500" class="step">
                        <div class="sHead"><p>Connect</p></div>
                        <div class="sSubHead"><p>We start our process of creating any piece of content by connecting your brand to the right audience. From creating buyer personas, curating a meticulous content strategy to SEO Optimization; our content WILL REACH to people who convert. </p></div>
                    </div>
                    <div data-aos="fade-down" data-aos-delay="300" data-aos-offset="50" data-aos-duration="500" class="arrow"><img  src="Images/arrow01.svg" /></div>
                    <div data-aos="fade-down" data-aos-delay="300" data-aos-offset="50" data-aos-duration="500" class="step">
                        <div class="sHead tal-right"><p>Control</p></div>
                        <div class="sSubHead tal-right"><p>We understand data, but more importantly, we understand humans. The ability of our in-house storytellers to dictate the reader’s emotions and subsequent actions is what truly sets us apart. </p></div>
                    </div>
                    <div data-aos="fade-down" data-aos-delay="600" data-aos-offset="50" data-aos-duration="500" class="arrow"><img class="rightAr" src="Images/arrow02.svg" /></div>
                    <div data-aos="fade-down" data-aos-delay="600" data-aos-offset="50" data-aos-duration="500" class="step">
                        <div class="sHead"><p>Convert</p></div>
                        <div class="sSubHead"><p>Every word that we write is written with the sole intention of converting a casual reader to a devout consumer. Our subtle messaging and our commitment to stay true to data driven content strategy ensures high dividends for our clients. </p></div>
                    </div>
                </div>
                <div class="sIllus"><img class="glow" src="Images/sIllus.svg" />{width>=1025 ? (<img class="ptArr" src="Images/grow.svg" />) : null}</div>
            </div>
        </div>
    )
}

export default ThreeC;
