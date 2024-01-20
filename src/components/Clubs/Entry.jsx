import React from "react";

function Entry(props){
    return(
        <div className="details">
            <div className="club-card">
                <div className="club-number">
                    <span>{props.num}</span>
                </div>
                <span className="club-name">{props.name}</span>
                <span className="club-inf">{props.description}</span>
            </div>
        </div>
    );
}

export default Entry


