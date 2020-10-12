import React, {useState} from "react";
import "./SaveResults.scss";

export default function SaveResults( {allRolls, setAllHistory, setAllRolls} ) {
    const [userName, setUserName] = useState('');

    const saveToLocalStorage = (allRolls, setAllHistory) => {
        if (userName === "") {
            console.log("Name can't be empty");
        } else {
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
        }
    }

    const clearLocalStorage = () => {
        localStorage.clear('history');
    }

    return (
        <>
            <h1>Saving result section</h1>
            <label>Name</label>
            <input
                type="text"
                maxLength="20"
                size="10"
                value={userName}
                onChange={(e) => {
                let name = e.target.value
                setUserName(name);
            }}/>
            <button onClick={() => saveToLocalStorage(allRolls, setAllHistory)}>Save current results</button>
            <button onClick={clearLocalStorage}>Clear all saved results</button>
        </>
    )
}