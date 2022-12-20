 import React, {useState, useEffect} from "react";
 import './style.css';
 import imcClassify from "../../IMC_lib/imcClassify";
 
 function IMC(){
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [imc,setIMC] = useState(0);
    const [classification, setClassification] = useState(0);
    
    function calculator(){
        
        if(weight.match(/[a-zA-Z]/) || height.match(/[a-zA-Z]/)){
            alert('Verifique os valores dos campos');
        }else{
            setIMC(parseFloat(weight / (height * height)).toFixed(2));
            
        }
    
    }

    useEffect(()=>{
        setClassification(imcClassify(imc));
    },[imc])

return (
    <div className="IMC">    
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
    
    <button onClick={calculator}>Calcular</button>
    
    <div className="resultBlock">
    <h4>IMC: {imc}</h4>
    <p>{classification}</p>
    </div>
    
    </div>
    )
    
}

export default IMC;