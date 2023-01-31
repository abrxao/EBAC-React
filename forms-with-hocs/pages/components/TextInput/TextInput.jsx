import WithValidation from './utils/WithValidation';
import React,{useState} from 'react';
import {IoMdEye,IoMdEyeOff} from 'react-icons/io';
import {FaExclamationCircle} from 'react-icons/fa';

export function TextInput({Icon, name, onKeyUp, valid, type,onKeyPress}){
    
    const fnKeyUp = onKeyUp? onKeyUp: ()=>{};
    const fnKeyPress = onKeyPress?onKeyPress: ()=>{};
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
                onKeyUp={e=>{fnKeyUp(e)}}
                autoComplete={name=="phone"?"off":"true"}
                onBlur={e=>{fnKeyUp(e)}}
                onKeyDown={e=>{fnKeyPress(e)}}
            />

            <label htmlFor={name}>
                <span className='textInput__icon'>{Icon}</span>{name[0].toUpperCase() + name.substring(1)}
            </label>

            {valid && <div className='textInput__warn'>
                        <p><FaExclamationCircle/> Please check your {name}.</p>
                    </div>}

            {name === "password" && <span className='textInput__viewPassword' onClick={()=>{setInputType(inputType=="password"?"text":"password")}}>
                
            {inputType=="password"?<IoMdEye/>:<IoMdEyeOff/>}</span>}

            {name === "password" && <p className="textInput__passwordTip">
                                    Password should have at least <b>8 letters</b>, one <b>uppercase letter</b>, one <b>lowercase letter</b>, one <b>special char</b> and <b>one number</b></p> }
            
        </div>
    )
}

const TextInputWithValidation = WithValidation(TextInput);

export default TextInputWithValidation;
    