import React, {useState} from 'react';
import './App.scss';
// import {HashRouter as Router, Route, Switch} from "react-router-dom";

import DiceGenerator from "../../components/DiceSelector/DiceGenerator";
import ShowResult from "../../components/ResultView/ShowResult";
import SearchButton from "../../components/Search/SearchButton";

function App() {
   const [throwData, setThrowData] = useState({
       type: null,
       amount: 1,
       modifier: 0
   })

  const [allRolls, setAllRolls] =  useState([]);

  const handleRoll = () => {
      fetch(`https://rolz.org/api/?${Number(throwData.amount)}d${throwData.type}.json`)
          .then(response => response.json())
          .then(response => {
              let formatReturn = response.details.replace(/['('|')' ]/g,'').split("+")
              setAllRolls(prevState=>[{response:formatReturn, data:throwData},...prevState])
          });
  }

  const handleClear = () => {
      setThrowData({
          type: null,
          amount: 1,
          modifier: 0
      })
  }

  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={DiceGenerator}/>
    //   </Switch>
    // </Router>
      <>
          <DiceGenerator onCollect={setThrowData} throwData={throwData} />
          <button onClick={handleRoll}>Roll</button>
          <button onClick={handleClear}>Clear</button>
          <ShowResult allRolls={allRolls} setAllRolls={setAllRolls} />
          <SearchButton />
      </>
  );
}

export default App;
