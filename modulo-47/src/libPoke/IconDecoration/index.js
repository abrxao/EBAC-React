import React from "react";
import lureModule from "./lure-module.png";
import mankey from "./mankey.png";
import mystic from "./mystic.png";
import superPotion from "./super-potion.png";
import "./iconDecoration.css"

export default function IconDecoration(){
    return(
        <div style={{position:'relative'}}>
            <span className="iconDecoration" value="1">
                <img src={lureModule}/>
            </span>
            <span className="iconDecoration" value="2">
                <img src={superPotion}/>
            </span>
            <span className="iconDecoration" value="3">
                <img src={mystic}/>
            </span>
            <span className="iconDecoration" value="4">
                <img src={mankey}/>
            </span>
        </div>
        )
    }