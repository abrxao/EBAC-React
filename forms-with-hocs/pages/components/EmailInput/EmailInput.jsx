import React,{useState} from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import useEmail from './useEmail';

export default function EmailInput(){
    const [isInputFill, setIsInputFill] = useState(false);
    const [value, setValue] = useState("");
    const valid = useEmail(value);

    const handleKeyDown = (e)=>{
        e.target.value ? setIsInputFill(true): setIsInputFill(false);
    }

    return(
        <div className='textInput'>
            <input
            id="email"
            name="email"
            onChange={e=>setValue(e.target.value)}
            onBlur = {e=>handleKeyDown(e)}
            className={(isInputFill?"filled":"")+(valid?" invalid":"")}
            />
            <label htmlFor="email">
                <span className='textInput__icon'><MdEmail/></span>Email
            </label>
            {valid && <div className='textInput__warn'>
                        <p><FaExclamationCircle/> Please check your e-mail</p>
                    </div>}
            
        </div>
        
    )
}