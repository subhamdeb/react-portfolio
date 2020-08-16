import React,{Component} from 'react';
import reactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import '../style/Home.css'

const lis = [<li className=""><Link to="/">HOME</Link></li>,<li><a href="#">RESUME</a></li>, <li><a href="#">PROJECT</a></li>,<li><a href="#">CONTACT</a></li>]

const header = (props) =>{

    
    return(
        <>
        <div className="container">
            <div className="row mt-3">
                <div className="col-md-4 offset-md-1 col-12 name-head-bar">
                    <div className="name-head">Subham Deb</div>
                    <div className="prof-head">Web/App Developer</div>
                </div>
                <div className="col-md-7 col-12 d-flex align-self-end"> 
                    <ul className="menu-ul">
                       {lis.map(st => st)}
                    </ul>
                </div>
            </div>
        </div>
        </>

    )

}


export default header