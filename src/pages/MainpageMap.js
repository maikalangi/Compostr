import React from 'react'
import Map from "../assets/map.png"
import { ImLeaf } from "react-icons/im"
import { BsCircleFill } from "react-icons/bs"
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState, useEffect } from "react"
import "../style/map.css"

function MainpageMap() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = event => {
        event.target.parentNode.style.height='855px'
    }

    const handleLogout = ()=> {
        localStorage.removeItem("token")
        window.location.reload()
    }
    
  return (
    <div className='divImage'>
    <img className="image" src={Map}/>
        <>
        <a class="btn" onClick={handleShow}  >
            <ImLeaf size={35} color='#398f3f' />    
              
        </a>
         <Offcanvas show={show} onHide={handleClose} placement={'bottom'} className="offcanvas"  >
        <Offcanvas.Body>
          <div className='modalHead'><div className='modalTitle'>Miami Community Garden ·</div><div className='modalDistance'> 0.2 mi</div></div>
          <div className='stats'><div className='open-closed'>Open</div><div className='times'><span>·</span>8am - 7pm<span>·</span></div><div className='star'></div><div className='rating'>4.5 (7)</div></div>
        
        
        </Offcanvas.Body>
      </Offcanvas>
        </>
         <a class="btn2" onClick={handleShow} >
            <ImLeaf size={35} color='#398f3f' />
        </a>
         <a class="btn3" onClick={handleShow}>
            <ImLeaf size={35} color='#398f3f' />
        </a>
         <a class="btn4" onClick={handleShow}>
            <ImLeaf size={35} color='#398f3f' />
        </a>
        <BsCircleFill className="circle" size={20} color='blue' />
    <div>MainpageMap</div>
        <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default MainpageMap