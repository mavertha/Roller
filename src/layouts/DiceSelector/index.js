//póki co logika jest w Draft/index. Tutaj komponet do wyboru kości
//Powinien składać się z:
//1. Buttony-kości, a raczej selektory to zaznaczania
//2. Amount, czyli wybór ilości kości
//3. Modifier, czyli wybór ew. modyfikatorów do wyników
//4. Btn Clear i btn Roll!

import React from "react";
// import Draft from "../../components/Draft";
import "./DiceSelector.scss";
import Dices from "../../components/DiceSelector/Dices";
import Amount from "../../components/DiceSelector/Amount";
import Modifier from "../../components/DiceSelector/Modifier";

export default function DiceSelector() {
    return (
        <>
            {/*<Draft />*/}
            <h1>Select Dice</h1>
            <Dices />
            <Amount />
            <button>Clear</button>
            <Modifier />
            <button>Roll!</button>
        </>
    )
}