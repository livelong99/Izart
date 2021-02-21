import './css/nav.css'
import './App1.css';
import React, {useEffect, useRef, useState} from 'react';
import dimensions from "./Dimensions";

export default function NavigationBar() {

    const menuRef = useRef(null);
    const navRef = useRef(null);
    const [mainMen , setMain] = useState(0);
    const [menuO, setMenuO] = useState(false);
    const [serv, setServ] = useState(0);
    const {width} = dimensions();
    const meg01 = useRef(null);
    const meg02 = useRef(null);
    const navBg = useRef(null);
    var n = 0;

    function setMenu(){
        if(mainMen == 0){
            setServ(0);
            navBg.current.style.display = "none";
            // navBg.current.style.zIndex = "-20";
            meg01.current.style.top = "85px";
            meg02.current.style.top = "85px";
            meg01.current.style.opacity = "0";
            meg01.current.style.visibility = "hidden";
            meg02.current.style.opacity = "0";
            meg02.current.style.visibility = "hidden";

        }
        else if(mainMen == 1){
            navBg.current.style.display = "block";
            meg01.current.style.top = "70px";
            meg02.current.style.top = "85px";
            meg01.current.style.opacity = "1";
            meg01.current.style.visibility = "visible";
            meg02.current.style.opacity = "0";
            meg02.current.style.visibility = "hidden";
        }
        else if(mainMen == 2){
            setServ(0);
            navBg.current.style.display = "block";
            meg01.current.style.top = "85px";
            meg02.current.style.top = "70px";
            meg01.current.style.opacity = "0";
            meg01.current.style.visibility = "hidden";
            meg02.current.style.opacity = "1";
            meg02.current.style.visibility = "visible";
        }
    }


    useEffect(() => {
        if(n==0 && width>970){
            n = 1
            setMenu();
        }
            
    })


    function ServiceBox(){

        console.log(serv);

        if(serv==0){
            return(
                <div class="row main-hd">
                    <div class="contact">
                        <p>Need help figuring out, which service to use?</p>
                    </div>
                    <div class="cont-btn">
                        <p>Contact Us Now</p>
                    </div>
                </div>
            );
        }
        else if(serv == 1){
            return(<div class="row">
                <ul class="mega-links">
                <li><a href="#">Technical Articles</a></li>
                <li><a href="#">SEO Articles</a></li>
                <li><a href="#">Informative Articles</a></li>
                <li><a href="#">Product Based Articles</a></li>
                </ul>
            </div>)
        }
        else if(serv == 2){
            return(<div class="row">
                <ul class="mega-links">
                <li><a href="#">Facebook Post Writing </a></li>
                <li><a href="#">Twitter Posts</a></li>
                <li><a href="#">LinkedIn Content for Business</a></li>
                <li><a href="#">Instagram Strategy {"&"} Content </a></li>
                <li><a href="#">Quora Post</a></li>
                </ul>
            </div>)
        }
        else if(serv == 3){
            return(<div class="row">
                <ul class="mega-links">
                <li><a href="#">Website Blogs</a></li>
                <li><a href="#">Business Blogs </a></li>
                <li><a href="#">Affiliate Blogs</a></li>
                </ul>
            </div>)
        }
        else if(serv==4){
            return(<div class="row">
                <ul class="mega-links">
                <li><a href="#">LOR </a></li>
                <li><a href="#">SOP </a></li>
                <li><a href="#">Resume {"&"} CV</a></li>
                <li><a href="#">Cover Letter </a></li>
                <li><a href="#">Research Paper</a></li>
                </ul>
            </div>)
        }
    }


    function MegaMen(){
        if(width <= 970){
            return(
                <li >
                <a href="#" class="desktop-item">Services</a>
                <input type="checkbox" id="showMega" />
                <label for="showMega" class="mobile-item">Services</label>
                <div ref={meg01} class="mega-box">
                    <div class="content">
                    <div class="row">
                        <a href="#"><header>Whitepaper</header></a> 
                    </div>
                    <div class="row">
                        <a href="#"><header>Website Content</header></a>
                    </div>
                    <div class="row">
                        <a href="#"><header>Technical Writing</header></a>
                    </div>
                    <div class="row">
                        <a href="#"><header>Copywriting</header></a>
                    </div>
                    <div class="row">
                        <header>Article Writing</header>
                        <ul class="mega-links">
                        <li><a href="#">Technical Articles</a></li>
                        <li><a href="#">SEO Articles</a></li>
                        <li><a href="#">Informative Articles</a></li>
                        <li><a href="#">Product Based Articles</a></li>
                        </ul>
                    </div>
                    <div class="row">
                        <header>Social Media Content</header>
                        <ul class="mega-links">
                        <li><a href="#">Facebook Post Writing </a></li>
                        <li><a href="#">Twitter Posts</a></li>
                        <li><a href="#">LinkedIn Content for Business</a></li>
                        <li><a href="#">Instagram Strategy {"&"} Content </a></li>
                        <li><a href="#">Quora Post</a></li>
                        </ul>
                    </div>
                    <div class="row">
                        <header>Academics</header>
                        <ul class="mega-links">
                        <li><a href="#">LOR </a></li>
                        <li><a href="#">SOP </a></li>
                        <li><a href="#">Resume {"&"} CV</a></li>
                        <li><a href="#">Cover Letter </a></li>
                        <li><a href="#">Research Paper</a></li>
                        </ul>
                    </div>
                    <div class="row">
                        <header>Blog Writing</header>
                        <ul class="mega-links">
                        <li><a href="#">Website Blogs</a></li>
                        <li><a href="#">Business Blogs </a></li>
                        <li><a href="#">Affiliate Blogs</a></li>
                        </ul>
                    </div>  
                    </div>
                </div>
                </li>
            );
        }
        else{
            return(
                <li >
                <a onClick={() => {mainMen == 1 ? setMain(0) : setMain(1)}} href="javascript:void(0);" class="desktop-item">Services</a>
                <input type="checkbox" id="showMega" />
                <label for="showMega" class="mobile-item">Services</label>
                <div ref={meg01} class="mega-box">
                    <div class="content">
                    <div onClick={() => setServ(0)} class="row">
                        <ul onClick={() => setServ(0)} class="mega-links">
                        <li><a href="#">Whitepaper</a></li>
                        <li><a href="#">Website Content</a></li>
                        <li><a href="#">Technical Writing</a></li>
                        <li><a href="#">Copywriting</a></li>
                        </ul>
                    </div>
                    <div class="row">
                        <ul class="mega-links">
                        <li onClick={() => setServ(1)} ><a href="#">{ serv==1 ? <b>Article Writing</b> : "Article Writing" }</a>{ serv==1 ? <img src="Images/serArr.svg"/> : null }</li>
                        <li onClick={() => setServ(2)}><a href="#">{ serv==2 ? <b>Social Media Content</b> : "Social Media Content" }</a>{ serv==2 ? <img src="Images/serArr.svg"/> : null }</li>
                        <li onClick={() => setServ(3)}><a href="#">{ serv==3 ? <b>Blog Writing</b> : "Blog Writing" }</a>{ serv==3 ? <img src="Images/serArr.svg"/> : null }</li>
                        <li onClick={() => setServ(4)}><a href="#">{ serv==4 ? <b>Academics</b> : "Academics" }</a>{ serv==4 ? <img src="Images/serArr.svg"/> : null }</li>
                        </ul>
                    </div>
                    {ServiceBox()} 
                    </div>
                </div>
                </li>
            );
        }
    }

    function DropMen(){
        if(width <= 970){
            return(
                <li >
                    <a href="#" class="desktop-item">Industries</a>
                    <input type="checkbox" id="showDrop" />
                    <label for="showDrop" class="mobile-item">Industries</label>
                    <ul class="drop-menu">
                        <li><a href="#">Software and Technology </a></li>
                        <li><a href="#">Information Technology</a></li>
                        <li><a href="#">Marketing {"&"} Advertisement</a></li>
                        <li><a href="#">Finance</a></li>
                        <li><a href="#">E-Commerce</a></li>
                        <li><a href="#">Academics</a></li>
                        <li><a href="#">Events and Hospitality</a></li>
                        <li><a href="#">Healthcare and Sciences</a></li>
                        <li><a href="#">Fashion </a></li>
                        <li><a href="#">Lifestyle</a></li>
                        <li><a href="#">Travel</a></li>
                        <li><a href="#">Entertainment</a></li>
                        <li><a href="#">Government</a></li>
                        <li><a href="#">Sports and Fitness</a></li>
                        <li><a href="#">Legal</a></li>
                    </ul>
                </li>
            );
        }
        else{
            return(
                <li>
                <a onClick={() => {mainMen == 2 ? setMain(0) : setMain(2)}} href="javascript:void(0);" class="desktop-item">Industries</a>
                <input type="checkbox" id="showMega" />
                <label for="showMega" class="mobile-item">Industries</label>
                <div ref={meg02} class="mega-box">
                    <div class="content">
                    <div class="row">
                        <ul class="mega-links">
                        <li><a href="#">Software and Technology </a></li>
                        <li><a href="#">Information Technology</a></li>
                        <li><a href="#">Marketing {"&"} Advertisement</a></li>
                        <li><a href="#">Finance</a></li>
                        <li><a href="#">E-Commerce</a></li>
                        </ul>
                    </div>
                    <div class="row">
                        <ul class="mega-links">
                        <li><a href="#">Academics</a></li>
                        <li><a href="#">Events and Hospitality</a></li>
                        <li><a href="#">Healthcare and Sciences</a></li>
                        <li><a href="#">Fashion </a></li>
                        <li><a href="#">Lifestyle</a></li>
                        </ul>
                    </div>
                    <div class="row">
                        <ul class="mega-links">
                        <li><a href="#">Travel</a></li>
                        <li><a href="#">Entertainment</a></li>
                        <li><a href="#">Government</a></li>
                        <li><a href="#">Sports and Fitness</a></li>
                        <li><a href="#">Legal</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </li>
            );
        }
    }


    const menuClick = (e) => {
        if(!menuO){
            menuRef.current.classList.add('open');
            navRef.current.style.left = "0%"
            setMenuO(true);
        }
        else{
            menuRef.current.classList.remove('open');
            setMenuO(false);
            navRef.current.style.left = "-110%"
        }
    }

    return(<div data-aos="fade-down" data-aos-delay="2500" data-aos-offset="50" data-aos-duration="500"> 
        <nav>
            <div class="wrapper">
            <div ref={navBg} onClick={() => setMain(0)} class="navBg" />
            <div class="logo"><a href="">izart</a></div>
            <div  ref={menuRef} onClick={menuClick} class="menu-btn">
                <div class="menu-btn__burger"></div>
            </div>
            <ul ref={navRef} class="nav-links">
                {width>=970 ? null : (<li class="logo"><a href="#" class="desktop-item">izart</a><a href="#" class="mobile-item">izart</a></li>)}
                
                <MegaMen />

                <DropMen />

                <li><a href="#" class="desktop-item">Resources</a><a href="#" class="mobile-item">Resources</a></li>
                <li class="btn-text"><a href="#" class="desktop-item">Book a Call</a><a href="#" class="mobile-item">Book a Call</a></li>
                
            </ul>
            </div>
        </nav>
    </div>   
    );
}

