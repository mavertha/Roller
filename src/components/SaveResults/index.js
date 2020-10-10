import React, {useState} from "react";
import "./SaveResults.scss";

export default function SaveResults( {allRolls} ) {
    const [userName, setUserName] = useState('');

    const saveToLocalStorage = (allRolls) => {
        const objectToLocalStorage = {
            date: new Date().toLocaleDateString(),
            name: userName,
            entry: allRolls
        }
        let array = JSON.parse(localStorage.getItem('history')) || [];
        array.push(objectToLocalStorage);
        localStorage.setItem('history', JSON.stringify(array));
    }

    const clearLocalStorage = () => {
        localStorage.clear('history');
    }

    return (
        <>
            <h1>Saving result section</h1>
            <label>Name</label>
            <input onChange={(e) => {
                let name = e.target.value
                setUserName(name)
            }}/>
            <button onClick={() => saveToLocalStorage(allRolls)}>Save current results</button>
            <button onClick={clearLocalStorage}>Clear all saved results</button>
        </>
    )
}