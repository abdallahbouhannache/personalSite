import React, { Component } from 'react';
import "./Portfolio.css";


class portfolio extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="portoflio">
                    <div className="vanillajs">
                        <h2>vanilla js</h2>
                        <div className="jsw jswork1">  <a href="#">  <img src={require('../../ress/images/empty.jpg')} alt="" />   </a> </div>
                        <div className="jsw jswork2">  <a href="#">  <img src={require('../../ress/images/empty.jpg')} alt="" />   </a> </div>
                        <div className="jsw jswork3">  <a href="#">  <img src={require('../../ress/images/empty.jpg')} alt="" />   </a> </div>
                        <div className="jsw jswork4">  <a href="#">  <img src={require('../../ress/images/empty.jpg')} alt="" />   </a> </div>
                        <div className="jsw jswork5">  <a href="#">  <img src={require('../../ress/images/empty.jpg')} alt="" />   </a> </div>
                        <div className="jsw jswork6">  <a href="#">  <img src={require('../../ress/images/empty.jpg')} alt="" />   </a> </div>
                        <div className="jsw jswork7">  <a href="#">  <img src={require('../../ress/images/empty.jpg')} alt="" />   </a> </div>
                        <div className="jsw jswork8">  <a href="#">  <img src={require('../../ress/images/empty.jpg')} alt="" />   </a> </div>
                    </div>
                    <div className="framworks">
                        <h2>frameworks</h2>
                        <div className="reactjs">
                            <h2>reactjs</h2>
                            <div className="react workreact1"><a href="#">  <img src={require('../../ress/images/empty.jpg')} alt="" />   </a></div>
                            <div className="react workreact2"><a href="#">  <img src={require('../../ress/images/empty.jpg')} alt="" />   </a></div>
                            <div className="react workreact3"><a href="#">  <img src={require('../../ress/images/empty.jpg')} alt="" />   </a></div>
                            <div className="react workreact4"><a href="#">  <img src={require('../../ress/images/empty.jpg')} alt="" />   </a></div>
                        </div>
                        <div className="django">
                            <h2>django</h2>
                            <div className="dja workdjango1"><a href="#">  <img src={require('../../ress/images/empty.jpg')} alt="" />   </a></div>
                            <div className="dja workdjango2"><a href="#">  <img src={require('../../ress/images/empty.jpg')} alt="" />   </a></div>
                            <div className="dja workdjango3"><a href="#">  <img src={require('../../ress/images/empty.jpg')} alt="" />   </a></div>
                            <div className="dja workdjango4"><a href="#">  <img src={require('../../ress/images/empty.jpg')} alt="" />   </a></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}






export default portfolio;