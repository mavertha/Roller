import React, {useState} from 'react';
import './App.scss';


import DiceGenerator from "../../components/DiceSelector/DiceGenerator";
import ShowResult from "../../components/ResultView/ShowResult";
import SearchButton from "../../components/Search/SearchButton";

function App() {
    const [throwData, setThrowData] = useState({
        type: null,
        amount: 1,
        modifier: 0
    })
    const [allRolls, setAllRolls] = useState([]);

    const handleRoll = () => {
        fetch(`https://rolz.org/api/?${Number(throwData.amount)}d${throwData.type}.json`)
            .then(response => response.json())
            .then(response => {
                let formatReturn = response.details.replace(/['('|')' ]/g, '').split("+")
                setAllRolls(prevState => [{response: formatReturn, data: throwData}, ...prevState])
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
        <div className={"roller"}>
            <section className={"roller__dices"}>
                <div>


                <DiceGenerator onCollect={setThrowData} throwData={throwData}/>
                <button onClick={handleRoll}>Roll</button>
                <button onClick={handleClear}>Clear</button>
                </div>
                <SearchButton/>
            </section>
            <section className={"roller__results"}>
                <ShowResult allRolls={allRolls} setAllRolls={setAllRolls}/>
            </section>
        </div>
    );
}

export default App;
