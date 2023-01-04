import React, {useState} from "react";
import NumericButton from '../NumericButton';
import OperationButton from "../OperationButton";
import './CalcKeyboard.css';

const CalcKeyboard = () =>{
    const [value1, setValue1] = useState(0);

    var memory = [];
    
    function numberClick(e){
        const displayValue = document.querySelector('.Display');
        if(e.target.value.match(/^[0-9]*$/)){
            displayValue.innerHTML += e.target.value;
        }else if(!displayValue.innerHTML.match(",")){
            displayValue.innerHTML += e.target.value;
        }
    }
    

    function operationClick(e){
        const displayValue = document.querySelector('.Display');
        if(!displayValue.innerHTML.match(/([+,-,x,/])/g) && displayValue.innerHTML!=""){
            setValue1(displayValue.innerHTML);
            console.log(value1);
            displayValue.innerHTML += " " + e.target.value+" ";
        }
    }
    
    return (
        <div className="CalcKeyboard">
        <NumericButton number={1} onClick={numberClick}/>
        <NumericButton number={2} onClick={numberClick}/>
        <NumericButton number={3} onClick={numberClick}/>
        <OperationButton operation="/" onClick={operationClick}/>
        <NumericButton number={4} onClick={numberClick}/>
        <NumericButton number={5} onClick={numberClick}/>
        <NumericButton number={6} onClick={numberClick}/>
        <OperationButton operation="x" onClick={operationClick}/>
        <NumericButton number={7} onClick={numberClick}/>
        <NumericButton number={8} onClick={numberClick}/>
        <NumericButton number={9} onClick={numberClick}/>
        <OperationButton operation="-" onClick={operationClick}/>
        <NumericButton number="," onClick={numberClick}/>
        <NumericButton number={0} onClick={numberClick}/>
        <OperationButton operation="=" onClick={operationClick}/>
        <OperationButton operation="+" onClick={operationClick}/>
        
        </div>
        )
    }
    
    export default CalcKeyboard;