import React, {useState} from "react";
import "./Dices.scss";

const Dice = ({type, onCollect}) => {
    const [newClass, setNewClass] = useState("");
    return (
        <div className="dice"
             onClick={() => {
                 onCollect(prevState => ({...prevState, type}));
                 setNewClass('roller__animation');
             }}
             onAnimationEnd={() => setNewClass("")}
        >
            <div className={`dice-image dice-d${type} ${newClass}`}/>
            <h2>d{type}</h2>
        </div>
    );
};

export default function SelectDice({onCollect}) {
    return (
        <div className="roller__generator__dices">
            <Dice type="4" onCollect={onCollect}/>
            <Dice type="6" onCollect={onCollect}/>
            <Dice type="8" onCollect={onCollect}/>
            <Dice type="10" onCollect={onCollect}/>
            <Dice type="12" onCollect={onCollect}/>
            <Dice type="20" onCollect={onCollect}/>
            <Dice type="100" onCollect={onCollect}/>
        </div>
    );
};