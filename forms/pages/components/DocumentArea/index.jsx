import RadioInput from "../RadioInput";
import React, {useState} from "react";
import NumberInput from "../NumberInput";

export default function DocumentArea(props) {
    var options = ["CPF","CNPJ"]
    const [inputStatus, setInputStatus] = useState(true)

    const handleClick = ()=>{
        const input = document.querySelector(`.${props.className}__NumberInput input`);
        setInputStatus(false);
        input.focus();
        
    }
        return(
            <div className={props.className}>
                <RadioInput 
                name={`${props.name}`}
                className={props.className}
                options={options}
                onChange={e => props.onChange(e)}
                onClick={handleClick}/>

                <NumberInput
                disabled={inputStatus}
                onChange={e=>props.onKeyDown(e)}
                id="CPF2"
                className={props.className + "__NumberInput"}/>
            </div>
        )
}