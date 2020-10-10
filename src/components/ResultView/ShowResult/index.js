import React, {useState} from "react";
import "./ShowResult.scss"
import Results from "../Results";

export default function ShowResult( {allRolls, setAllRolls, showHistoryDetails, allHistory} ) {
    const [showSaveResult, setShowSaveResult] = useState(false);

    const handleClear = () =>  {
        setAllRolls([]);
    }

    const handleSave = () => {
        setShowSaveResult(true);
    }

    return (
        <>
            <Results handleClear={handleClear} handleSave={handleSave} allRolls={allRolls} showSaveResult={showSaveResult} />
        </>
    )
}