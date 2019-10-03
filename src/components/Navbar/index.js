import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
 } from 'reactstrap';
 import { Link } from "react-router-dom";


export default class Example extends React.Component {

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">BBC Mongo Web Scraper</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/savedArticles">Saved Articles</Link>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}