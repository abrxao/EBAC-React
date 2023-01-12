import React from "react";
import TextInput from "../TextInput";
import NumberInput from "../NumberInput";
import RadioInput from "../RadioInput";
import OptionsInput from "../OptionsInput";
import DocumentArea from "../DocumentArea";
import ModalErro from "../ModalErro";

class Form extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            modal: "",
            erroCamps:[],
            genders:["Male","Feminine","Others"],
            maritalStatus: ["Select on","Married","Single","Divorced","Widowed"],
            answers:{
                name:{
                    value:"",
                    area:"Name"
                },
                age:{
                    value:"",
                    area:"Age"
                },
                gender:{
                    value:"",
                    area:"Gender"
                },
                maritalStatus:{
                    value:"",
                    area:""
                },
                document:{
                    area:"CPF2",
                    type:"",
                    number:""
                }
                
            },
            status:false
        }
        
    }
    
    validCPF(CPF) {
        var sum;
        var rest;
        sum = 0;
        if (CPF == "00000000000") return false;
        
        for (var i=1; i<=9; i++) sum = sum + parseInt(CPF.substring(i-1, i)) * (11 - i);
        rest = (sum * 10) % 11;
        
        if ((rest == 10) || (rest == 11))  rest = 0;
        if (rest != parseInt(CPF.substring(9, 10)) ) return false;
        
        sum = 0;
        for (var i = 1; i <= 10; i++) sum = sum + parseInt(CPF.substring(i-1, i)) * (12 - i);
        rest = (sum * 10) % 11;
        
        if ((rest == 10) || (rest == 11))  rest = 0;
        if (rest != parseInt(CPF.substring(10, 11) ) ) return false;
        return true;
    }

    validCNPJ(cnpj) {
 
        cnpj = cnpj.replace(/[^\d]+/g,'');
     
        if(cnpj == '') return false;
         
        if (cnpj.length != 14) return false;

        if (cnpj == "00000000000000" || 
            cnpj == "11111111111111" || 
            cnpj == "22222222222222" || 
            cnpj == "33333333333333" || 
            cnpj == "44444444444444" || 
            cnpj == "55555555555555" || 
            cnpj == "66666666666666" || 
            cnpj == "77777777777777" || 
            cnpj == "88888888888888" || 
            cnpj == "99999999999999")
            return false;

        var size = cnpj.length - 2
        var numbers = cnpj.substring(0,size);
        var digits = cnpj.substring(size);
        var sum = 0;
        var pos = size - 7;
        for (var i = size; i >= 1; i--) {
          sum += numbers.charAt(size - i) * pos--;
          if (pos < 2)
                pos = 9;
        }
        var result = sum % 11 < 2 ? 0 : 11 - sum % 11;
        if (result != digits.charAt(0))
            return false;
             
        size = size + 1;
        numbers = cnpj.substring(0,size);
        sum = 0;
        pos = size - 7;
        for (var i = size; i >= 1; i--) {
          sum += numbers.charAt(size - i) * pos--;
          if (pos < 2)
                pos = 9;
        }
        result = sum % 11 < 2 ? 0 : 11 - sum % 11;
        if (result != digits.charAt(1))
              return false;
               
        return true;
        
    }
    
    handleSubmit(e){
        const answers = this.state.answers;
        const invalids = document.querySelectorAll(".invalid");
        invalids.forEach((e)=>{
            e.classList.remove("invalid");
        })

        e.preventDefault();
        if(answers.document.type==="CPF"){
            this.validCPF(answers.document.number) ? "":this.state.erroCamps.push(answers.document)
        }else if(answers.document.type==="CNPJ"){
            this.validCNPJ(answers.document.number) ? "":this.state.erroCamps.push(answers.document)
        }

        if(!answers.gender.value){
            this.state.erroCamps.push(answers.gender);
            
        }

        if(answers.age.value <= 0 || answers.age>=125){
            this.state.erroCamps.push(answers.age);
        }

        if(answers.name.value.length < 4){
            this.state.erroCamps.push(answers.name);
        }

        this.state.erroCamps.forEach((elem)=>{
            const area = document.querySelector(`#${elem.area}`);
            area.classList.add("invalid")
        });

        if(this.state.erroCamps.length > 0){
            this.setState({
                ...this.state,
                modal:"visible"
            });
            setTimeout(()=>{
                this.setState({
                    ...this.state,
                    modal:""
                });
            },4000)
        }else{
            this.setState({
                ...this.state,
                    status: true
            })
        }

        setTimeout(()=>{
            this.setState({
                ...this.state,
                erroCamps: []
            })
        },500)
    }
    
    render(){
        return(
            <div className="webApp">
                <div className="Form">
                    <form>
                        <div className="Form__title">
                        <h1>FORMS</h1>
                        <span></span>                
                        </div>
                        
                        <TextInput
                        name="Name"
                        id="Name"
                        className="Form__TextInput" onChange={e=>
                            
                            this.setState({
                                ...this.state,
                                answers:{
                                    ...this.state.answers,
                                    name:{
                                        ...this.state.answers.name,
                                        value: e.target.value
                                    }
                                }
                            })}/>
                            
                        <NumberInput 
                        name="Age"
                        id="Age"
                        required={true}
                        className="Form__NumberInput"
                        onChange={e=>this.setState({
                            answers:{
                                ...this.state.answers,
                                age:{
                                    ...this.state.answers.age,
                                    value:e.target.value
                                }
                            }
                        })}
                        />
                            
                        <RadioInput name="Gender *"
                        id="Gender" erro="" required={true} options={this.state.genders} className="Form__RadioBox" onChange={e=>this.setState({
                            answers:{
                                ...this.state.answers,
                                gender:{
                                    ...this.state.answers,
                                    value:e.target.value
                                }
                            }
                            
                        })}/>
                        
                        <OptionsInput options={this.state.maritalStatus} name="Marital Status" className="Form__OptionsInput" onChange={e=>this.setState({
                            answers:{
                                ...this.state.answers,
                                maritalStatus:e.target.value
                            }
                            
                        })}/>
                        
                        <DocumentArea erro="" id="CPF" name="Document Number" className="Form__DocumentArea" onChange={e=> this.setState({
                            ...this.state,
                            answers:{
                                ...this.state.answers,
                                document:{
                                    ...this.state.answers.document,
                                    type:e.target.value
                                }
                            }
                        })} 
                        onKeyDown={e=> this.setState({
                            ...this.state,
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
                            <ModalErro visible={this.state.modal}/>
                    </form>
                </div>
                <div className="anwsersForm">
                        <p>Name:{this.state.status && this.state.answers.name.value}</p>
                        <p>Age:{this.state.status && this.state.answers.age.value}</p>
                        <p>Gender: {this.state.status && this.state.answers.gender.value}</p>
                        <p>Marital Status: {this.state.status && this.state.answers.maritalStatus}</p>
                        <p>Document Type: {this.state.status && this.state.answers.document.type}</p>
                        <p>Document Number: {this.state.status && this.state.answers.document.number}</p>
                </div>

                
                
            </div> 
        )
    }          
}

export default Form;