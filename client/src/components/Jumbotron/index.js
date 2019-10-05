import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import "./style.css";

const BBCJumbo = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Mongo Scraper</h1>
          <p className="lead">BBC Edition.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default BBCJumbo;