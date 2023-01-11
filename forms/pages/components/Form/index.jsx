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
                document:{
                    type:"",
                    number:"",
                    isValid:false
                }
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
                <div className="Form__title">
                    <h1>FORMS</h1>
                    <span></span>                
                </div>

                <TextInput name="Name" className="Form__TextInput" onChange={e=>

                this.setState({
                    answers:{
                        ...this.state.answers,
                        name:e.target.value
                    }
                })}/>

                <NumberInput name="Age" required={true}className="Form__NumberInput" onChange={e=>this.setState({
                    answers:{
                        ...this.state.answers,
                        age:e.target.value
                    }
                })}
                />

                <RadioInput name="Gender" required={true} options={this.state.genders}className="Form__RadioBox" onChange={e=>this.setState({
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

                <DocumentArea name="Document Number" className="Form__DocumentArea" onChange={e=> this.setState({
                    answers:{
                        ...this.state.answers,
                         document:{
                            ...this.state.answers.document,
                            type:e.target.value
                         }
                      }
                })} 
                onKeyDown={e=> this.setState({
                    answers:{
                        ...this.state.answers,
                        document:{
                            ...this.state.answers.document,
                            number:e.target.value
                         }
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