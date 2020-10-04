import React, {useState} from "react";
import "./Dices.scss";

const Dice = ({ type, chooseDice, onCollect }) => {
    return (
        <div onClick={() => {
            chooseDice(type)
            onCollect(prevState=>({...prevState, type}))
        }}
            className="dice">
            <div className={`dice-image dice-d${type}`}></div>
            <h2>d{type}</h2>
        </div>
    );
};

export default function SelectDice( {onCollect} ) {
    const [dice, setDice] = useState(null);

    return (
        <>
            <div className="dices">
                <Dice type="4" chooseDice={setDice} onCollect={onCollect}/>
                <Dice type="8" chooseDice={setDice} onCollect={onCollect}/>
                <Dice type="12" chooseDice={setDice} onCollect={onCollect}/>
                <Dice type="100" chooseDice={setDice} onCollect={onCollect}/>
                <Dice type="10" chooseDice={setDice} onCollect={onCollect}/>
                <Dice type="20" chooseDice={setDice} onCollect={onCollect}/>
            </div>
        </>
    );
};