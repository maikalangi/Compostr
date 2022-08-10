import React,{ useState } from "react";
import "../style/calc.css"
import bg from "../img/Backgroundbackground.png"
import Progress from "./Progress";

const Calculator = () =>{
    const [sCount, setSCount] = useState(0)
    const [mCount, setMCount] = useState(0)
    const [lCount, setLCount] = useState(0)
    const [reward,setReward]  = useState([])
    const [finishComp,setFinish] = useState(false)
    const [grats,setGrats] = useState("")


    const incCount = (pm,val) =>{
        if(val === "small"){
            let nCount = sCount+pm
            setSCount(nCount)
            if(nCount<0){
                setSCount(0)
            }
        }
        if(val==="med"){
            let nCount = mCount+pm

            setMCount(nCount)
            if(nCount<0){
                setMCount(0)
            }
        }
        if(val==="large"){
            let nCount = lCount+pm
            setLCount(nCount)
            if(nCount<0){
                setLCount(0)
            }
        }
        
    }
    
    const setNumber = (targ,value)=>{

        let vInt = parseInt(value)
     
        // let nCounts = counts
        if(targ.name==="smallcount"){
            if(isNaN(value)|| value === ""){
                setSCount(0)
            }else if(vInt < 0){
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
            if(isNaN(value)|| value === ""){
                setLCount(0)
            }else
            setLCount(vInt)
        }
    }
    const resizeRewards = () =>{
        const badgeW = {
            width: '25%'
        }
        if (reward.length > 4){
            badgeW.width = '10%'
        }


    }

    const goRewards = () =>{


        let rew = sCount+mCount*2+lCount*3
        let r = []
        for(let i = 0; i< rew;i++){
            r.push(1)
        }
        setGrats("../public/worm.png")
        let earl = "/public/background.png"
        let bgs = "url('"+ earl +"')";
        document.body.style.backgroundImage = `url('${bg}')`;

        setReward(r)
        rew > 0 ? setFinish(!finishComp) : alert("You have nothing to compost!")
    }

    return (
    <div className="Calculator">
        
        {finishComp ? 
        
        <div className="rewardPage">

            <div className="congrats">
                <div className="gratsBadge"  ></div>
                <div className="bCount">Congrats on becoming a compost worm!</div>
            
            </div>
            <div className="badgeCount">
            <div className="bbb" key="badge">
            {reward.map((x,i)=>{return(
                <div key={i} className="badge"> </div>
            )})}
            {reward.length>1 ? (<div className="bCount">{`${reward.length}`} Points!</div>): (<div className="bCount">{`${reward.length}`} Badge</div>)}

            </div>
            <Progress prog={reward.length}></Progress>
            <div className="pointsline">{reward.length}/10 Points</div>

            </div>
            <div><div className="socialNet"> Share your badge on social media</div><div className="socialIcons"><div className="fb"></div><div className="tw"></div><div className="ig"></div></div></div>

        </div>
        
        :
        
        
        <div className="CompostCalc">
            <div>Take a picture of your compost
            </div>
            <div className="CompPic"> 
                <div className="camera"> </div>
            </div>
            <div className="CompAmount">
                <div className="compSmall"><div className="compText">Small bag (less than 3 gallons)</div><div className="counter">
                <div className="minus"onClick={()=>incCount(-1,"small")}>-</div>
                <input className="counterCount"
                type="text"
                name="smallcount"
                placeholder="0"
                value={sCount}
                onChange={(e)=>setNumber(e.target,e.target.value)}/><div className="plus" onClick={()=>incCount(1,"small")}>+</div></div></div>
                <div className="compMedium"><div className="compText">Full bag (3 gallons or more)</div><div className="counter"><div className="minus"onClick={()=>incCount(-1,"med")}>-</div>
                <input className="counterCount"
                type="text"
                name="medcount"
                placeholder="0"
                value={mCount}
                onChange={(e)=>setNumber(e.target,e.target.value)}/><div className="plus" onClick={()=>incCount(1,"med")}>+</div></div></div>
                <div className="compLarge"><div className="compText">Large Bag</div><div className="counter"><div className="minus"onClick={()=>incCount(-1,"large")}>-</div>
                <input className="counterCount"
                type="text"
                name="largecount"
                placeholder="0"
                value={lCount}
                onChange={(e)=>setNumber(e.target,e.target.value)}/><div className="plus" onClick={()=>incCount(1,"large")}>+</div></div></div>
            </div>


        <div className="finishButt" onClick={()=>goRewards()}>Finish Composting</div>
        
        
        </div>}
    </div>
    )

}

export default Calculator