import React from "react";
import "./DiceGenerator.scss";
import Dices from "../Dices";
import Amount from "../Amount";
import Modifier from "../Modifier";

export default function DiceGenerator( {onCollect, throwData, handleRoll, handleClearSelection, messageAlert, setMessageAlert, showAlert, handleCloseAlert} ) {

    return (
        <>
        <Dices onCollect={onCollect}/>
        <div className="roller__generator__flexbox">
            <div className="roller__generator__form">
                <Amount onCollect={onCollect} amount={throwData.amount} />
                <Modifier onCollect={onCollect} modifier={throwData.modifier} />
            </div>
            <div className="roller__generator__buttons">
                <button className="roller__btn" onClick={handleClearSelection}>Clear</button>
                <button className="roller__btn" onClick={handleRoll}>Roll
                    {showAlert &&
                    <div className="alert__box">
                        <p>{messageAlert}</p>
                        <div className="close__btn" onClick={(e)=>{
                            e.stopPropagation();
                            handleCloseAlert();
                        }}>x</div>
                    </div>}
                </button>
            </div>
        </div>
        </>
    )
}