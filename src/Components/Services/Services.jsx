// import './serv.css';
// import './App.css';
// import './App1.css';
import React, {useRef} from 'react';
import OurWork from "../Home/ourWork";
import Form from "./form";
import Info from "./infograph";
import NavigationBar from "../PageComp/navigationBar.jsx"
import Footer from "../PageComp/Footer";
import {
  Link
} from "react-router-dom";

// return(<><br/>{line}<br/></>);

const Service = ({data}) => {

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

    return(
      <>
      <NavigationBar></NavigationBar>
        <div class="serv">
          <div class="land">
          <div class="section01">
          <div class="mainTxt">
          <div class="headone">
            <p>{data.title}</p>
          </div>
          <div class="subhead">
            <p>{data.subHead}</p>
          </div>
          </div>
          <div class="mainIll"><img src={("../Images/Services/" + data.illus)} /></div>
        </div>
        </div>
        <div>
            <div class="servContent">
                <div class="writeUp">
                  {/* <img src="Images/wrBg.svg" /> */}
<p>{data.body.map(line => {
  if(typeof(line) == "string"){
    return(<>{line}<br/><br/></>);
  }
  else{
    return(<>{line[0]}<i>{line[1]}</i>{line[2]}<br/><br/></>);
  }
})}</p></div>
                <div class="servForm">
                    <Form />
                </div>
                </div>
                </div>

                <Info />

                {data.sugg.length > 0 ? (
                <div class="suggestions">
                <div class="suggHd"><p>{data.suggestedtopic}</p></div>
                <div class="itms">
                  {data.sugg.map(sg => {
                    if(sg.ino == 1){
                      return(
                        <div ref={hovI1} onMouseEnter={() => {sugHov(hovI1)}} onMouseLeave={() => {sugHovN(hovI1)}} class="itm"><img id="sgI" src="../Images/suggestion.svg"/><div onClick={() => { document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} class="itmBody">
                        <Link to={"/services/" + sg.link}>{sg.title}</Link>
                        </div>
                    </div>)
                    }
                    else if(sg.ino == 2){
                      return(<div ref={hovI2} onMouseEnter={() => {sugHov(hovI2)}} onMouseLeave={() => {sugHovN(hovI2)}} class="itm"><img id="sgI" src="../Images/suggestion.svg"/><div onClick={() => { document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} class="itmBody">
                      <Link to={"/services/" + sg.link}>{sg.title}</Link>
                      </div>
                    </div>)

                    }
                    else if(sg.ino == 3){
                      return(<div ref={hovI3} onMouseEnter={() => {sugHov(hovI3)}} onMouseLeave={() => {sugHovN(hovI3)}} class="itm"><img id="sgI" src="../Images/suggestion.svg"/><div onClick={() => { document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} class="itmBody">
                      <Link to={"/services/" + sg.link}>{sg.title}</Link>
                      </div>
                    </div>)
                    }
                    else{
                      return(<div ref={hovI4} onMouseEnter={() => {sugHov(hovI4)}} onMouseLeave={() => {sugHovN(hovI4)}} class="itm"><img id="sgI" src="../Images/suggestion.svg"/><div onClick={() => { document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} class="itmBody">
                      <Link to={"/services/" + sg.link}>{sg.title}</Link>
                      </div>
                    </div>)
                    }
                  })}
                </div>
              </div>
              ) : null}
        </div>
        <a data-aos="fade-up" data-aos-delay="2500" data-aos-offset="50" data-aos-duration="500" class="whatsapp" target="_blank" href="https://api.whatsapp.com/send?phone=+919711106474"><img src="../Images/whatsapp.svg" /></a>
        <Footer />
        </>
    )
}

export default Service;
