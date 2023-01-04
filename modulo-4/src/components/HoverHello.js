import React from "react";
import './hoverHello.css';

export default function HoverHello(props){
    return(
        <div className="hoverHello">
            <span id="first">
            </span>
            <span id="second">
                hello world {props.date}
            </span>
        </div>
    )
}