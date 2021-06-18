import React, {useEffect, useState, useRef} from "react";
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
init('user_ah3R5WTGGoVeYf685FTgn');

const NewsLetter = ({t}) => {

	const [contactNumber, setContactNumber] = useState("000000");
	const form = useRef(null);
	const [sub, setSub] = useState(0);

	const [close, setClose] = useState(0);

	const { register, handleSubmit, watch, errors } = useForm();

	const onSubmit = (data) => {
		generateContactNumber();  
		sendForm('news_letter', 'template_dpfrkso', '#news_letter')
			.then(function(response) {
			document.querySelector(".login-popup").classList.remove("show");
			setClose(1);
			setSub(1);
			}, function(error) {
			console.log('FAILED...', error);
			});
		console.log(data);

	};

	const generateContactNumber = () => {
		const numStr = "000000" + (Math.random() * 1000000 | 0);
		setContactNumber(numStr.substring(numStr.length - 6));
	  }
	
	function showPopup(){
        const timeLimit = 10 // seconds;
        let i=0;
		
		const timer = setInterval(function(){
			i++;
			if(i == timeLimit && close==0){
				clearInterval(timer);
				document.getElementById("news").classList.add("show");
			} 
			},1000);   
  }

  useEffect(() => {
	  if(close == 0)
	  	showPopup();
  })

    return(
        <>
        <div id="news" class="login-popup">
  	 <div class="box">
  	 	 <div class="img-area">

          <img src="Images/newsletter.png" width="300" height="400" alt="" />


  	 	 </div>
  	 	 <div class="form">
  	 	 	<div onClick={() => {document.querySelector(".login-popup").classList.remove("show"); setClose(1)}} class="close">&times;</div>
  	 	 	<h1>Subscribe to our weekly newsletter to know about all the developments in the world of Marketing</h1>
  	 	 	<form id="news_letter" onSubmit={handleSubmit(onSubmit)}>
  	 	 		<div class="form-group">
  	 	 			<input type="text" name="fname" placeholder="First Name" class="form-control" ref={register} />
  	 	 		</div>
  	 	 		<div class="form-group">
  	 	 			<input type="text" name="lname" placeholder="Last Name" class="form-control" ref={register} />
  	 	 		</div>
  	 	 		<div class="form-group">
  	 	 			<input type="email" name="email" placeholder="Email" class="form-control" ref={register} />
  	 	 		</div>
					<input type='hidden' name='contact_number' value={contactNumber} />
  	 	 		<button type="submit" class="btn">Subscribe</button>
  	 	 	</form>
  	 	 </div>
  	 </div>
  </div>
  </>
    )
}

export default NewsLetter;