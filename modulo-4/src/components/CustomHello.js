import React, {useState} from "react";

export default function CustomHello(){

    function customAlert(value){
        alert('Hello ' + value);
    }

    const [value, setValue] = useState("world");
    return(
        <div>
        <label>Receba um hello custumizado</label>
        <input type="text"  onChange={(e)=>setValue(e.target.value)} value={value}></input>
        <button onClick={e=>customAlert(value)}> enviar</button>
        </div>
    )
}