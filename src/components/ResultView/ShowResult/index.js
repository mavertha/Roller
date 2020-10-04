import React from "react";
import "./ShowResult.scss"

export default function ShowResult( {allRolls} ) {
    return (
        <>
            <h1>Result</h1>
            <div className="results__container">
                {allRolls.map((diceRolls,i)=>
                    <p key={i}>
                        <span>{diceRolls.data.type?"D"+diceRolls.data.type + " ":"results..."}</span>
                        {diceRolls.response.length>0&&diceRolls.response.map((roll,i)=><span key={i}>{roll.value},</span>)}
                        {diceRolls.response.length>0&&"Suma: "+diceRolls.response.reduce((acc,currRoll)=>acc+currRoll.value,Number(diceRolls.data.modifier))}
                    </p>)}


                </div>
        </>
    )
}

// <ul>
//     {data.map(({type, amount, modifier}, i) => <li key={i}> Dice {type} amount {amount} mod {modifier} </li>)}
// </ul>