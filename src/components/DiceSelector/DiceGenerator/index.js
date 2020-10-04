import React from "react";
import "./DiceGenerator.scss";
import Dices from "../Dices";
import Amount from "../Amount";
import Modifier from "../Modifier";

export default function DiceGenerator( {onCollect, throwData} ) {
    return (
        <>
        <Dices onCollect={onCollect}/>
        <Amount onCollect={onCollect} amount={throwData.amount}/>
        <Modifier onCollect={onCollect} modifier={throwData.modifier}/>
        </>
    )
}