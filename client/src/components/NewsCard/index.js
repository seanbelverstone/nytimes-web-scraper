import React, {Component} from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

export default class NewsCard extends Component {
  constructor(props) {
    super(props);
      this.state = {
        title: "",
        img: "",
        caption: "",
        link: ""
      }
  }





  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
          </CardBody>
          <img width="100%" src="/" alt="Card image cap" />
          <CardBody>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <CardLink href="#">Card Link</CardLink>
          </CardBody>
        </Card>
      </div>
    );
  };
}

