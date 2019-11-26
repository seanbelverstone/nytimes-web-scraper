import React, { Component } from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle
} from 'reactstrap';
import { FaBookmark } from "react-icons/fa";
import "./style.css";

function addToFavorites() {
  console.log("test")
}

export default class NewsCard extends Component {

  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <FaBookmark className="icon" onClick={() => addToFavorites()}/>
          </CardBody>
          <img width="100%" src={this.props.img} alt="Latest articles" />
          <CardBody>
            <CardText>{this.props.caption}</CardText>
            <CardLink href={"http://www.nytimes.com/" + this.props.link}>Click here to read the full story</CardLink>
          </CardBody>
        </Card>
      </div>
    );
  };
}

