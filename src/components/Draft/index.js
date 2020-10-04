import React, {useEffect, useState} from "react";
import "./Draft.scss";
// import DiceGenerator from "../DiceGenerator/index";

export default function Draft() {
    const [dice, setResults] = useState(false);

    const [diceType, setDiceType] = useState("d20");

    const handleClick = () => {
        setDiceType("d20");
        console.log(dice[0].value)
    }

    useEffect(() => {
        fetch(`http://roll.diceapi.com/json/${diceType}`)
            .then(response => response.json())
            .then(dice => {
                setResults(dice.dice)
            });
    }, []);

    return (
        <>
        <button onClick={handleClick}>D20</button>
        </>
    )

    // if (dice) {
    //     console.log(dice);
    //     console.log(dice[0].value);
    //     return (
    //         <>
    //             <h1>{dice[0].value}</h1>
    //             <h2>Response</h2>
    //         </>
    //     );
    // } else {
    //     return <h1>Not working</h1>
    // }
}