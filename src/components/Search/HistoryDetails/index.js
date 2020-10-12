import React from "react";
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
        <>
            <h1>History results</h1>
            <div>
                <ul>
                    {allHistory.map((item, i) => {
                        return (
                            <li key={i}>
                                <h3>
                                    {item.date} {item.name}
                                </h3>
                                {item.entry.map((data, i) => (
                                    <ShowHistoryRolls key={i} {...data} />
                                ))}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <button onClick={handleClearHistory}>Close history</button>
        </>
    )
}