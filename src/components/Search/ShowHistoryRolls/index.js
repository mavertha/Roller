import React from "react";

const ShowHistoryRolls = ({ data, response }) => {
    return (
        <>
            <h3>Było rzucane d{data.type}</h3>
            {response.join(",")} Suma + modyfikator:
            {response.reduce((acc, curr) => acc + Number(curr), Number(data.modifier))}
        </>
    );
};

export default ShowHistoryRolls;