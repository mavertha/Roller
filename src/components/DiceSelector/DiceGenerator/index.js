import React from "react";
import "./DiceGenerator.scss";
import Dices from "../Dices";
import Amount from "../Amount";
import Modifier from "../Modifier";

export default function DiceGenerator( {onCollect, throwData, handleRoll, handleClearSelection} ) {
    return (
        <>
        <Dices onCollect={onCollect}/>
        <div className="roller__generator__flexbox">
            <div className="roller__generator__form">
                <Amount onCollect={onCollect} amount={throwData.amount}/>
                <Modifier onCollect={onCollect} modifier={throwData.modifier}/>
            </div>
            <div className="roller__generator__buttons">
                <button onClick={handleClearSelection}>Clear</button>
                <button onClick={handleRoll}>Roll</button>
            </div>
        </div>
        </>
    )
}