import React, { Component } from 'react';
import Contact from "./Contact";
import Cv from "./Cv";
import Education from "./Education";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import About from "./About";

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <React.Fragment>
                <About />
                <Skills />
                <Portfolio />
                <Education />
                <Cv />
                <Contact />
            </React.Fragment>
        );
    }
}

export default index;