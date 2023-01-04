import React, {useEffect} from "react";
import NumericButton from '../NumericButton';
import OperationButton from "../OperationButton";
import './CalcKeyboard.css';

document.addEventListener("keydown", (e)=>{
        
    const numbers = "0123456789"
    const operations = "+=-/x*"
    
    
    if(numbers.includes(e.key)){
        const key = document.querySelector(`input[value="${e.key}"]`);
        numberInput(key);
    }else if(operations.includes(e.key)){
        const key = document.querySelector(`input[value="${e.key}"]`);
        operationInput(key);
    }

});

var memory = [];
    
    function numberInput(e){
        const displayValue = document.querySelector('.Display__firstBlock');
        
        if(displayValue.id != "answer"){
            if(e.value.match(/^[0-9]*$/)){
                displayValue.innerHTML += e.value;
            }else if(!displayValue.innerHTML.match(",")){
                displayValue.innerHTML += e.value;
            }
        }else{
            displayValue.innerHTML = "";
            displayValue.id = "";
            numberInput(e);
        }
    }    
    
    function operationInput(e){
        
        const displayValue = document.querySelector('.Display__firstBlock');
        const displayValue2 = document.querySelector('.Display__secBlock');
        const operationsSymbols = ["+","/","x","-"]
        
        if(!operationsSymbols.some( el => displayValue2.innerHTML.includes(el)) && displayValue.innerHTML!="" && e.value!="=" ){
            
            memory.push(displayValue.innerHTML);
            memory.push(e.id);
            displayValue2.innerHTML = displayValue.innerHTML + " " + e.value;
            displayValue.innerHTML = "";
            displayValue2.classList.add("Display__secBlock--answer");
            
        }else if(displayValue.innerHTML!=""){
            
            memory.push(displayValue.innerHTML);
            displayValue.innerHTML = operations[memory[1]](memory[0],memory[2]);
            displayValue.id="answer";
            displayValue2.innerHTML = "";
            memory=[];
            displayValue2.classList.remove("Display__secBlock--answer");
        }
    }
    
    const operations = {
        sum: (a,b)=>{
            return parseFloat(a)+parseFloat(b);
        },
        sub:(a,b)=>{
            return parseFloat(a)-parseFloat(b);
        },
        division: (a,b)=>{
            return parseFloat(a)/parseFloat(b);
        },
        mult: (a,b)=>{
            return parseFloat(a)*parseFloat(b);
        }
    }

const CalcKeyboard = () =>{
    return (
        <div className="CalcKeyboard">
        <NumericButton number={1} onClick={e => numberInput(e.target)}/>
        <NumericButton number={2} onClick={e => numberInput(e.target)}/>
        <NumericButton number={3} onClick={e => numberInput(e.target)}/>
        <OperationButton operation="division" operationSymbol="/" onClick={e =>operationInput(e.target)}/>
        <NumericButton number={4} onClick={e => numberInput(e.target)}/>
        <NumericButton number={5} onClick={e => numberInput(e.target)}/>
        <NumericButton number={6} onClick={e => numberInput(e.target)}/>
        <OperationButton operation="mult" operationSymbol="x" onClick={e =>operationInput(e.target)}/>
        <NumericButton number={7} onClick={e => numberInput(e.target)}/>
        <NumericButton number={8} onClick={e => numberInput(e.target)}/>
        <NumericButton number={9} onClick={e => numberInput(e.target)}/>
        <OperationButton operation="sub" operationSymbol="-" onClick={e =>operationInput(e.target)}/>
        <NumericButton number="," onClick={e => numberInput(e.target)}/>
        <NumericButton number={0} onClick={e => numberInput(e.target)}/>
        <OperationButton operation="equal" operationSymbol="=" onClick={e =>operationInput(e.target)}/>
        <OperationButton operation="sum" operationSymbol="+" onClick={e =>operationInput(e.target)}/>
        
        </div>
        )
    }
    
    export default CalcKeyboard;