import React from "react";
import "./Amount.scss";

export default function Amount( {onCollect, amount} ) {

    const handlePlus = () => {
        if (amount < 10) {
            onCollect(prevState => ({...prevState, amount: prevState.amount + 1}));
        }
        else {
            console.log("You can choose max. 10 dices");
        }
    }

    const handleMinus = () => {
        onCollect(prevState => {
            let newValue = prevState.amount - 1
            if (newValue <= 0) {
                newValue = 1
                console.log("You must choose min. 1 dice");
            }
            return ({...prevState, amount: newValue})
        })
    }

    return (
        <div className="roller__generator__amount">
            <span>Amount</span>
            <div className="amount">
                <button onClick={handlePlus}>+</button>
                <input
                    value={amount}
                    size={4}
                    onChange={(e) => {
                        const amount = e.target.value.replace(/[^\d]/,'');
                        if (amount > 10) {
                            console.log("You can choose max. 10 dices");
                        } else {
                            onCollect(prevState => ({...prevState, amount}));
                        }
                    }}/>
                <button onClick={handleMinus}>-</button>
            </div>
        </div>
    )
}