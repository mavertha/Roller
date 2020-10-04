import React from "react";
import "./Dices.scss";

const Dice = ({ type, onCollect }) => {
    return (
        <div onClick={() => {
            onCollect(prevState=>({...prevState, type}))
        }}
            className="dice">
            <div className={`dice-image dice-d${type}`}></div>
            <h2>d{type}</h2>
        </div>
    );
};

export default function SelectDice( {onCollect} ) {

    return (
        <>
            <div className="dices">
                <Dice type="4" onCollect={onCollect}/>
                <Dice type="8" onCollect={onCollect}/>
                <Dice type="12" onCollect={onCollect}/>
                <Dice type="100" onCollect={onCollect}/>
                <Dice type="10" onCollect={onCollect}/>
                <Dice type="20" onCollect={onCollect}/>
            </div>
        </>
    );
};