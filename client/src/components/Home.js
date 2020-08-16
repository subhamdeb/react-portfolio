import React from 'react';


import dp from '../images/dp.jpg';
import facebook from '../images/facebook.png';

import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';
import github from '../images/github.png';
import '../style/Home.css'
import {Link} from 'react-router-dom'
const Home = () =>{
    return(
        <>
        <div className="container">
            <div className="row mt-3">
                <div className="col-md-4 offset-md-1 col-12 text-center">
                    <div className="name-head">Subham Deb</div>
                    <div className="prof-head">Web/App Developer</div>
                </div>
                <div className="col-md-7 col-12 d-flex  align-self-md-end align-self-am-center"> 
                    <ul className="menu-ul d-flex justify-content-between">
                        <li className="active"><a className="amenu">HOME</a></li>
                        <li><Link to="/resume"><a className="amenu">RESUME</a></Link></li>
                        <li><Link to="/project"><a className="amenu">PROJECT</a></Link></li>
                        <li><Link to="/contact"><a className="amenu">CONTACT</a></Link></li>
                    </ul>
                </div>
            </div>
            <div className="row mr-body">
                <div className="col-sm-12 text-center col-md-6">
                    <img className="dp-image" src={dp} />
                </div>
                <div className="col-12 col-md-6">
                    <div className="big-hello col-12">Hello,</div>
                    <div className="lit">a bit about me:</div>
                    <div className="col-12 col-md-12 d-flex justify-content-between colorbox-head bbx">
                        <a href=""><div className="colorbox box1-color" ><p className="globe-text">Working on</p></div></a>
                        <a href=""><div className="colorbox box2-color"><p className="globe-text">My Works</p></div></a>
                        <a href=""><div className="colorbox box3-color"><p className="globe-text">My Goals</p></div></a>
                    </div>
                    <div className="col-md-10 col-12">
                        <p className="details">I have more than 3 years experience in Web Design. I am a Full Stack Webdeveloper(MERN).I'm also working with Nextjs,Bootstrap and others usefull libraries, And My future goals are Working with Robotics, IoT and Artificial Intelligence...</p>
                        <p className="details"></p>
                    </div>
                </div>
                
            </div>
        </div>
        {/* container first complete */}
        <div className="container-fluid footer-bg">
            <div className="social col-12 d-flex justify-content-center">
                <div className="col-2 footer-items"><a href="https://www.facebook.com/subham.deb.1253" target="block" className="social-items"><img className="footer-icon" src={facebook} /></a></div>
                <div className="col-2 footer-items"><a href="https://twitter.com/subham_deb_" target="block" className="social-items"><img className="footer-icon" src={twitter} /></a></div>
                <div className="col-2 footer-items"><a href="https://linkedin.com/in/subham-deb-771937156" target="block" className="social-items"><img className="footer-icon" src={linkedin} /></a></div>
                <div className="col-2 footer-items"><a href="https://github.com/subhamdeb" target="block" className="social-items"><img className="footer-icon" src={github} /></a></div>
                <div className="col-2 footer-items"><a href="https://instagram.com/subham.deb.1253" target="block" className="social-items"><img className="footer-icon" src={instagram} /></a></div>
            </div>
        </div>
        </>
    )
}

export default Home;