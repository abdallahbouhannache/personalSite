import React from "react";
import { Link } from "react-router-dom";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
/* import "./sidebar.css"; */

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function getHref(p) {
  return window.location.pathname.toLocaleLowerCase();
}

//TODO Web Template Studio: Add a new link in the NavBar for your page here.
// A skip link is included as an accessibility best practice. For more information visit https://www.w3.org/WAI/WCAG21/Techniques/general/G1.
export default function NavBar() {
  return (
    <React.Fragment>
      <SideNav
        onSelect={(selected) => {
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">

          <NavItem eventKey="home" onClick={(a) => {
            if (getHref() != "/home") {
              window.location.href = "/Home";

            }
          }} >
            <NavIcon>
              <i className="fa  fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              Home
            </NavText>
          </NavItem>

          <NavItem eventKey="skills" onClick={(a) => {
            if (getHref() != "/skills") {
              window.location.href = "/Skills";

            }
          }}>
            <NavIcon>
              <i className="fa fa-cogs" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              Skills
            </NavText>
          </NavItem>

          <NavItem eventKey="porto" onClick={(a) => {
            if (getHref() != "/porto") {
              window.location.href = "/Porto";

            }
          }}>
            <NavIcon>
              <i className="fa fa-list-alt" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              Portfolio
            </NavText>
          </NavItem>
          <NavItem eventKey="educ" onClick={(a) => {
            if (getHref() != "/educ") {
              window.location.href = "/Educ";

            }
          }} >
            <NavIcon>
              <i className="fa  fa-book" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              Education
            </NavText>
          </NavItem>

          <NavItem eventKey="cv" onClick={(a) => {
            if (getHref() != "/cv") {
              window.location.href = "/Cv";

            }
          }}>
            <NavIcon>
              <i className="fa fa-address-card" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              CV
            </NavText>
          </NavItem>


          <NavItem eventKey="contact" onClick={(a) => {
            if (getHref() != "/contact") {
              window.location.href = "/Contact";

            }
          }} >
            <NavIcon>
              <i className="fa fa-user-circle" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              Contact
            </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </React.Fragment>
  );
}
