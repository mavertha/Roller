import React, {useState} from "react";
import "./Amount.scss";

export default function Amount( {onCollect, amount} ) {
    const [messageAlert, setMessageAlert] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const handleCloseAlert = () => {
        setShowAlert(false);
    }

    const handlePlus = () => {
        if (amount < 10) {
            onCollect(prevState => ({...prevState, amount: prevState.amount + 1}));
        }
        else {
            setShowAlert(true);
            setMessageAlert("You can choose max. 10 dices");
        }
    }
    const handleMinus = () => {
        onCollect(prevState => {
            let newValue = prevState.amount - 1
            if (newValue <= 0) {
                newValue = 1;
                setShowAlert(true);
                setMessageAlert("You must choose min. 1 dice");
            }
            return ({...prevState, amount: newValue})
        })
    }

    return (
        <div className="roller__generator__amount">
            <span>Amount</span>
            <div className="amount">
                {showAlert &&
                <div className="alert__box">
                    <p>{messageAlert}</p>
                    <div className="close__btn" onClick={handleCloseAlert}>x</div>
                </div>}
                <button onClick={handlePlus}>+</button>
                <input
                    value={amount}
                    size={4}
                    onChange={(e) => {
                        const amount = e.target.value.replace(/[^\d]/,'');
                        if (amount > 10) {
                            setShowAlert(true);
                            setMessageAlert("You must choose min. 1 dice");
                        } else {
                            onCollect(prevState => ({...prevState, amount}));
                        }
                    }}/>
                <button onClick={handleMinus}>-</button>
            </div>
        </div>
    )
}