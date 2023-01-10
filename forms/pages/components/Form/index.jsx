import React from "react";
import TextInput from "../TextInput";
import NumberInput from "../NumberInput";
import RadioInput from "../RadioInput";
import OptionsInput from "../OptionsInput";
import DocumentArea, {validationFn} from "../DocumentArea";

class Form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            genders:["Male","Feminine","Others"],
            maritalStatus: ["Married","Single","Divorced","Widowed"],
            answers:{
                name:"",
                age:"",
                gender:"",
                maritalStatus:"",
                documentType:""

            }
        }
    }

    handleChange(){

    }
    handleSubmit(e){
        e.preventDefault();
    }
    
    render(){
        return(
            <div className="Form">
            <form>
                <h3 className="Form__title">Forms </h3>
                <TextInput name="Name" className="Form__TextInput"/>
                <NumberInput name="age" className="Form__NumberInput"/>
                <RadioInput name="gender" options={this.state.genders}className="Form__RadioBox"/>
                <OptionsInput options={this.state.maritalStatus} name="Marital Status" className="Form__OptionsInput"/>
                <DocumentArea className="Form__DocumentArea"/>
                <button className="Form__submitBtn" type="submit" onClick={e=> this.handleSubmit(e)}>ENVIAR</button>
            </form>
            </div>
            
            )
        }
        
    }
    
    export default Form;