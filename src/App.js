import './App.css';
import React, {useEffect, useRef, useState} from 'react';
import {TweenLite, Power3} from 'gsap';


function App() {

  const[timerDays, setTimerDays] = useState('00');
  const[timerMinutes, setTimerMinutes] = useState('00');
  const[timerHours, setTimerHours] = useState('00');
  const[timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  let timerRef = useRef(null);
  let h1Ref = useRef(null);
  let h2Ref = useRef(null);

  const startTimer = () => {
    console.log("abcd")
    const countdownDate = new Date('February 20, 2021 00:00:00').getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      if(days < 10){
        days = "0" + String(days);
      }
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      if(hours < 10){
        hours = "0" + String(hours);
      }
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      if(minutes < 10){
        minutes = "0" + minutes;
      }
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if(seconds < 10){
        seconds = "0" + seconds;
      }
      console.log(seconds);
      if(distance < 0){

      }
      else{
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };


  useEffect(() => {
    startTimer();
    
    TweenLite.to(
      h1Ref,
      0.8,
      {
        opacity: 1,
        y: -40,
        ease: Power3.easeOut,
        delay: 0
      }
    )

    TweenLite.to(
      h2Ref,
      0.8,
      {
        opacity: 1,
        y: -30,
        ease: Power3.easeOut,
        delay: 0.3
      }
    )

    TweenLite.to(
      timerRef,
      0.8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
        delay: 1
      }
    )

    return () => {
      clearInterval(interval.current);
    }
  });

  return (
    <header>
    <div class="content">
      {/* <div className="logo">
        <img src="./logo.png"></img>
      </div> */}
      <h1 ref={el => {h1Ref = el}}><span>IZ</span>ART</h1>
      <h2 ref={el => {h2Ref = el}}>COMING SOON</h2>
      <div
      ref={el => {timerRef = el}}
      class="countdown">{timerDays} :  {timerHours}  : {timerMinutes}  : {timerSeconds}</div>
    </div>
  </header>
  );
}

export default App;
