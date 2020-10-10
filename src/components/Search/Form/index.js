import React, {useState} from "react";
import "./Form.scss"
import HistoryDetails from "../HistoryDetails";

export default function Form() {
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

    const handleClear = () => {
        setDate("");
        setText("");
        setAllHistory([...dataFromLocalStorage]);
    }

    return (
        <>
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
        <button onClick={handleClear}>Clear</button>

        {showHistoryDetails && <HistoryDetails allHistory={allHistory} />}
        </>
    )
}