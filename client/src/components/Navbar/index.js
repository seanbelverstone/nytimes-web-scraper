import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button
 } from 'reactstrap';
 import { Link } from "react-router-dom";
 import "./style.css";


export default class mainNav extends React.Component {


  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">World News Mongo Web Scraper</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/savedArticles">Saved Articles</Link>
              </NavItem>
              <NavItem>
                <Button color="secondary" onClick={() => this.props.scrapeNews()}>Scrape New Articles</Button>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}