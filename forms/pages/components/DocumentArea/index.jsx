import RadioInput from "../RadioInput";
import React from "react";
import TextInput from "../TextInput";

export default function DocumentArea(props) {
    var options = ["CPF","CNPJ"]

    const handleClick = ()=>{
        const input = document.querySelector(`.${props.className}__TextInput input`)
        input.focus()
    }
        return(
            <div className={props.className}>
                <RadioInput name={`${props.name} *`} className={props.className} options={options} onChange={e => props.onChange(e)} onClick={handleClick}/>
                <TextInput required={false} onChange={e=>props.onKeyDown(e)} className={props.className + "__TextInput"}/>
            </div>
        )
}