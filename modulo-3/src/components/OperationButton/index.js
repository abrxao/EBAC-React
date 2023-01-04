import React from "react";
import './OperationButton.css';

const OperationButton = (props)=>{
    return (
        <div className="operationButton">
            <input type="button" className="operationButton__content" value={props.operation} onClick={e => props.onClick(e)}/>
        </div>
        
    )    
}

export default OperationButton;