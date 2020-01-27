import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, Nav, NavDropdown, Form, FormControl, Button
} from 'react-bootstrap';
import Banner from './images/2.png';
import './style.scss';
import { MdArrowDropDownCircle } from 'react-icons/md';
import FeaturePage from '../../containers/FeaturePage/Loadable';
import HomePage from '../../containers/HomePage/Loadable';
// #0A382B
// AB852e

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      // <Nav className="header">
      <div className="header">
        <Navbar class="bg-default navbar-expend-xl justify-content-end" bg="default" expand="xl">

          <Navbar.Brand exact href="/">
            <img
              src={Banner}
              width="30"
              height="70"
              className="d-inline-block align-left"
            />
          </Navbar.Brand>
          <Navbar.Brand exact href="/" component={HomePage}>Lending Services Dashboard</Navbar.Brand>
          <Nav className="mr-sm-2">
            <NavDropdown title={<MdArrowDropDownCircle />} id="basic-nav-dropdown" variant="outline-primary">
              <NavDropdown.Item href="/features" component={FeaturePage}>Dashboard</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Schedulars</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Charts&Reports</NavDropdown.Item>
            </NavDropdown>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
            </Navbar.Collapse>
          </Nav>
        </Navbar>
      </div>
    //  </Nav>

    );
  }
}

export default Header;
