import React from "react";
import "./Modifier.scss";

export default function Modifier( {onCollect, modifier} ) {
    const handlePlus = () => {
        onCollect(prevState=>({...prevState, modifier: prevState.modifier + 1}))
    }

    const handleMinus = () => {
        onCollect(prevState => ({...prevState, modifier: prevState.modifier - 1}))
    }

    return (
        <>
            <h1>Modifier</h1>
            <button onClick={handlePlus}>+</button>
            <label>Modifier</label>
            <input value={modifier} onChange={(e) => {
                let modifier = e.target.value
                onCollect(prevState => ({...prevState, modifier}))
            }}/>
            <button onClick={handleMinus}>-</button>
        </>
    )
}