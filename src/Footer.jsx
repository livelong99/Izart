import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

const Footer = () => {
    return(
		<div class="foot">
        <footer>
			<div class="container">
				<div class="sec aboutus">
					<h2>About Us</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				<ul class="sci">
					<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
					<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
					<li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
					<li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
				</ul>
			</div>
			<div class ="sec quick">
				<h2>Quick Links</h2>
				<ul class="links">
					<li><a href="#">Home</a></li>
					<li><a href="#">Services</a></li>
					<li><a href="#">Resource</a></li>
					<li><a href="#">Industries</a></li>
				</ul>
			</div>
			<div class ="sec contact">
				<h2>Contact Info</h2>
				<ul class="info">
					<li>
						<span><i class=" loc fa fa-map-marker" aria-hidden="true"></i></span>
						<span>Jaipur Express<br/>near Manipal University Jaipur<br/>India</span>
					</li>
					<li>
						<span><i class="fa fa-phone" aria-hidden="true"></i></span>
						<p><a href="tel:9319150688">+91 9319150688</a></p>
					</li>
					<li>
						<span><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
						<p><a href="mailto:izart@gmail.com">izart@gmail.com</a></p>
					</li>
				</ul>
			</div>
			</div>
			
			
		</footer>
		</div>
    )
}

export default Footer;