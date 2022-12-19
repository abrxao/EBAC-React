 import React, {useState} from "react";
 import './style.css';
 
 function IMC(){
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [imc, setIMC] = useState(0);
    
    function calculator(){
        if(weight.match(/[a-zA-Z]/) || height.match(/[a-zA-Z]/)){
            alert('Verifique os valores dos campos');
        }else{
           setIMC(parseFloat(weight / (height * height)).toFixed(2)); 
        }
        
    }    
    
    return (
        <div className="IMC">
            <h2>Cálculo IMC</h2>
            
            <div className="inputField">
                <label for="height">Altura</label>
                <input 
                type="text" 
                value={height}
                onChange={e => setHeight(e.target.value)}
                />
            </div>
            
            <div className="inputField">
            <label for="weight">Peso</label>  
                <input 
                type="text" 
                value={weight}
                onChange = {e => setWeight(e.target.value)}
                />
            </div>
            
            <button onClick={calculator} >Calcular</button>
            
            <div className="resultBlock">
                <h4 >Resultado: {imc}</h4> 
            </div>
        
        
        </div>
        )
    }
    
    export default IMC;