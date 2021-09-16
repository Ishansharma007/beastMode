import React from "react";


function Card(props){
    return (
        <div className="cardDiv">
            <img src={props.src} alt="Workout image" />
            <div className="bottomDiv">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Card;