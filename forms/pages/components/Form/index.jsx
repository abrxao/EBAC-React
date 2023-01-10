import React from "react";
import TextInput from "../TextInput";
import NumberInput from "../NumberInput";
import RadioInput from "../RadioInput";
import OptionsInput from "../OptionsInput";
import DocumentArea from "../DocumentArea";

class Form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            genders:["Male","Feminine","Others"],
            maritalStatus: ["Select on","Married","Single","Divorced","Widowed"],
            answers:{
                name:"",
                age:"",
                gender:"",
                maritalStatus:"",
                documentType:"",
                documentNumber:"",
            }
        }
    }

    handleChange(){

    }
    handleSubmit(e){
        console.log(this.state.answers);
        e.preventDefault();
    }
    
    render(){
        return(
            <div className="Form">
            <form>
                <h3 className="Form__title">Forms </h3>

                <TextInput name="Name" className="Form__TextInput" onChange={e=>this.setState({
                    answers:{
                        ...this.state.answers,
                        name:e.target.value
                    }
                })}/>

                <NumberInput name="age" className="Form__NumberInput" onChange={e=>this.setState({
                    answers:{
                        ...this.state.answers,
                        age:e.target.value
                    }
                })}
                />

                <RadioInput name="gender" options={this.state.genders}className="Form__RadioBox" onChange={e=>this.setState({
                    answers:{
                      ...this.state.answers,
                       gender:e.target.value
                    }
                    
                })}/>

                <OptionsInput options={this.state.maritalStatus} name="Marital Status" className="Form__OptionsInput" onChange={e=>this.setState({
                    answers:{
                        ...this.state.answers,
                         maritalStatus:e.target.value
                      }
                    
                })}/>

                <DocumentArea className="Form__DocumentArea" onChange={e=> this.setState({
                    answers:{
                        ...this.state.answers,
                         documentType:e.target.value
                      }
                })} 
                onKeyDown={e=> this.setState({
                    answers:{
                        ...this.state.answers,
                         documentNumber:e.target.value
                      }
                })}
                />

                <button className="Form__submitBtn" type="submit" onClick={e=> this.handleSubmit(e)}>SEND</button>
            </form>
            </div>
            
            )
        }
        
    }
    
    export default Form;