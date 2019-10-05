import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import MainJumbotron from "./components/Jumbotron";
import CardContainer from "./components/CardContainer";
import NewsCard from "./components/NewsCard";
import API from "./actions/routes";


class App extends React.Component {

  state = {
    articles: []

  }

  componentDidMount() {
    this.showData();
  }

  scrapeNews = () => {
    API.scrapeNews().then(function(response) {
      return (response);

    });
  }

  // Here you need to grab the data from Mongo
  showData = () => {
    API.showData().then(response => {
      console.log(response.data)
      this.setState({
        articles: response.data
      })
    }
  )}

render() {
  return (
    <Router>
      <div>
        <Navbar scrapeNews={this.scrapeNews}/>
        <Wrapper>
          <Route exact path="/" component={MainJumbotron} />
          {/* <Route exact path="/savedArticles" component={SavedArticles} /> */}
        </Wrapper>
      </div>
      <CardContainer>
        {this.state.articles.map(data => (
          <NewsCard 
          title = {data.title}
          img = {data.img}
          caption = {data.caption}
          link = {data.link}
          />
        )) }
        {/*map data and create newscard*/}
      </CardContainer>
    </Router>
  );
  }
}

export default App;
