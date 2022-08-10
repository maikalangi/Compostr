import React from 'react'
import Map from "../assets/map.png"
import { ImLeaf } from "react-icons/im"
import { BsCircleFill } from "react-icons/bs"
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState, useEffect } from "react"

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
            <button onClick={handleClick}>More</button>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc....
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