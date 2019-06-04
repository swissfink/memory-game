import React from "react";
// import ReactCardFlip from 'react-card-flip';
import "./style.css";

// function flip() {
//   var element = document.getElementById('flip-card-inner');
//   element.classList.toggle('flipped');
// }

function IconCard(props) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <i className="fab fa-react"></i>
        </div>
        <div className="flip-card-back">
          <i className={props.icon}/>
        </div>
      </div>
    </div>
  );
}

export default IconCard;
