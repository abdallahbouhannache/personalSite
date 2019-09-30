import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SideBar from "./components/SidBar";

import Blank from "./components/Blank/index";
import Master_Detail from "./components/Master_Detail";
import Grid from "./components/Grid";
import List from "./components/List";
//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
  render() {

    return (
      <React.Fragment>
        <div className="mainApp">

          <SideBar />
          <div className="appbody">
            <NavBar />
            <Switch>
              <Redirect exact path="/" to="/Blank" />
              <Route path="/Blank" component={Blank} />
              <Route path="/Master_Detail" component={Master_Detail} />
              <Route path="/Grid" component={Grid} />
              <Route path="/List" component={List} />
            </Switch>
            {/* <Footer /> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;