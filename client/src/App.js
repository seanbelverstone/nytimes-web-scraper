import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import BBCJumbo from "./components/Jumbotron";
import CardContainer from "./components/CardContainer";
import NewsCard from "./components/NewsCard";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={BBCJumbo}/>
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
