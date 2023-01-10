import RadioInput from "../RadioInput";
import React from "react";
import TextInput from "../TextInput";

export default function DocumentArea(props) {
    var options = ["CPF","CNPJ"]

        return(
            <div className={props.className}>
                <RadioInput options={options} name="options" onChange={e => props.onChange(e)}/>
                <TextInput onChange={e=>props.onKeyDown(e)}/>
            </div>
        )
}