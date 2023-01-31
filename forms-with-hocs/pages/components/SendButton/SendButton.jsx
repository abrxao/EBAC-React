import React from "react";
import {RiSendPlaneFill} from "react-icons/ri";

export default function SendButton(props){
    return(
        <>  
            <button onClick={props.onClick} type="submit">SEND<RiSendPlaneFill/></button>
        </>)
    }