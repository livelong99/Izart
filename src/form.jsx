import './App.css';
import './App1.css';
import './serv.css';
import React, {useEffect, useRef, useState} from 'react';

const Form = () => {
    return(
        <div class="container-contact1">
			<form class="contact1-form validate-form">
				<span class="contact1-form-title">
					Contact Us
				</span>
				<div class="wrap-input1 validate-input" data-validate = "Name is required">
					<input class="input1" type="text" name="name" placeholder="Name" />
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input class="input1" type="text" name="email" placeholder="Email" />
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Phone Number is required">
					<input class="input1" type="text" name="phone" placeholder="Phone Number" />
					<span class="shadow-input1"></span>
				</div>

                <div class="wrap-input1">
					<input class="input1" type="text" name="company" placeholder="Company Name (optional)" />
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1">
					<textarea class="input1" name="message" placeholder="Message"></textarea>
					<span class="shadow-input1"></span>
				</div>

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