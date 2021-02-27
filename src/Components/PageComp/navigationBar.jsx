// import './css/nav.css'
// import './App1.css';
import React, {useEffect, useRef, useState} from 'react';
import dimensions from "../../OtherFiles/Dimensions";
import {
    Link
  } from "react-router-dom";

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
            n = 1;
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
            <header onClick={() => {setMain(0)}}><Link style={{color:"#303778", fontSize:"22px", fontWeight:"700"}} to="/services/articles">Article Writing</Link></header>
                <ul class="mega-links">
                    <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/services/technical+articles"><a href="#">Technical Articles</a></Link></li>
                    <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/services/seo"><a href="#">SEO Articles</a></Link></li>
                    <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/services/informative+articles"><a href="#">Informative Articles</a></Link></li>
                    <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/services/product+based"><a href="#">Product Based Articles</a></Link></li>
                </ul>
            </div>)
        }
        else if(serv == 2){
            return(<div class="row">
            <header><Link style={{color:"#303778", fontSize:"22px", fontWeight:"700"}}>Social Media Content</Link></header>
                <ul class="mega-links">
                    <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/services/facebook"><a href="#">Facebook Post Writing </a></Link></li>
                    <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/services/twitter"><a href="#">Twitter Posts</a></Link></li>
                    <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/services/linkedin"><a href="#">LinkedIn Content for Business</a></Link></li>
                    <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/services/instagram"><a href="#">Instagram Strategy {"&"} Content </a></Link></li>
                </ul>
            </div>)
        }
        else if(serv == 3){
            return(<div class="row">
            <header onClick={() => {setMain(0)}}><Link style={{color:"#303778", fontSize:"22px", fontWeight:"700"}} to="/services/blog">Blog Writing</Link></header>
                <ul class="mega-links">
                <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><a href="#">Website Blogs</a></li>
                <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><a href="#">Business Blogs </a></li>
                <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><a href="#">Affiliate Blogs</a></li>
                </ul>
            </div>)
        }
        else if(serv==4){
            return(<div class="row">
                <header><Link style={{color:"#303778", fontSize:"22px", fontWeight:"700"}}>Acedamics</Link></header>
                <ul class="mega-links">
                    <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/services/lor"><a href="#">LOR </a></Link></li>
                    <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/services/sop"><a href="#">SOP </a></Link></li>
                    <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/services/resume"><a href="#">Resume {"&"} CV</a></Link></li>
                    <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/services/cover+letter"><a href="#">Cover Letter </a></Link></li>
                    <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/services/research+paper"><a href="#">Research Paper</a></Link></li>
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
                    <div onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} class="row">
                        <Link to="/services/whitepaper"><a href="#"><header>Whitepaper</header></a></Link> 
                    </div>
                    <div onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} class="row">
                        <Link to="/services/website+content"><a href="#"><header>Website Content</header></a></Link>
                    </div>
                    <div onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} class="row">
                        <Link to="/services/technical+writing"><a href="#"><header>Technical Writing</header></a></Link>
                    </div>
                    <div onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} class="row">
                        <Link to="/services/copywriting"><a href="#"><header>Copywriting</header></a></Link>
                    </div>
                    <div class="row">
                    <a href="#"><header>Article Writing</header></a>
                        <ul class="mega-links">
                        <li onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} ><Link to="/services/technical+articles"><a href="#">Technical Articles</a></Link></li>
                        <li onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} ><Link to="/services/seo"><a href="#">SEO Articles</a></Link></li>
                        <li onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} ><Link to="/services/informative+articles"><a href="#">Informative Articles</a></Link></li>
                        <li onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} ><Link to="/services/product+based"><a href="#">Product Based Articles</a></Link></li>
                        </ul>
                    </div>
                    <div class="row">
                    <a href="#"><header>Social Media Content</header></a>
                        <ul class="mega-links">
                        <li onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} ><Link to="/services/facebook"><a href="#">Facebook Post Writing </a></Link></li>
                        <li onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} ><Link to="/services/twitter"><a href="#">Twitter Posts</a></Link></li>
                        <li onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} ><Link to="/services/linkedin"><a href="#">LinkedIn Content for Business</a></Link></li>
                        <li onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} ><Link to="/services/instagram"><a href="#">Instagram Strategy {"&"} Content </a></Link></li>
                        <li onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} ><Link to="/services/quora"><a href="#">Quora Post</a></Link></li>
                        </ul>
                    </div>
                    <div class="row">
                    <a href="#"><header>Academics</header></a>
                        <ul class="mega-links">
                        <li onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} ><Link to="/services/lor"><a href="#">LOR </a></Link></li>
                        <li onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} ><Link to="/services/sop"><a href="#">SOP </a></Link></li>
                        <li onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} ><Link to="/services/resume"><a href="#">Resume {"&"} CV</a></Link></li>
                        <li onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} ><Link to="/services/cover+letter"><a href="#">Cover Letter </a></Link></li>
                        <li onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} ><Link to="/services/research"><a href="#">Research Paper</a></Link></li>
                        </ul>
                    </div>
                    <div class="row">
                    <a href="#"><header>Blog Writing</header></a>
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
                        <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/services/whitepaper"><a href="#">Whitepaper</a></Link></li>
                        <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/services/website+content"><a href="#">Website Content</a></Link></li>
                        <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/services/technical+writing"><a href="#">Technical Writing</a></Link></li>
                        <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/services/copywriting"><a href="#">Copywriting</a></Link></li>
                        </ul>
                    </div>
                    <div class="row">
                        <ul class="mega-links">
                        <li onClick={() => setServ(1)} ><a href="#">{ serv==1 ? <b>Article Writing</b> : "Article Writing" }</a>{ serv==1 ? <img src="../Images/serArr.svg"/> : null }</li>
                        <li onClick={() => setServ(2)}><a href="#">{ serv==2 ? <b>Social Media Content</b> : "Social Media Content" }</a>{ serv==2 ? <img src="../Images/serArr.svg"/> : null }</li>
                        <li onClick={() => setServ(3)}><a href="#">{ serv==3 ? <b>Blog Writing</b> : "Blog Writing" }</a>{ serv==3 ? <img src="../Images/serArr.svg"/> : null }</li>
                        <li onClick={() => setServ(4)}><a href="#">{ serv==4 ? <b>Academics</b> : "Academics" }</a>{ serv==4 ? <img src="../Images/serArr.svg"/> : null }</li>
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
                        <li onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} ><Link to="/industries/software+technology"><a href="#">Software and Technology </a></Link></li>
                        <li onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} ><Link to="/industries/information+technology"><a href="#">Information Technology</a></Link></li>
                        <li onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} ><Link to="/industries/marketing+advertisement"><a href="#">Marketing {"&"} Advertisement</a></Link></li>
                        <li onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} ><Link to="/industries/finance"><a href="#">Finance</a></Link></li>
                        <li onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} ><Link to="/industries/ecommerce"><a href="#">E-Commerce</a></Link></li>
                        <li onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} ><Link to="/industries/academics"><a href="#">Academics</a></Link></li>
                        <li onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} ><Link to="/industries/events+hospitality"><a href="#">Events and Hospitality</a></Link></li>
                        <li onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} ><Link to="/industries/healthcare+sciences"><a href="#">Healthcare and Sciences</a></Link></li>
                        <li onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} ><Link to="/industries/fashion"><a href="#">Fashion </a></Link></li>
                        <li onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} ><Link to="/industries/travel"><a href="#">Lifestyle</a></Link></li>
                        <li onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} ><Link to="/industries/entertainment"><a href="#">Travel</a></Link></li>
                        <li onClick={() =>{menuClick(); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}} ><Link to="/industries/sports+fitness"><a href="#">Entertainment</a></Link></li>
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
                        <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/industries/software+technology"><a href="#">Software and Technology </a></Link></li>
                        <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/industries/information+technology"><a href="#">Information Technology</a></Link></li>
                        <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/industries/marketing+advertisement"><a href="#">Marketing {"&"} Advertisement</a></Link></li>
                        <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/industries/finance"><a href="#">Finance</a></Link></li>
                        </ul>
                    </div>
                    <div class="row">
                        <ul class="mega-links">
                        <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/industries/ecommerce"><a href="#">E-Commerce</a></Link></li>
                        <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/industries/academics"><a href="#">Academics</a></Link></li>
                        <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/industries/events+hospitality"><a href="#">Events and Hospitality</a></Link></li>
                        <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/industries/healthcare+sciences"><a href="#">Healthcare and Sciences</a></Link></li>
                        </ul>
                    </div>
                    <div class="row">
                        <ul class="mega-links">
                        <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/industries/fashion"><a href="#">Fashion </a></Link></li>
                        <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/industries/travel"><a href="#">Lifestyle</a></Link></li>
                        <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/industries/entertainment"><a href="#">Travel</a></Link></li>
                        <li onClick={() => {setMain(0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}><Link to="/industries/sports+fitness"><a href="#">Entertainment</a></Link></li>
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

    return(<div> 
        <nav>
            <div class="wrapper">
            <div ref={navBg} onClick={() => setMain(0)} class="navBg" />
            <div class="logo"><Link to="/"><a href="">izart</a></Link></div>
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

