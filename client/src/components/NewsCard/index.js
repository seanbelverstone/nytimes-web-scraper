import React, { Component } from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle
} from 'reactstrap';
import { FaBookmark } from "react-icons/fa";
import API from "../../actions/routes";
import "./style.css";

function addToFavorites(title, img, caption, link) {
  console.log(title, img, caption, link)

    API.savePost(title, img, caption, link)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    })}

export default class NewsCard extends Component {

  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <FaBookmark className="icon" onClick={() => addToFavorites(
              this.props.title,
              this.props.img,
              this.props.caption,
              this.props.link
            )}/>
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

