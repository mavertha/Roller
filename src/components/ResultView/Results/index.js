import React, {useState} from "react";
import SaveResults from "../../SaveResults";
import './Results.scss';

export default function Results( {handleClear, handleSave, allRolls, showSaveResult, setShowSaveResult, setAllHistory, setAllRolls, disallowSave} ) {
    const [messageAlert, setMessageAlert] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const handleCloseAlert = () => {
        setShowAlert(false);
    }

    return (
        <div className="roller__results__container">
            {showAlert &&
            <div className="alert__box">
                <p>{messageAlert}</p>
                <div className="close__btn" onClick={handleCloseAlert}>x</div>
            </div>}
            <div className="roller__frame">
                <h2>Results</h2>
            </div>
            <div className="roller__results__view">
                {allRolls.map((diceRolls, i) =>
                    <p key={i} className="roller__single__result">
                        <span className="text__shadow__span">Dice:</span>{diceRolls.data.type? <span className={`dice__type__d${diceRolls.data.type}`}>D{diceRolls.data.type}</span> : "results..."}<br/>
                        <span className="text__shadow__span">Throws:</span>{diceRolls.response.length>0 && diceRolls.response.map((roll,i) => <span key={i}>{roll} </span>)}<br/>
                        <span className="text__shadow__span">Total:</span>{diceRolls.response.length>0 && diceRolls.response.reduce((acc,currRoll) => acc+Number(currRoll), Number(diceRolls.data.modifier))}
                    </p>)}
            </div>
            <div className="roller__results__buttons">
                <button onClick={handleClear}>Clear</button>
                <button onClick={handleSave} disabled={disallowSave}>Save</button>
            </div>
            {showSaveResult && <SaveResults allRolls={allRolls} setAllHistory={setAllHistory} setAllRolls={setAllRolls} setShowSaveResult={setShowSaveResult}
            setShowAlert={setShowAlert} setMessageAlert={setMessageAlert}/>}
        </div>
    )
}