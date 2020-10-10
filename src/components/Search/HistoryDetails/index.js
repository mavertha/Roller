import React from "react";
import ShowHistoryRolls from "../ShowHistoryRolls";

export default function HistoryDetails( {allHistory,onClose} ) {
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
            <button onClick={()=>onClose(false)}>close history</button>

        </>
    )
}