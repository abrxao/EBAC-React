import React from "react";
import './Display.css';

const Display = (props)=>{
    return(
        <div className="Display">
            <input disable="true" type="text" className="Display__secBlock"/>
            <input type="text" className="Display__firstBlock" id=""/>                  
        </div>
    )
}

export default Display;
