import './css/nav.css';
import './css/serv.css';
import './css/App.css';
import "./css/types.css";
import './css/App1.css';
import "./css/fonts/Times-New-Roman/stylesheet.css";
import React, {useRef, useState, useEffect} from 'react';
import Sign from './Components/Dashboard/signIn-signUp'
import Types2 from "./Components/Types/Types2";
import Types1 from "./Components/Types/Types1.jsx";
import Types3 from "./Components/Types/Types3.jsx";
import About from "./Components/Aboutus";
import NavigationBar from "./Components/PageComp/navigationBar.jsx"
import Footer from "./Components/PageComp/Footer";
import dimensions from "./OtherFiles/Dimensions";
import Home from "./Components/Home/Home"
import Services from "./Components/Services/Services"
import servData from "./OtherFiles/service.json";
import indusData from "./OtherFiles/indus.json";
import typesData from "./OtherFiles/types.json";
import Industries from "./Components/Industries/Industries"
import Dashboard from './Components/Dashboard'
import Load from './Components/Home/preloader';
import NewsLetter from "./Components/PageComp/NewsLetter";
import Privacy from "./Components/policies/Privacy.jsx";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";

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
        <Load tm={2000}/>
        {/* <NewsLetter/> */}
        <Switch>
          <Route path="/login" exact component={Sign}/>
          <Route path="/dashboard" exact><Dashboard sel={2} /></Route>
          <Route path="/dashboard/add" exact><Dashboard sel={1} /></Route>
          <Route path="/dashboard/cart" exact><Dashboard sel={3} /></Route>
          <Route path="/" exact><Home/></Route>
          <Route path="/about" exact><About/></Route>
          {servData.map(serv => (
            <Route path={"/services/" + serv.link} exact><Load /><Services data={serv} /></Route>
          ))}
          {indusData.map(indus => (
            <Route path={"/industries/" + indus.link} exact><Load /><Industries data={indus} /></Route>
          ))}
          <Route path={"/No+strings+attached"} exact><Load tm={1000} /><Types1/></Route>
          <Route path={"/Content+Omnipotent"} exact><Load tm={1000}/><Types2/></Route>
          <Route path={"/Residential+Wordsmith"} exact><Load tm={1000}/><Types3/></Route>
          <Route path={"/privacy+policy"} exact><Privacy/></Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
    </div>
  );
}

export default App;
