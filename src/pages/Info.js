import React from "react";
import "../style/Info.css";
import infoicons from "../assets/infoicons.png";
import User from "../assets/User.png";
import { Link } from 'react-router-dom'

const Info = () => {
  return (
    <div className="infoPage">
      <div className="infoImage"></div>
      <div className="title">Miami Community Garden</div>
      <div className="address">
        <strong>Address:</strong> 107th Ave, 87113 Miami, FL
      </div>
      <div className="hours">
        <strong>Open Hours: </strong>8AM-7AM
      </div>
      <div className="compostType">
        <strong>Compost Type:</strong> No dairy and citrus
      </div>
      <div className="icons">
        <img src={infoicons} alt="infoicons" />
      </div>
      <div className="instructions">
        <strong>Instructions:</strong> Check in with a garden associate and drop
        off compost at the entrance
      </div>
      <div className="memo">If the garden is locked, used code 2217.</div>
      <div className="reviews">
        <strong>Reviews:</strong>
      </div>
      <div className="reviewImg">
        <img src={User} alt="user" />
      </div>
      <div className="reviewText">
        This compost site was so easy to get to! The owner was very friendly and
        even gave me some tips on how to use waste if I wanted to.
      </div>
      <Link to='/contribute'>
      <div className="finishButt">Compost</div>
      </Link>
    </div>
  );
};

export default Info;
