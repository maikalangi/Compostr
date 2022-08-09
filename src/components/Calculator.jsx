import React,{ useState,useEffect } from "react";
import "../style/calc.css"

const Calculator = () =>{
    const [counts, setCounts] = useState([0,0,0])
    const [sCount, setSCount] = useState(0)
    const [mCount, setMCount] = useState(0)
    const [lCount, setLCount] = useState(0)


    const incCount = (pm,val) =>{

        if(val==="med"){
            let nCount = mCount+pm
            setMCount(nCount)
        }
        if(val==="large"){
            let nCount = lCount+pm
            setLCount(nCount)
        }
        if(val === "small"){
            let nCount = sCount+pm
            setSCount(nCount)
        }
    }
    
    const setNumber = (targ,value)=>{
        console.log(typeof value)
        console.log(value)
        let vInt = parseInt(value)
     
        // let nCounts = counts
        if(targ.name==="smallcount"){
            if(isNaN(value)|| value === ""){
                setSCount(0)
            }else
            setSCount(vInt)
        }
        if(targ.name==="medcount"){
            if(isNaN(value)|| value === ""){
                setMCount(0)
            }else
            setMCount(vInt)
        }
        if(targ.name==="largecount"){
        }
    }
    // useEffect(() => {
        
    //   },[counts]);

    return (
    <div className="Calculator">
        <div className="CompostCalc">
            <div className="CompPic">
                this is a picture
            </div>
            <div className="CompAmount">
                <div className="compSmall">Small Counter<div className="counter">
                <div className="minus"onClick={()=>incCount(-1,"small")}>-</div>
                <input className="counterCount"
                type="text"
                name="smallcount"
                placeholder="0"
                value={sCount}
                onChange={(e)=>setNumber(e.target,e.target.value)}/><div className="plus" onClick={()=>incCount(1,"small")}>+</div></div></div>
                <div className="compMedium">Medium Counter<div className="counter"><div className="minus"onClick={()=>incCount(-1,"med")}>-</div>
                <input className="counterCount"
                type="text"
                name="medcount"
                placeholder="0"
                value={mCount}
                onChange={(e)=>setNumber(e.target,e.target.value)}/><div className="plus" onClick={()=>incCount(1,"med")}>+</div></div></div>
                <div className="compLarge">Large Counter<div className="counter"><div className="minus"onClick={()=>incCount(-1,"large")}>-</div>
                <input className="counterCount"
                type="text"
                name="largecount"
                placeholder="0"
                value={lCount}
                onChange={(e)=>setNumber(e.target,e.target.value)}/><div className="plus" onClick={()=>incCount(1,"large")}>+</div></div></div>
            </div>

        </div>
    </div>
    )

}

export default Calculator