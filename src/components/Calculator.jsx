import React,{ useState,useEffect } from "react";
import "../style/calc.css"

const Calculator = () =>{

    return (
    <div className="Calculator">
        <div className="CompostCalc">
            <div className="CompPic">
                this is a picture
            </div>
            <div className="CompAmount">
                <div className="compSmall">Small Counter<div className="counter"><div className="minus">-</div><div className="counterCount">0</div><div className="plus">+</div></div></div>
                <div className="compMedium">Medium Counter<div className="counter"><div className="minus">-</div><div className="counterCount">0</div><div className="plus">+</div></div></div>
                <div className="compLarge">Large Counter<div className="counter"><div className="minus">-</div><div className="counterCount">0</div><div className="plus">+</div></div></div>
            </div>

        </div>
    </div>
    )

}

export default Calculator