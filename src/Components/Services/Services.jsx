// import './serv.css';
// import './App.css';
// import './App1.css';
import React, {useRef} from 'react';
import OurWork from "../Home/ourWork";
import Form from "./form";
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
                <div class="darkBg">
                <div class="graphics">
                    <div class="blank-start" style={{zIndex: "6"}}>
                    </div>
                    <div class="blk" style={{zIndex: "5"}}>
                        <img class="tri-2" src="../Images/triangle.svg" />
                        <img class="tri-1" src="../Images/triangle02.svg" />
                        <div class="blkContent">
                            <div class="blkHead"><p>INITIATE</p></div>
                            <div class="blkBdy"><p>Our Delivery Executive gets on a quick call with you, understands your requirements, and allocates a Content Strategist for your brand. </p></div>
                        </div>
                    </div>
                    <div class="blk" style={{zIndex: "4"}}>
                      
                    <img class="tri-2" src="../Images/triangle.svg" />
                        <img class="tri-1" src="../Images/triangle02.svg" />
                        <div class="blkContent">
                            <div class="blkHead"><p>RECON</p></div>
                            <div class="blkBdy"><p>Our Content Strategist gets on a call with you. They brainstorm on ideas with you and finalize a plan of action that will serve you the best. </p></div>

                        </div>
                    </div>
                    <div class="blk" style={{zIndex: "3"}}>
                        <img class="tri-2" src="../Images/triangle.svg" />
                        <img class="tri-1" src="../Images/triangle02.svg" />
                        <div class="blkContent">
                            <div class="blkHead"><p>EXECUTION</p></div>
                            <div class="blkBdy"><p>Sit back and relax. Our team of writers are now working on your requirement and will provide the final deliverable right on time.</p></div>
                        </div>
                    </div>
                    <div class="blk" style={{zIndex: "2"}}>
                        <img class="tri-2" src="../Images/triangle.svg" />
                        <img class="tri-1" src="../Images/triangle02.svg" />
                        <div class="blkContent">
                            <div class="blkHead"><p>CURATION </p></div>
                            <div class="blkBdy"><p>Have some edits? Great! We love editing. Send your comments to our first draft and we will edit it in no time.</p></div>
                        </div>
                    </div>
                    <div class="blk" style={{zIndex: "1"}}>
                        <img class="tri-2" src="../Images/triangle.svg" />
                        <img class="tri-1" src="../Images/triangle02.svg" />
                        <div class="blkContent">
                            <div class="blkHead"><p>IT’S A WRAP</p></div>
                            <div class="blkBdy"><p>Publish the final content and see your inbound traffic, leads, and revenues grow exponentially.</p></div>
                        </div>
                    </div>
                    <div class="blank-end"  style={{zIndex: "2"}}></div>
                    </div>
                </div>
            <div class="suggestions">
              <div class="suggHd"><p>Articles</p></div>
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
            <OurWork />
        </div>
    )
}

export default Service;