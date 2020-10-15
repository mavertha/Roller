import React from "react";
import "./Modifier.scss";

export default function Modifier( {onCollect, modifier} ) {
    const handlePlus = () => {
        if (modifier < 10) {
            onCollect(prevState=>({...prevState, modifier: prevState.modifier + 1}));
        } else {
            console.log("Modifier can't be higher than 10");
        }
    }

    const handleMinus = () => {
        if (modifier > -10) {
            onCollect(prevState => ({...prevState, modifier: prevState.modifier - 1}));
        }
        else {
            console.log("Modifier can't be lower than -10");
        }
    }

    return (
        <div className="roller__generator__modifier">
            <span>Modifier</span>
            <div className="modifier">
                <button onClick={handlePlus}>+</button>
                <input
                    value={modifier}
                    size={4}
                    onChange={(e) => {
                        let modifier = e.target.value
                        if (modifier > 10 || modifier < -10 || /^[a-zA-Z]+$/.test(modifier)) {
                            console.log("Modifier must a number between -10 and 10");
                        } else {
                            onCollect(prevState => ({...prevState, modifier}));
                        }
                    }}/>
                <button onClick={handleMinus}>-</button>
            </div>
        </div>
    )
}