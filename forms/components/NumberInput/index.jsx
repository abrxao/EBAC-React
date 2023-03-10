import React, {useState} from 'react';

export default function NumberInput(props){

    const [isInputFill, setIsInputFill] = new useState(false);

    const handleKeyUp = (e)=>{

        e.target.value ? setIsInputFill(true): setIsInputFill(false);
    }

    return(
        <div className={props.className}>

            <input 
            type="number" 
            name={props.name} 
            onChange={props.onChange}
            autoComplete="off"
            onKeyUp={e=>handleKeyUp(e)}            
            className={(isInputFill?"filled ":"")}     
            disabled={props.disabled}       
            />

            <label htmlFor={props.name}>{props.name}</label>
            <span ></span>
            <span className="obligatory" id={props.id}>*</span>
        </div>
    )
}