import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import Home from "../home";
import Record from "../record";
import Prs from "../prs";

class topBar extends React.Component {
  render() {
    return (
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Navbar.Brand href="#home">Fide Fitness</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavItem eventkey={1} href="/">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
              </NavItem>
              <NavItem eventkey={1} href="/record">
                <Nav.Link as={Link} to="/record">
                  Workout
                </Nav.Link>
              </NavItem>
              <NavItem eventkey={1} href="/prs">
                <Nav.Link as={Link} to="/prs">
                  Personal Records
                </Nav.Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/record" component={Record}></Route>
          <Route path="/prs" component={Prs}></Route>
        </Switch>
      </Router>
    );
  }
}

export default topBar;
