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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  let navRef = useRef(null);
  let bookBtn = useRef(null);
  let oneRef = useRef(null);
  let navCenterRef = useRef(null);
  const {width} = dimensions();

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom >= 0 &&
        rect.right >= 0
    );
  }

  return (
    <div>
      <Router>
      <NavigationBar></NavigationBar>
      <Switch>
          <Route path="/" exact component={Home} />
          {servData.map(serv => (
            <Route path={"/services/" + serv.link} exact><Services data={serv} /></Route>
          ))}
          <Route path="/types" component={Types} />
        </Switch>
        <a data-aos="fade-up" data-aos-delay="2500" data-aos-offset="50" data-aos-duration="500" class="whatsapp" target="_blank" href="https://api.whatsapp.com/send?phone=+919319150688"><img src="../Images/whatsapp.svg" /></a>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
