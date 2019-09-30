import React, { Component } from 'react';
import "./About.css";

class About extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="bgabout aboutwrap">
                    <h1>i want to   </h1>
                    <img src={require("../../ress/images/ab.jpg")} alt="" />
                    <h1> my vision  </h1>
                </div>
                <div className="lowheader">
                    About Me
                </div>
            </React.Fragment>
        );
    }
}

export default About;