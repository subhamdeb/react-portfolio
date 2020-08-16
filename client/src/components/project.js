import React ,{Component} from 'react';
import Header from './header'
import '../style/project.css'
const Project = () =>{
    return(
        <>
        <Header active="Project"/>
        <div className="container">
           <div className="row offset-md-1 mt-5">
            <h3 className="lts-pro mt-5">LATEST PROJECTS</h3>
           </div>
        </div>
        </>
    )
}
export default Project