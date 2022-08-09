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

  return (
    <div className='divImage'>
    <img className="image" src={Map}/>
        <>
        <a class="btn" onClick={handleShow} href="#" >
            <ImLeaf size={35} color='#398f3f' />    
              
        </a>
         <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
        </>
         <a class="btn2" onClick={handleShow} href="#">
            <ImLeaf size={35} color='#398f3f' />
        </a>
         <a class="btn3" onClick={handleShow}href="#">
            <ImLeaf size={35} color='#398f3f' />
        </a>
         <a class="btn4" onClick={handleShow} href="#">
            <ImLeaf size={35} color='#398f3f' />
        </a>
        <BsCircleFill className="circle" size={20} color='blue' />
    <div>MainpageMap</div>

    </div>
  )
}

export default MainpageMap