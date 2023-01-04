import React from "react";
import './NumericButton.css';

const NumericButton = (props)=>{
    return (
        <div className="numericButton">
            <input type="button" className="numericButton__content" value={props.number} onClick={e => props.onClick(e)}/>
        </div>
        
    )    
}

export default NumericButton;