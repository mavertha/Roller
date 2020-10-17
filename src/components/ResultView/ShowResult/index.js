import React, {useState} from "react";
import "./ShowResult.scss"
import Results from "../Results";

export default function ShowResult( {allRolls, setAllRolls, setAllHistory, disallowSave, setDisallowSave} ) {
    const [showSaveResult, setShowSaveResult] = useState(false);

    const handleClear = () =>  {
        setAllRolls([]);
        setDisallowSave(true);
    }

    const handleSave = () => {
        setShowSaveResult(true);
    }

    return (
        <>
            <Results handleClear={handleClear} handleSave={handleSave} allRolls={allRolls} showSaveResult={showSaveResult}
            setAllHistory={setAllHistory} setAllRolls={setAllRolls} disallowSave={disallowSave} setShowSaveResult={setShowSaveResult}/>
        </>
    )
}