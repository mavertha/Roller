import React, {useState} from "react";
import "./Modifier.scss";

export default function Modifier( {onCollect, modifier} ) {
    const [messageAlert, setMessageAlert] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const handleCloseAlert = () => {
        setShowAlert(false);
    }

    const handlePlus = () => {
        if (modifier < 10) {
            onCollect(prevState=>({...prevState, modifier: prevState.modifier + 1}));
        } else {
            setShowAlert(true);
            setMessageAlert("Modifier can't be higher than 10");
        }
    }
    const handleMinus = () => {
        if (modifier > -10) {
            onCollect(prevState => ({...prevState, modifier: prevState.modifier - 1}));
        }
        else {
            setShowAlert(true);
            setMessageAlert("Modifier can't be lower than -10");
        }
    }

    return (
        <div className="roller__generator__modifier">
            <span>Modifier</span>
            <div className="modifier">
                {showAlert &&
                <div className="alert__box">
                    <p>{messageAlert}</p>
                    <div className="close__btn" onClick={handleCloseAlert}>x</div>
                </div>}
                <button onClick={handlePlus}>+</button>
                <input
                    value={modifier}
                    size={4}
                    onChange={(e) => {
                        let modifier = e.target.value
                        if (modifier > 10 || modifier < -10 || /^[a-zA-Z]+$/.test(modifier)) {
                            setShowAlert(true);
                            setMessageAlert("Modifier must a number between -10 and 10");
                        } else {
                            onCollect(prevState => ({...prevState, modifier}));
                        }
                    }}/>
                <button onClick={handleMinus}>-</button>
            </div>
        </div>
    )
}