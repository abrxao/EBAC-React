 import React, {useState} from "react";
 import './style.css';
 
 function IMC(){
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [imc, setIMC] = useState(0);
    
    function calculator(){
        setIMC(parseFloat(weight / (height * height)).toFixed(1));
    }
    return (
        <div className="IMC">
        <h2>Cálculo IMC</h2>
        <input 
            type="text" 
            placeholder="digite sua altura"
            value={height}
            onChange={e => setHeight(e.target.value)}
            />
        
        <input 
            type="text" 
            placeholder="digite seu peso"
            value={weight}
            onChange = {e => setWeight(e.target.value)}
        />
        <button onClick={calculator} >Calcular</button>
        <h4>Resultado: {imc}</h4> 
        </div>
        )
    }
    
    export default IMC;