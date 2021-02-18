// import './css/nav.css'
import './App.css';
import './App1.css';
import React, {useEffect, useRef, useState} from 'react';
import Typical from "react-typical";
import NavigationBar from "./navigationBar.jsx"
import ThreeC from "./threeC";
import OurWork from "./ourWork";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import dimensions from "./Dimensions";
import Home from "./Home"
import Services from "./Services"
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
      <NavigationBar></NavigationBar>
      <Router>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
        </Switch>
      </Router>
      <a data-aos="fade-up" data-aos-delay="2500" data-aos-offset="50" data-aos-duration="500" class="whatsapp" target="_blank" href="https://api.whatsapp.com/send?phone=+919319150688"><img src="Images/whatsapp.svg" /></a>
      <Footer />
    </div>
  );
}

export default App;
