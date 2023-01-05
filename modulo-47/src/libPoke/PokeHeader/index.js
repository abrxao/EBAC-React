import React from "react";
import pokeball from "./pokeBall.png";
import pokeDexLogo from "./Pokedex_logo.png";
import "./PokeHeader.css";

export default function PokeHeader(){
    return(
        <header style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            backgroundColor:'#f2f2f2aa',
            gap: 16,
            boxShadow: '4px 4px 5px #d7d7d7, -3px -3px 5px #fff',
            marginBottom: 20,
            padding: 10,
            borderRadius: '16px'
        }}>
            <img src={pokeball} style={{height:60}}/>
            <img src={pokeDexLogo} style={{height:60}}/>
            <img src={pokeball} style={{height:60}}/>
        </header>
    )
}