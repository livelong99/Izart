// import './App.css';
// import './App1.css';
// import './serv.css';
import React, {useEffect, useRef, useState} from 'react';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
init('user_ah3R5WTGGoVeYf685FTgn');

const Form = () => {

	const [contactNumber, setContactNumber] = useState("000000");
	const form = useRef(null);

	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmit = (data) => {
		generateContactNumber();  
		sendForm('contact_form', 'template_qb96w4q', '#contact_us')
			.then(function(response) {
			console.log('SUCCESS!', response.status, response.text);
			form.current.reset();
			}, function(error) {
			console.log('FAILED...', error);
			});
		console.log(data);

	};

	const generateContactNumber = () => {
		const numStr = "000000" + (Math.random() * 1000000 | 0);
		setContactNumber(numStr.substring(numStr.length - 6));
	  }

    return(
        <div class="container-contact1">
			<form ref={form} id="contact_us" class="contact1-form validate-form" onSubmit={handleSubmit(onSubmit)}>
				<span class="contact1-form-title">
					Contact Us
				</span>
				<div class="wrap-input1 validate-input" data-validate = "Name is required">
					<input class="input1" type="text" name="name" placeholder="Name" ref={register}/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input class="input1" type="text" name="email" placeholder="Email" ref={register}/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Phone Number is required">
					<input class="input1" type="text" name="phone" placeholder="Phone Number" ref={register}/>
					<span class="shadow-input1"></span>
				</div>

                <div class="wrap-input1">
					<input class="input1" type="text" name="company" placeholder="Company Name (optional)" ref={register}/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1">
					<textarea class="input1" name="message" placeholder="Message" ref={register}></textarea>
					<span class="shadow-input1"></span>
				</div>
				<input type='hidden' name='contact_number' value={contactNumber} />

				<div class="container-contact1-form-btn">
					<button class="contact1-form-btn">
						<span>
							Submit
							<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
						</span>
					</button>
				</div>
			</form>
		</div>
    )
}

export default Form;