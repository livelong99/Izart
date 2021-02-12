import './css/nav.css'
import React, {useEffect, useRef, useState} from 'react';

export default function navigationBar() {
    return(
        <nav>
            <div class="logo">izart</div>
            <label for="btn" class="icon">
                <span class="fa fa-bars"></span>
            </label>
            <input type="checkbox" id="btn" />
            <ul>
                <li><a href="#">Home</a></li>
                <li>
                <label for="btn-1" class="show">Services +</label>
                <a href="#">Services</a>
                <input type="checkbox" id="btn-1" />
                <ul>
                    <li><a href="#">Whitepaper</a></li>
                    <li>
                    <label for="btn-3" class="show">Articles +</label>
                    <a href="#">Articles <span class="fa fa-plus"></span></a>
                    <input type="checkbox" id="btn-3" />
                    <ul>
                        <li><a href="#">Technical</a></li>
                        <li><a href="#">SEO</a></li>
                        <li><a href="#">Informative</a></li>
                        <li><a href="#">Product Based</a></li>
                    </ul>
                    </li>
                    <li>
                    <label for="btn-3" class="show">Blogs +</label>
                    <a href="#">Blogs <span class="fa fa-plus"></span></a>
                    <input type="checkbox" id="btn-3" />
                    <ul>
                        <li><a href="#">Website Blogs</a></li>
                        <li><a href="#">Business Blogs</a></li>
                        <li><a href="#">Affiliate Blogs</a></li>
                    </ul>
                    </li>
                    <li><a href="#">Web Copy</a></li>
                    <li>
                    <label for="btn-3" class="show">Technical Writing +</label>
                    <a href="#">Technical Writing <span class="fa fa-plus"></span></a>
                    <input type="checkbox" id="btn-3" />
                    <ul>
                        <li><a href="#">Product Description</a></li>
                        <li><a href="#">Product Review</a></li>
                        <li><a href="#">Business Proposals</a></li>
                        <li><a href="#">Press Release</a></li>
                    </ul>
                    </li>
                    <li>
                    <label for="btn-3" class="show">Social Media +</label>
                    <a href="#">Social Media<span class="fa fa-plus"></span></a>
                    <input type="checkbox" id="btn-3" />
                    <ul>
                        <li><a href="#">Facebook Post</a></li>
                        <li><a href="#">Twitter Posts</a></li>
                        <li><a href="#">LinkedIn for Business</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Quora Post</a></li>
                    </ul>
                    </li>
                    <li>
                    <label for="btn-3" class="show">Academics +</label>
                    <a href="#">Academics <span class="fa fa-plus"></span></a>
                    <input type="checkbox" id="btn-3" />
                    <ul>
                        <li><a href="#">LOR</a></li>
                        <li><a href="#">SOP</a></li>
                        <li><a href="#">Resume {"&"} CV</a></li>
                        <li><a href="#">Cover Letter</a></li>
                        <li><a href="#">Research Paper</a></li>
                    </ul>
                    </li>
                    <li>
                    <label for="btn-3" class="show">Copywriting Services +</label>
                    <a href="#">Copywriting <span class="fa fa-plus"></span></a>
                    <input type="checkbox" id="btn-3" />
                    <ul>
                        <li><a href="#">Rewriting</a></li>
                        <li><a href="#">Rephrase</a></li>
                        <li><a href="#">Editing</a></li>
                        <li><a href="#">Proofread</a></li>
                    </ul>
                    </li>
                </ul>
                </li>
                <li>
                <label for="btn-2" class="show">Industries +</label>
                <a href="#">Industries</a>
                <input type="checkbox" id="btn-2" />
                <ul>
                    <li><a href="#">Software and Technology </a></li>
                    <li><a href="#">Information Technology</a></li>
                    <li><a href="#">Marketing </a></li>
                    <li><a href="#">Finance</a></li>
                    <li><a href="#">E-Commerce</a></li>
                    <li><a href="#">Academics</a></li>
                    <li><a href="#">Events and Hospitality</a></li>
                    <li><a href="#">Healthcare and Sciences</a></li>
                    <li><a href="#">Fashion </a></li>
                    <li><a href="#">Lifestyle</a></li>
                    <li><a href="#">Travel</a></li>
                    <li><a href="#">Manufacturing</a></li>
                    <li><a href="#">Entertainment</a></li>
                    <li><a href="#">Government</a></li>
                    <li><a href="#">Sports and Fitness</a></li>
                    <li><a href="#">Legal</a></li>
                </ul>
                </li>
                <li><a href="#">Resources</a></li>
                <li class="btn-text"><a href="#">Book a Call</a></li>
            </ul>
        </nav>
    )
}

