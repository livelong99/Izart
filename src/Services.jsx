import './App.css';
import './App1.css';
import './serv.css';
import React, {useEffect, useRef, useState} from 'react';
import NavigationBar from "./navigationBar.jsx"
import Footer from "./Footer";
import Form from "./form"
import dimensions from "./Dimensions";

const Service = () => {

    const write = useRef(null);
    const frm = useRef(null);

    const formfunc = () => {
        return(
            <div ref={frm} class="container-contact1">
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
                                Send Email
                                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    


    return(
        <div>
            <NavigationBar />
            
            <div class="headServ"></div>
            <div class="servForm"></div>
            <div class="servContent">
                {formfunc()}
                <div ref={write} class="writeUp"></div>
                <div class="graphics">
                    <div class="blank-start"></div>
                    <div class="blk">
                        <div class="blkContent">
                            <div class="blkHead"><p>Header</p></div>
                            <div class="blkBdy"><p>id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut </p></div>

                        </div>
                        <img class="tri-2" src="Images/triangle02.svg" />
                        <img class="tri-1" src="Images/triangle.svg" />
                    </div>
                    <div class="blk">
                        <div class="blkContent">
                            <div class="blkHead"><p>Header</p></div>
                            <div class="blkBdy"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p></div>

                        </div>
                        <img class="tri-2" src="Images/triangle02.svg" />
                        <img class="tri-1" src="Images/triangle.svg" />
                    </div>
                    <div class="blk">
                        <div class="blkContent">
                            <div class="blkHead"><p>Header</p></div>
                            <div class="blkBdy"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p></div>
                        </div>
                        <img class="tri-2" src="Images/triangle02.svg" />
                        <img class="tri-1" src="Images/triangle.svg" />
                    </div>
                    <div class="blk">
                        <div class="blkContent">
                            <div class="blkHead"><p>Header</p></div>
                            <div class="blkBdy"><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p></div>
                        </div>
                        <img class="tri-2" src="Images/triangle02.svg" />
                        <img class="tri-1" src="Images/triangle.svg" />
                    </div>
                    <div class="blk">
                        <div class="blkContent">
                            <div class="blkHead"><p>Header</p></div>
                            <div class="blkBdy"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p></div>
                        </div>
                        <img class="tri-2" src="Images/triangle02.svg" />
                        <img class="tri-1" src="Images/triangle.svg" />
                    </div>
                    <div class="blank-end"></div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Service;