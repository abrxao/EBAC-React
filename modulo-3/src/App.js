import React from 'react';
import './App.css';
import CalcKeyboard from './components/CalcKeyboard';
import Display from './components/Display';
export default class App extends React.Component{
  
  constructor() {
    super();
    
    this.state = {
      firstNum:"",
      secondNum:"",
      operation:"",
      isAnswer:false,
      operations:{
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
    } 
  }
  
  operationInput(e){
    
    const displayValue = document.querySelector('.Display__firstBlock');
    const displayValue2 = document.querySelector('.Display__secBlock');
    const operationsSymbols = ["+","/","x","-"]
    
    if(!operationsSymbols.some( el => displayValue2.value.includes(el)) && displayValue.value!="" && e.value!="=" ){
      
      this.setState({
        operation:e.id
      });
      
      displayValue2.value = this.state.firstNum + " " + e.value;
      displayValue.value = "";
      displayValue2.classList.add("Display__secBlock--answer");
      
    }
    else if(displayValue.value!="" && this.state.operation){
      
      this.setState({
        secondNum: ""
      });
      
      this.setState({
        firstNum: this.state.operations[this.state.operation](this.state.firstNum,this.state.secondNum)
      });
      
      if(e.value!=="="){
        this.setState({
          operation: e.id
        });
        this.setState({
          firstNum: this.state.operations[this.state.operation](this.state.firstNum,this.state.secondNum)
        });
        displayValue2.value = `${this.state.operations[this.state.operation](this.state.firstNum,this.state.secondNum)} ${e.value}`;
        displayValue.value = "";
      }else{
        this.setState({
          operation: ""
        });
        this.setState({
          isAnswer: true
        });
        
        displayValue.value = this.state.operations[this.state.operation](this.state.firstNum,this.state.secondNum);
        
        displayValue2.value = "";
        
        displayValue2.classList.remove("Display__secBlock--answer");
      }
    };
  }
  
  numberInput(e){
    console.log(this.state)
    const displayValue = document.querySelector('.Display__firstBlock');
    
    if(e.value.match(/^[0-9]*$/)){
      
      if(this.state.isAnswer){
        displayValue.value = e.value;
        this.setState({
          isAnswer: false
        }) 
        !this.state.operation ? this.setState({firstNum: displayValue.value.replace(',','.')}):this.setState({secondNum: displayValue.value.replace(',','.')});
      }else{
        displayValue.value += e.value;
        
        !this.state.operation ? this.setState({firstNum: displayValue.value.replace(',','.')}):this.setState({secondNum: displayValue.value.replace(',','.')});
      }
      
    }else if(!displayValue.value.match(",")){
      
      displayValue.value += e.value;
      
      !this.state.operation ? this.setState({firstNum: displayValue.value.replace(',','.')}):
      this.setState({secondNum: displayValue.value.replace(',','.')});
    }
  }
  
  handleKeydown(e){
    console.log(e.key)
  }
  
  render(){
    return (
      <div className="App" onKeyDown={(e)=>this.handleKeydown(e)}>
        <div className="calculator" >
          <Display/>
          <CalcKeyboard numberInput={(e)=>this.numberInput(e)} operationInput={(e)=>this.operationInput(e)}/>
        </div>
      </div>
      
      )
    }
  }
  
  