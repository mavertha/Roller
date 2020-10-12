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
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('history')) || [];
    const [allHistory, setAllHistory] = useState([...dataFromLocalStorage]);
    const [showHistoryDetails, setShowHistoryDetails] = useState(false);
    const [disallowSearch, setDisallowSearch] = useState(false);
    const [disallowSave, setDisallowSave] = useState(true);
    const handleSearch = () => {
        if (date !== "" || text !== "") {
            setDisallowSearch(true)
            let filteredHistory = allHistory.filter((item) => {
                if (date === "") {
                    return item.name.includes(text);
                } else if (text === "") {
                    let dateFormatModified = date.slice(8, 10) + "." + date.slice(5, 7) + "." + date.slice(0, 4);
                    return item.date === dateFormatModified;
                } else {
                    return item.name.includes(text) && item.date === date;
                }
            });
            setAllHistory([...filteredHistory]);
            setShowHistoryDetails(true);
        } else {
            console.log("Enter search parameter");
        }
    }

    const handleClearHistoryForm = () => {
        setDate("");
        setText("");
        setAllHistory([...dataFromLocalStorage]);
        setDisallowSearch(false);
        setShowHistoryDetails(false);
    }
    const handleShow = () => {
        setShowForm(true);
    }
    const handleRoll = () => {
        if (throwData.type === null || throwData.amount < 1) {
            console.log("You must choose dice type and amount");
        } else {
            fetch(`https://rolz.org/api/?${Number(throwData.amount)}d${throwData.type}.json`)
                .then(response => response.json())
                .then(response => {
                    let formatReturn = response.details.replace(/['('|')' ]/g, '').split("+")
                    setAllRolls(prevState => [{response: formatReturn, data: throwData}, ...prevState])
                });
            setDisallowSave(false);
        }
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
                        <button disabled={disallowSearch} onClick={handleSearch}>Search</button>
                        <button onClick={handleClearHistoryForm}>Clear</button>
                    </div>}
                </div>
            </section>

            <section className={"roller__results"}>
                {!showHistoryDetails&& <ShowResult allRolls={allRolls} setAllRolls={setAllRolls} setAllHistory={setAllHistory} disallowSave={disallowSave}/>}
                {showHistoryDetails && <HistoryDetails allHistory={allHistory} onClose={setShowHistoryDetails} setDisallowSearch={setDisallowSearch}
                setDate={setDate} setText={setText} setAllHistory={setAllHistory} dataFromLocalStorage={dataFromLocalStorage} />}
            </section>
        </div>
    );
}

export default App;
