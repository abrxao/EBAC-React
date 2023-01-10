import RadioInput from "../RadioInput";
import React from "react";
import TextInput from "../TextInput";

export const validationFn={
    CPF:()=>{

    },
    CPNJ:()=>{

    }
}

export class DocumentArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: ["CPF","CPNJ"],
            isCPNJ: true
        }
    }

    handleRadioChange(){
        
    }

    render(){
        return(
            <div className={this.props.className}>
                <RadioInput options={this.state.options} name="options" onChange={e => this.handleRadioChange(e)}/>
                <TextInput name=""/>
            </div>
            
        )
    }
}

export default DocumentArea;