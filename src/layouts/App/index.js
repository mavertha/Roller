import React from 'react';
import './App.scss';
// import {HashRouter as Router, Route, Switch} from "react-router-dom";
import DiceSelector from "../DiceSelector";
import ResultSave from "../ResultSave";
import ResultView from "../ResultView";
import Search from "../Search";

//widok całej aplikacji, tutaj wszystkie importy + routing
//1. DiceSelector
//2. Search
//3. ResultView
//4. ResultSave

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={DiceSelector}/>
    //   </Switch>
    // </Router>
      <>
          <DiceSelector />
          <Search />
          <ResultView />
          <ResultSave />
      </>
  );
}

export default App;
