import './css/nav.css';
import './css/serv.css';
import './css/App.css';
import "./css/types.css";
import './css/App1.css';
import React, {useRef} from 'react';
import Types from "./Components/Types/types"
import NavigationBar from "./Components/PageComp/navigationBar.jsx"
import Footer from "./Components/PageComp/Footer";
import dimensions from "./OtherFiles/Dimensions";
import Home from "./Components/Home/Home"
import Services from "./Components/Services/Services"
import servData from "./OtherFiles/service.json";
import indusData from "./OtherFiles/indus.json";
import Industries from "./Components/Industries/Industries"
import Load from './Components/Home/preloader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LocalAtmRounded } from '@material-ui/icons';

const App = () => {
  const loadRef = useRef(null);
  const {width} = dimensions();

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom >= 0 &&
        rect.right >= 0
    );
  }

  const loaded = () => {
    loadRef.current.style.display = 'none';
  }


  return (
    <div>
      <div ref={loadRef} class="loadBg">
        <div id="load" class="loader">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        </div>
      </div>
      <div onLoad={loaded}>
      <Router>
      <NavigationBar></NavigationBar>
      <Switch>
          <Route path="/" exact component={Home} />
          {servData.map(serv => (
            <Route path={"/services/" + serv.link} exact><Services data={serv} /></Route>
          ))}
          {indusData.map(indus => (
            <Route path={"/industries/" + indus.link} exact><Industries data={indus} /></Route>
          ))}
          <Route path="/types" component={Types} />
        </Switch>
        <a data-aos="fade-up" data-aos-delay="2500" data-aos-offset="50" data-aos-duration="500" class="whatsapp" target="_blank" href="https://api.whatsapp.com/send?phone=+919319150688"><img src="../Images/whatsapp.svg" /></a>
        <Footer />
      </Router>
    </div>
    </div>
  );
}

export default App;
