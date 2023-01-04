import React, {useState} from "react";
import NumericButton from '../NumericButton';
import OperationButton from "../OperationButton";
import './CalcKeyboard.css';

const CalcKeyboard = () =>{
    var memory = [];
    
    function numberInput(e){
        const displayValue = document.querySelector('.Display__firstBlock');
        
        if(displayValue.id != "answer"){
            if(e.target.value.match(/^[0-9]*$/)){
                displayValue.innerHTML += e.target.value;
            }else if(!displayValue.innerHTML.match(",")){
                displayValue.innerHTML += e.target.value;
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
        
        if(!operationsSymbols.some( el => displayValue2.innerHTML.includes(el)) && displayValue.innerHTML!="" && e.target.value!="=" ){
            memory.push(displayValue.innerHTML);
            memory.push(e.target.id);
            displayValue2.innerHTML = displayValue.innerHTML + " " + e.target.value;
            displayValue.innerHTML = "";
        }else if(displayValue.innerHTML!=""){
            memory.push(displayValue.innerHTML);
            displayValue.innerHTML = operations[memory[1]](memory[0],memory[2]);
            displayValue.id="answer";
            displayValue2.innerHTML = "";
            memory=[];
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
    
    return (
        <div className="CalcKeyboard">
        <NumericButton number={1} onClick={numberInput}/>
        <NumericButton number={2} onClick={numberInput}/>
        <NumericButton number={3} onClick={numberInput}/>
        <OperationButton operation="division" operationSymbol="/" onClick={operationInput}/>
        <NumericButton number={4} onClick={numberInput}/>
        <NumericButton number={5} onClick={numberInput}/>
        <NumericButton number={6} onClick={numberInput}/>
        <OperationButton operation="mult" operationSymbol="x" onClick={operationInput}/>
        <NumericButton number={7} onClick={numberInput}/>
        <NumericButton number={8} onClick={numberInput}/>
        <NumericButton number={9} onClick={numberInput}/>
        <OperationButton operation="sub" operationSymbol="-" onClick={operationInput}/>
        <NumericButton number="," onClick={numberInput}/>
        <NumericButton number={0} onClick={numberInput}/>
        <OperationButton operation="equal" operationSymbol="=" onClick={operationInput}/>
        <OperationButton operation="sum" operationSymbol="+" onClick={operationInput}/>
        
        </div>
        )
    }
    
    export default CalcKeyboard;