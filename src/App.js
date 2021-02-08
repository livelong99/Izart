import './App.css';
import React, {useEffect, useRef, useState} from 'react';
import Typical from "react-typical";


function App() {

  

  return (
    <div>
      <nav>
        <div class="navbar">
          <div class="navbarheader">izart
          </div>
          <div class="navbarcenter">
            
          </div>
          <div class="navbarright">
          <div class="link">Services</div>
            <div class="link">Industries</div>
            <div class="link">Resources</div>
            {/* <div class="btnText">Free Trial</div> */}
          </div>
        </div>
        </nav>
        <div class="section01">
          <img src="./section01.png" />
          <div class="headone">
            <Typical 
              steps={[1000, 'Quality content at scale.', 1000]}
              loop={Infinity}
              wrapper="p"            
            />
          </div>
          <div class="subhead">
            <p>Access content writing services from a network of specialized, professional writers.</p>
          </div>
          <div class="buttons">
            <div class="leftB"><div class="btnText">Let's Talk</div></div>
            <div class="rightB"><div  class="btnText">Let's Start</div></div>
          </div>
        </div>
        <div class="section02">
          <div class="text"><p>We Create</p>  <svg preserveAspectRatio="none" viewBox="-5 -5 406 10" class="line1"><path d="M 0 0 L 396 0"  /></svg>  </div>
          <div class="carousal">
            <div class="main" ></div>
            <div class="left">                
              <div class="rectangle3"></div>
              <svg preserveAspectRatio="none" viewBox="-0.0035156607627868652 2.647265911102295 54.92431640625 53.53302001953125" class="iconAwesomeArrowLefte356bfef"><path d="M 31.56833839416504 52.59466171264648 L 28.84694290161133 55.3160514831543 C 27.69464111328125 56.46835708618164 25.83134269714355 56.46835708618164 24.69129943847656 55.3160514831543 L 0.8607108592987061 31.49772453308105 C -0.2915912270545959 30.34542274475098 -0.2915912270545959 28.48212432861328 0.8607108592987061 27.34207916259766 L 24.69129943847656 3.511492729187012 C 25.84360122680664 2.359190464019775 27.70689964294434 2.359190464019775 28.84694290161133 3.511492729187012 L 31.56833839416504 6.232886791229248 C 32.7328987121582 7.39744758605957 32.7083854675293 9.297521591186523 31.51930236816406 10.43756484985352 L 16.74777030944824 24.5103588104248 L 51.97879791259766 24.5103588104248 C 53.60918426513672 24.5103588104248 54.92084503173828 25.82202529907227 54.92084503173828 27.4524097442627 L 54.92084503173828 31.37513732910156 C 54.92084503173828 33.00552368164063 53.60918426513672 34.31718826293945 51.97879791259766 34.31718826293945 L 16.74777030944824 34.31718826293945 L 31.51930236816406 48.38998031616211 C 32.72064208984375 49.530029296875 32.74515533447266 51.43009948730469 31.56833839416504 52.59466171264648 Z"  /></svg>
            </div>
            <div class="right">
              <div class="rectangle2"></div>
              <svg preserveAspectRatio="none" viewBox="-0.00351715087890625 2.647266149520874 54.92431640625 53.53302001953125" class="iconAwesomeArrowLeft"><path d="M 23.34902381896973 52.59466934204102 L 26.0704231262207 55.31605911254883 C 27.22272682189941 56.46836471557617 29.08602905273438 56.46836471557617 30.22607231140137 55.31605911254883 L 54.05669403076172 31.49772834777832 C 55.20899963378906 30.34542655944824 55.20899963378906 28.48212814331055 54.05669403076172 27.34208297729492 L 30.22607231140137 3.511492967605591 C 29.07377052307129 2.359190464019775 27.21046829223633 2.359190464019775 26.0704231262207 3.511492967605591 L 23.34902381896973 6.232887744903564 C 22.18446350097656 7.397448539733887 22.20897674560547 9.29752254486084 23.3980598449707 10.43756580352783 L 38.16961288452148 24.51036262512207 L 2.93853759765625 24.51036262512207 C 1.308147430419922 24.51036262512207 -0.00351715087890625 25.82202911376953 -0.00351715087890625 27.45241355895996 L -0.00351715087890625 31.37514114379883 C -0.00351715087890625 33.00552749633789 1.308147430419922 34.31719207763672 2.93853759765625 34.31719207763672 L 38.16961288452148 34.31719207763672 L 23.3980598449707 48.38998794555664 C 22.19672012329102 49.53003692626953 22.17220687866211 51.43010711669922 23.34902381896973 52.59466934204102 Z"  /></svg>
            </div>
          </div>
        </div>
        <div class="section03">
          <div class="Box-l"><p>Our Work</p>  <svg preserveAspectRatio="none" viewBox="-5 -5 406 10" class="line2"><path d="M 0 0 L 396 0"  /></svg>  </div>
          <div className="Box-c white-bg"></div>
          <div className="Box-r white-bg"></div>
          <div className="Box-l white-bg"></div>
          <div className="Box-c white-bg"></div>
          <div className="Box-r"><div class="button-cont white-bg"><div class="btnText">see more</div></div></div>
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
