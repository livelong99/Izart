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
					<br/><p>Izart is home to Data-Driven Story Tellers. We are obsessed with helping businesses scale up their operations with the help of premium Content Marketing services. We excel in weaving stories around your brand that convert a passive reader to an active consumer. We understand Data but more importantly, we understand Humans.</p>
				{/* <ul class="sci">
					<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
					<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
					<li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
					<li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
				</ul> */}
			</div>
			<div class ="sec contact">
				<h2>Contact Info</h2>
				<ul class="info">
					<li>
						<span><i class="fa fa-phone" aria-hidden="true"></i></span>
						<p><a href="tel:9711106474">+91 9711106474</a></p>
					</li>
					<li>
						<span><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
						<p><a href="mailto:operations@izart.in">operations@izart.in</a></p>
					</li>
				</ul>
			</div>
			</div>
			
			
		</footer>
		</div>
    )
}

export default Footer;