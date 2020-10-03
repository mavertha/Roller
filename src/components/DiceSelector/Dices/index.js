import React from "react";
import "./Dices.scss";

export default function Dices() {
    return (
        <>
            <button>d4</button>
            <button>d6</button>
            <button>d8</button>
            <button>d10</button>
            <button>d12</button>
            <button>d20</button>
            <button>d100</button>
        </>
    )
}

//kliknięcie w kość powoduje zmianę stylu np. dodatkowe obramowanie
//oraz zmianę stanu wybranej kości, które potem przekazuje się propsami do komponentu pobierającego dane z API