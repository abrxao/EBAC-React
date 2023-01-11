import React, {useState} from 'react';

export default function NumberInput(props){

    const [isInputFill, setIsInputFill] = new useState(false);

    const handleKeyUp = (e)=>{
        /*e.key.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$/) ? e.target.value[e.target.value.length]="":""*/

        e.target.value ? setIsInputFill(true): setIsInputFill(false);
    }

    return(
        <div className={props.className}>

            <input type="text" pattern="\d*" name={props.name} onKeyDown={props.onChange} autoComplete="off" onKeyUp={e=>handleKeyUp(e)} className={isInputFill?"filled":""}/>
            <label htmlFor={props.name}>{props.name}</label>
            <span></span>
            <span className="obligatory">*</span>
        </div>
    )
}