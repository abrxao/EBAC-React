import React from "react";
import NumericButton from './NumericButton';
import OperationButton from "./OperationButton";
import './CalcKeyboard.css';

const CalcKeyboard = (props) =>{
    
    
    return (
        <div className="CalcKeyboard">
        <NumericButton number={1} onClick={e => props.numberInput(e.target)}/>
        <NumericButton number={2} onClick={e => props.numberInput(e.target)}/>
        <NumericButton number={3} onClick={e => props.numberInput(e.target)}/>
        <OperationButton operation="division" operationSymbol="/" onClick={e =>props.operationInput(e.target)}/>
        <NumericButton number={4} onClick={e => props.numberInput(e.target)}/>
        <NumericButton number={5} onClick={e => props.numberInput(e.target)}/>
        <NumericButton number={6} onClick={e => props.numberInput(e.target)}/>
        <OperationButton operation="mult" operationSymbol="x" onClick={e =>props.operationInput(e.target)}/>
        <NumericButton number={7} onClick={e => props.numberInput(e.target)}/>
        <NumericButton number={8} onClick={e => props.numberInput(e.target)}/>
        <NumericButton number={9} onClick={e => props.numberInput(e.target)}/>
        <OperationButton operation="sub" operationSymbol="-" onClick={e =>props.operationInput(e.target)}/>
        <NumericButton number="," onClick={e => props.numberInput(e.target)}/>
        <NumericButton number={0} onClick={e => props.numberInput(e.target)}/>
        <OperationButton operation="equal" operationSymbol="=" onClick={e =>props.operationInput(e.target)}/>
        <OperationButton operation="sum" operationSymbol="+" onClick={e =>props.operationInput(e.target)}/>
        
        </div>
        )
        
    }
    
    export default CalcKeyboard;