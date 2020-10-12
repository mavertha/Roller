import React from "react";
import SaveResults from "../../SaveResults";

export default function Results( {handleClear, handleSave, allRolls, showSaveResult, setAllHistory, setAllRolls, disallowSave} ) {
    return (
        <>
            <h1>Result</h1>
            <div className="results__container">
                {allRolls.map((diceRolls,i) =>
                    <p key={i}>
                        <span>{diceRolls.data.type? "D" + diceRolls.data.type + " " : "results..."}</span>
                        {diceRolls.response.length>0 && diceRolls.response.map((roll,i) => <span key={i}>{roll},</span>)}
                        {diceRolls.response.length>0 && "Suma: " + diceRolls.response.reduce((acc,currRoll) => acc+Number(currRoll), Number(diceRolls.data.modifier))}
                    </p>)}
            </div>
            <button onClick={handleClear}>Clear</button>
            <button onClick={handleSave} disabled={disallowSave}>Save</button>
            {showSaveResult && <SaveResults allRolls={allRolls} setAllHistory={setAllHistory} setAllRolls={setAllRolls}/>}
        </>
    )
}