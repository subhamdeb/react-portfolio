import React, { Component } from 'react'
import Header from './header';
import '../style/resume.css'
export default class Resume extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row offset-md-1 hgt">
                    <p className="resume_txt">Resume</p>
                    </div>
                </div>
            </div>
        )
    }
}
