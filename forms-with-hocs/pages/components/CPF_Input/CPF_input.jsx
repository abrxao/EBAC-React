import React,{useState} from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import { HiIdentification } from 'react-icons/hi';
import useCPF from './useCPF';
export default function EmailInput(){
    const [isInputFill, setIsInputFill] = useState(false);
    const [value, setValue] = useState("");
    const valid = useCPF(value);

    const handleKeyDown = (e)=>{
        e.target.value ? setIsInputFill(true): setIsInputFill(false);
    }

    return(
        <div className='textInput'>
            <input
            id="CPF"
            name="CPF"
            onChange={e=>setValue(e.target.value)}
            onBlur = {e=>handleKeyDown(e)}
            className={(isInputFill?"filled":"")+(valid?" invalid":"")}
            />
            <label htmlFor="CPF">
                <span className='textInput__icon'><HiIdentification/></span>CPF
            </label>
            {valid && <div className='textInput__warn'>
                        <p><FaExclamationCircle/> Please check your CPF.</p>
                    </div>}
            
        </div>
        
    )
}