import React from "react";
import "./HistoryDetails.scss";
import ShowHistoryRolls from "../ShowHistoryRolls";

export default function HistoryDetails( {allHistory, onClose, setDisallowSearch, setDate, setText, setAllHistory, dataFromLocalStorage} ) {
    const handleClearHistory = () => {
        onClose(false);
        setDisallowSearch(false);
        setDate("");
        setText("");
        setAllHistory([...dataFromLocalStorage]);
    }

    return (
        <div className="roller__results__container">
            <div className="roller__frame">
                <h2>History results</h2>
            </div>
            <div className="roller__results__view">
                {allHistory.map((item, i) => {
                    return (
                        <li key={i}>
                            <h3>
                                {item.date} - {item.name}
                            </h3>
                            {item.entry.map((data, i) => (
                                <ShowHistoryRolls key={i} {...data} />
                                ))}
                        </li>
                    );
                })}
            </div>
            <button className="history__results__btn" onClick={handleClearHistory}>Close history</button>
        </div>
    )
}