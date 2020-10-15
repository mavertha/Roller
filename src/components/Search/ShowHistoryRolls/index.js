import React from "react";

const ShowHistoryRolls = ({ data, response }) => {
    return (
        <p className="roller__single__result">
            {/*<h3>Było rzucane d{data.type}</h3>*/}
            {/*{response.join(",")} Suma + modyfikator:*/}
            {/*{response.reduce((acc, curr) => acc + Number(curr), Number(data.modifier))}*/}

            <span className="text__shadow__span">Dice:</span><span className={`dice__type__d${data.type}`}>D{data.type}</span><br/>
            <span className="text__shadow__span">Throws:</span><span>{response.join("  ")}</span><br/>
            <span className="text__shadow__span">Total:</span>{response.reduce((acc, curr) => acc + Number(curr), Number(data.modifier))}
        </p>
    );
};

export default ShowHistoryRolls;