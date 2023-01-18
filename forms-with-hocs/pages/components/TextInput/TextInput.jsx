import withValidation from '../utils/withValidation';
import React,{useState, useEffect} from 'react';
import {IoMdEye,IoMdEyeOff} from 'react-icons/io'

export function TextInput({Icon, name, onKeyUp, valid, type},props){
    const fnKeyUp = onKeyUp? onKeyUp: ()=>{};
    const [isInputFill, setIsInputFill] = new useState(false);
    const [inputType, setInputType] = new useState(type=="password" ? "password" : "text");

    const handleKeyDown = (e)=>{
        e.target.value ? setIsInputFill(true): setIsInputFill(false);
    }

    return(
        
        <div className='textInput'>

            <input 
            type={inputType}
            id={name}
            onChange={e=>handleKeyDown(e)}            
            className={(isInputFill?"filled":"")+(valid?" invalid":"")}
            onKeyUp={e=>{fnKeyUp(e.target.value)}}/>

            <label htmlFor={name}><span className='textInput__icon'>{Icon}</span>{name[0].toUpperCase() + name.substring(1)}</label>

            {name === "password" && <span className='textInput__viewPassword' onClick={()=>{setInputType(inputType=="password"?"text":"password")}}>{inputType=="password"?<IoMdEye/>:<IoMdEyeOff/>}</span>}

            {name === "password" && <p className="textInput__passwordTip">
                                    Password should have at least <b>8 letters</b>, one <b>uppercase letter</b>, one <b>lowercase letter</b>, one <b>special char</b> and <b>one number</b></p> }
            
        </div>
    )
}

const TextInputWithValidation = withValidation(TextInput)

export default TextInputWithValidation;
    