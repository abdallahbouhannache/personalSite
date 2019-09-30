import React, { Component } from 'react';
import "./Skills.css";

class skills extends Component {
    state = {

    }
    render() {
        return (
            <React.Fragment>
                <div className="skills">

                    <h1>developement</h1>
                    <div className="programming">
                        <div className="part Proglanguages">
                            <h2>languages</h2>
                            <img src={require("../../ress/images/icons/css3.png")} className="circle lang1" />
                            <img src={require("../../ress/images/icons/html5.png")} className="circle lang2" />
                            <img src={require("../../ress/images/icons/javascript.png")} className="circle lang3" />
                            <img src={require("../../ress/images/icons/csharp.png")} className="circle lang4" />
                            <img src={require("../../ress/images/icons/java.png")} className="circle lang5" />
                            <img src={require("../../ress/images/icons/empty.png")} className="circle lang6" />
                            <img src={require("../../ress/images/icons/empty.png")} className="circle lang7" />
                            <img src={require("../../ress/images/icons/empty.png")} className="circle lang8" />
                            <img src={require("../../ress/images/icons/empty.png")} className="circle lang9" />
                        </div>
                        <div className="part Frameworks">
                            <h2>frameworks</h2>
                            <img src={require("../../ress/images/icons/bootstrap.png")} className="circle framework1" />
                            <img src={require("../../ress/images/icons/sass.png")} className="circle framework2" />
                            <img src={require("../../ress/images/icons/nodejs.png")} className="circle framework3" />
                            <img src={require("../../ress/images/icons/react.png")} className="circle framework4" />
                            <img src={require("../../ress/images/icons/jquery.png")} className="circle framework5" />
                            <img src={require("../../ress/images/icons/empty.png")} className="circle framework6" />
                            <img src={require("../../ress/images/icons/empty.png")} className="circle framework7" />
                            <img src={require("../../ress/images/icons/empty.png")} className="circle framework8" />
                            <img src={require("../../ress/images/icons/empty.png")} className="circle framework9" />
                        </div>
                        <div className="part Tools">
                            <h2>tools</h2>
                            <img src={require("../../ress/images/icons/webpack.png")} className="circle tool1" />
                            <img src={require("../../ress/images/icons/figma.png")} className="circle tool2" />
                            <img src={require("../../ress/images/icons/git.png")} className="circle tool3" />
                            <img src={require("../../ress/images/icons/github.png")} className="circle tool4" />
                            <img src={require("../../ress/images/icons/photoshop.png")} className="circle tool5" />
                            <img src={require("../../ress/images/icons/empty.png")} className="circle tool6" />
                            <img src={require("../../ress/images/icons/empty.png")} className="circle tool7" />
                            <img src={require("../../ress/images/icons/empty.png")} className="circle tool8" />
                            <img src={require("../../ress/images/icons/empty.png")} className="circle tool9" />

                        </div>

                    </div>

                    <h1>networkings</h1>
                    <div className="networks">
                        <div className="protocols">
                            <h2>network fundamentals and protocols</h2>
                            <div className="wrplist wrpl1">
                                <h3> basic of networks</h3>
                                <ol>
                                    <li>os,tcp/ip mode</li>
                                    <li>ipv6 basics</li>
                                    <li>cisco ios interface (using simulators)</li>
                                    <li>..</li>
                                </ol>
                            </div>
                            <div className="wrplist wrpl2">
                                <h3>switching</h3>
                                <ol>
                                    <li>vtp,stp,vlans,port-security/filtering/mac@</li>
                                    <li>csma/cd</li>
                                </ol>
                            </div>
                            <div className="wrplist wrpl3">
                                <h3> routing</h3>
                                <ol>
                                    <li>static routing</li>
                                    <li>dynamic routing:
                                    <ul>
                                            <li>rip</li>
                                            <li>ospf</li>
                                            <li>eigrp</li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                            <div className="wrplist wrpl4">
                                <h3>others</h3>
                                <ol>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ol>
                            </div>
                        </div>
                        <div className="netwprogramming">
                            <h2>network programming</h2>
                            <ul>
                                <li>basic network troubleshooting:ping,tracert,arp...</li>
                                <li>discovering hosts programmatically using python</li>
                                <li>creating distributed app over nets using sockets</li>
                                <li>sniffing and discovering security flaws using packet sniffers(wireshark)</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default skills;