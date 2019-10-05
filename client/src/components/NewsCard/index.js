import React, {Component} from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle
} from 'reactstrap';

export default class NewsCard extends Component {

  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
          </CardBody>
          <img width="100%" src={this.props.img} alt="Latest articles" />
          <CardBody>
            <CardText>{this.props.caption}</CardText>
            <CardLink href={this.props.link}>Card Link</CardLink>
          </CardBody>
        </Card>
      </div>
    );
  };
}

