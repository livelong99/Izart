import './css/nav.css';
import './css/serv.css';
import './css/App.css';
import "./css/types.css";
import './css/App1.css';
import React, {useRef, useState, useEffect} from 'react';
import Types2 from "./Components/Types/Types2";
import Types1 from "./Components/Types/Types1.jsx";
import Types3 from "./Components/Types/Types3.jsx";
import NavigationBar from "./Components/PageComp/navigationBar.jsx"
import Footer from "./Components/PageComp/Footer";
import dimensions from "./OtherFiles/Dimensions";
import Home from "./Components/Home/Home"
import Services from "./Components/Services/Services"
import servData from "./OtherFiles/service.json";
import indusData from "./OtherFiles/indus.json";
import typesData from "./OtherFiles/types.json";
import Industries from "./Components/Industries/Industries"
import Load from './Components/Home/preloader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  const loadRef = useRef(null);
  const {width} = dimensions();

  const [load, setLoad] = useState(1);
  const dt = new Date();

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom >= 0 &&
        rect.right >= 0
    );
  }


  return (
    <div>
      <div>
      <Router>
      <Load />
      <NavigationBar></NavigationBar>
      <Switch>
          <Route path="/" exact component={Home} />
          {servData.map(serv => (
            <Route path={"/services/" + serv.link} exact><Load /><Services data={serv} /></Route>
          ))}
          {indusData.map(indus => (
            <Route path={"/industries/" + indus.link} exact><Load /><Industries data={indus} /></Route>
          ))}
          <Route path={"/types/01"} exact><Load /><Types1/></Route>
          <Route path={"/types/02"} exact><Load /><Types2/></Route>
          <Route path={"/types/03"} exact><Load /><Types3/></Route>
        </Switch>
        <a data-aos="fade-up" data-aos-delay="2500" data-aos-offset="50" data-aos-duration="500" class="whatsapp" target="_blank" href="https://api.whatsapp.com/send?phone=+919711106474"><img src="../Images/whatsapp.svg" /></a>
        <Footer />
      </Router>
    </div>
    </div>
  );
}

export default App;
