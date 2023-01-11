import React, {useState} from 'react';

export default function TextInput(props){
    const [isInputFill, setIsInputFill] = new useState(false);

    const handleKeyUp = (e)=>{
        e.target.value ? setIsInputFill(true): setIsInputFill(false);
    }

    return(
        <div className={props.className}>
            
            <input type="text" name={props.name} onChange={props.onChange} autoComplete="off" onKeyUp={e=>handleKeyUp(e)} className={isInputFill?"filled":""}/>
            <label htmlFor={props.name}>{props.name}</label>
            <span></span>
            <span className="obligatory">*</span>
        </div>
    )
}