import React from "react";
import "./Amount.scss";

export default function Amount( {onCollect, amount} ) {

    const handlePlus = () => {
        onCollect(prevState => ({...prevState, amount: prevState.amount + 1}))
    }

    const handleMinus = () => {
        onCollect(prevState => {
            let newValue = prevState.amount - 1
            if (newValue <= 0) {
                newValue = 1
            }
            return ({...prevState, amount: newValue})
        })
    }

    return (
        <>
            <h1>Amount</h1>
            <button onClick={handlePlus}>+</button>
            <label>Amount</label>
            <input
                value={amount}
                onChange={(e) => {
                const amount = e.target.value.replace(/[^\d]/,'');
                    onCollect(prevState => ({...prevState, amount}))
            }}/>
            <button onClick={handleMinus}>-</button>
        </>
    )
}