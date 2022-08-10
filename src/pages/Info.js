import React from "react";
import "../style/Info.css"
import infoicons from "../assets/infoicons.png";
import infoimage from "../assets/infoimage.png"
import User from "../assets/User.png"


const Info = () => {
  return (
   <div className="Info">
      <div className="infoimage">
      <img src={infoimage} alt="infoimage" />
      </div> 
      <div className="card">
        <h4>
          <b>Miami Community Garden</b>
        </h4>
        <div className="card-info">
        
        <p><strong>Address:</strong> 107th Ave, 87113 Miami, FL</p>
        <p><strong>Open hours:</strong> 8AM-7AM</p>
        <p><strong>Compost Type:</strong> No dairy and citrus</p>
        <div className="icons">
          <img src={infoicons} alt="infoicons" />
        </div>
        <br></br>
        <h6>
          <strong>Instructions:</strong> Check in with a garden associate and drop off compost at
          the entrance
        </h6>
        <p>If the garden is locked, used code 2217</p>
        <h6><strong>Reviews:</strong></h6>
        <img src={User} alt="user" />
        <p>
          This compost site was so easy to get to! The owner was very firendly
          and even gave me some tips on how to use waste if I wanted to.
        </p>
       
        </div>
        <div className="finishButt">Compost</div>
      </div>
      
      </div> 
  );
};

export default Info;
