import React, {useState} from 'react';
import './App.scss';

import DiceGenerator from "../../components/DiceSelector/DiceGenerator";
import ShowResult from "../../components/ResultView/ShowResult";

import HistoryDetails from "../../components/Search/HistoryDetails";

function App() {
    const [throwData, setThrowData] = useState({
        type: null,
        amount: 1,
        modifier: 0
    })
    const [allRolls, setAllRolls] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [date, setDate] = useState("");
    const [text, setText] = useState("");
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('history'));
    const [allHistory, setAllHistory] = useState([...dataFromLocalStorage]);
    const [showHistoryDetails, setShowHistoryDetails] = useState(false);

    const handleSearch = () => {
        let filteredHistory = allHistory.filter((item) => {
            if (date === "") {
                return item.name.includes(text);
            } else if (text === "") {
                return item.date === date;
            } else {
                return item.name.includes(text) && item.date === date;
            }
        });
        setAllHistory([...filteredHistory]);
        setShowHistoryDetails(true);
    }

    const handleClearHistoryForm = () => {
        setDate("");
        setText("");
        setAllHistory([...dataFromLocalStorage]);
    }
    const handleShow = () => {
        setShowForm(true);
    }
    const handleRoll = () => {
        fetch(`https://rolz.org/api/?${Number(throwData.amount)}d${throwData.type}.json`)
            .then(response => response.json())
            .then(response => {
                let formatReturn = response.details.replace(/['('|')' ]/g, '').split("+")
                setAllRolls(prevState => [{response: formatReturn, data: throwData}, ...prevState])
            });
    }

    const handleClearSelection = () => {
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
                    <button onClick={handleClearSelection}>Clear</button>
                </div>
                <div>
                    <button onClick={handleShow}>Search for previous results</button>
                    {showForm && <div>


                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <button onClick={handleSearch}>Search</button>
                        <button onClick={handleClearHistoryForm}>Clear</button>
                    </div>}
                </div>

            </section>
            <section className={"roller__results"}>
                {!showHistoryDetails&& <ShowResult allRolls={allRolls} setAllRolls={setAllRolls}/>}
                {showHistoryDetails && <HistoryDetails allHistory={allHistory} onClose={setShowHistoryDetails} />}
            </section>
        </div>
    );
}

export default App;
