import React, {useState} from "react";
import "./SaveResults.scss";

export default function SaveResults( {allRolls, setAllHistory, setAllRolls, setShowSaveResult, setShowAlert, setMessageAlert} ) {
    const [userName, setUserName] = useState('');
    const [disabledSave, setDisabledSave] = useState(true);

    const saveToLocalStorage = (allRolls, setAllHistory, setShowSaveResult) => {
        const objectToLocalStorage = {
            date: new Date().toLocaleDateString(),
            name: userName,
            entry: allRolls
        }
        let array = JSON.parse(localStorage.getItem('history')) || [];
        array.push(objectToLocalStorage);
        localStorage.setItem('history', JSON.stringify(array));
        setUserName('');
        const dataFromLocalStorage = JSON.parse(localStorage.getItem('history')) || [];
        setAllHistory([...dataFromLocalStorage]);
        setAllRolls([]);
        setShowSaveResult(false);
        setShowAlert(true);
        setMessageAlert("Success! Your results have been saved!");
    }
    const clearLocalStorage = () => {
        localStorage.clear('history');
        setShowAlert(true);
        setMessageAlert("All history has been cleared");
    }

    return (
        <div className="roller__save__container">
            <div className="roller__save__form">
                <span>Name</span>
                <input
                    type="text"
                    maxLength="20"
                    size="18"
                    value={userName}
                    onChange={(e) => {
                        let name = e.target.value;
                        setUserName(name);
                        setDisabledSave(false);
                    }}/>
            </div>
            <div className="roller__save__buttons">
                <button disabled={disabledSave} onClick={() => saveToLocalStorage(allRolls, setAllHistory, setShowSaveResult)}>Save current results</button>
                <button onClick={clearLocalStorage}>Clear all saved results</button>
            </div>
        </div>
    )
}