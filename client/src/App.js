import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import MainJumbotron from "./components/Jumbotron";
import CardContainer from "./components/CardContainer";
import NewsCard from "./components/NewsCard";
import API from "./actions/routes";


function App() {

  scrapeNews = () => {
    API.scrapeNews().then(function(response) {
        console.log(response);
    });
  }


  return (
    <Router>
      <div>
        <Navbar scrapeNews={this.scrapeNews}/>
        <Wrapper>
          <Route exact path="/" component={MainJumbotron}/>
          {/* <Route exact path="/savedArticles" component={SavedArticles} /> */}
        </Wrapper>
      </div>
      <CardContainer>
        <NewsCard />
      </CardContainer>
    </Router>
  );
}

export default App;
