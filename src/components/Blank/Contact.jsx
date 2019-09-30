import React, { Component } from 'react';
import "./Contact.css";



class contact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <React.Fragment>
                <div className="contactme">
                    <span className="greetingtxt"><h2>here you can find me</h2> </span>
                    <div className="contactform">

                        <form action="" method="post" >
                            <input type="text" className="fullname" placeholder="fullname" />
                            <input type="email" className="email" placeholder="email" />
                            <textarea name="" id="" cols="30" rows="10" className="textmessage" placeholder="please do tell me what you do want  here ...!"></textarea>
                            <input type="button" className=" btn submitform" value="send" />
                        </form>
                        <div className="socials">
                            <a href="#" className="soci social1">  <img src={require("../../ress/images/sea.jpg")} alt="" />    </a>
                            <a href="#" className="soci social2">  <img src={require("../../ress/images/sea.jpg")} alt="" />    </a>
                            <a href="#" className="soci social3">  <img src={require("../../ress/images/sea.jpg")} alt="" />    </a>
                            <a href="#" className="soci social4">  <img src={require("../../ress/images/sea.jpg")} alt="" />    </a>
                            <a href="#" className="soci social5">  <img src={require("../../ress/images/sea.jpg")} alt="" />    </a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default contact;








