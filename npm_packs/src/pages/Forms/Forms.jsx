import React from "react";
import Menu from "../../components/Menu/Menu";
import "./Forms.scss";
import { Button, Container, FormControl, TextField, Typography } from '@mui/material';
import {AiOutlineSend} from "react-icons/ai";
import IMask from 'imask';

export default class Forms extends React.Component{
    
    constructor(){
        super();
        
        this.state ={
            user: {
                error:false,
            },
            phone:{error:false},
            cpf:{error:false},
            answers:{
                user:"",
                cpf:"",
                phone:""
            }
        }
    }

    cpfValidation(val){
        const CPF = val.replace(/[\.-]/g, "");
        var sum;
        var rest;
        sum = 0;
        if (CPF == "00000000000") return (false) ;
        
        for (var i=1; i<=9; i++) sum = sum + parseInt(CPF.substring(i-1, i)) * (11 - i);
        rest = (sum * 10) % 11;
        
        if ((rest == 10) || (rest == 11))  rest = 0;
        if (rest != parseInt(CPF.substring(9, 10)) ) return (false) ;
        
        sum = 0;
        for (var i = 1; i <= 10; i++) sum = sum + parseInt(CPF.substring(i-1, i)) * (12 - i);
        rest = (sum * 10) % 11;
        
        if ((rest == 10) || (rest == 11))  rest = 0;
        if (rest != parseInt(CPF.substring(10, 11) ) ) return (false) ;
        return (true) ;
    }

    componentDidMount() {
        const maskOptions = {
            phone:{
                mask: '(00) 00000-0000',
                isContentEditable: true 
            },
            cpf:{
                mask: '000.000.000-00',
                isContentEditable: true
            }
        };
        const inputPhone = document.querySelector('input[name="phone"]');
        IMask(inputPhone, maskOptions.phone);

        const inputcpf = document.querySelector('input[name="cpf"]');
        IMask(inputcpf, maskOptions.cpf);
    }
    
    handleSend(e){
        e.preventDefault();
        if(this.cpfValidation(this.state.answers.cpf)
            && this.state.answers.user.length>=5
            && this.state.answers.phone.length==15){
                var form = document.querySelector("form");
                form.reset();
                this.setState({
                    ...this.state,
                    answers:{
                        user:"",
                        cpf:"",
                        phone:""
                    },
                    user:{
                        error:false
                    },
                    phone:{
                        error: false
                    },
                    cpf:{
                        error: false
                    },
                });

                if(localStorage.answers){
                    var array = JSON.parse(localStorage.answers);
                    var aux = array.map(elem=>{
                        return elem
                    });
                    aux.push(this.state.answers);
                    
                    localStorage.setItem("answers",JSON.stringify(aux));
                }else{
                    localStorage.setItem("answers",JSON.stringify([this.state.answers]));
                }
            
        }
        else{
            this.setState({
                ...this.state,
                user:{
                    error:this.state.answers.user.length<5,
                },
                phone:{
                    error: this.state.answers.phone.length!=15,
                },
                cpf:{
                    error: !this.cpfValidation(this.state.answers.cpf)
                }
            });
        }
    }
    
    render(){
        return(
            <main className="Forms">
                <Menu/>
                <Container maxWidth="sm"
                sx={{
                    backgroundColor: "#fff2",
                    borderRadius: 1,
                    boxShadow: "3px 3px 4px #0006",
                    padding:2,
                    margin: "1rem 0",
                }}>
                    <form >
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#fff",
                                letterSpacing:"1px"
                            }}
                        >PREENCHA O FORMULARIO</Typography>
                        <FormControl fullWidth={true}>
                            <TextField
                            required={true}
                            margin="normal"
                            fullWidth={true}
                            onChange={e=>this.setState({
                                ...this.state,
                                answers:{
                                    ...this.state.answers,
                                    user : e.target.value}})}
                            name="name"
                            error={this.state.user.error} label="Nome completo" variant="standard" />
                            
                            <TextField
                            required={true}
                            margin="normal"
                            fullWidth={true}
                            onChange={e=>this.setState({
                                ...this.state,
                                answers:{
                                    ...this.state.answers,
                                    cpf : e.target.value}})
                                }
                            name="cpf"
                            placeholder="000.000.000-00"
                            error={this.state.cpf.error} label="Digite seu CPF"variant="standard" />

                            <TextField
                            required={true}
                            margin="normal"
                            fullWidth={true}
                            onChange={e=>this.setState({
                                ...this.state,
                                answers:{
                                    ...this.state.answers,
                                phone : e.target.value}})}
                            name="phone"
                            placeholder="(99) 99999-9999"
                            error={this.state.phone.error}
                            label="Digite seu telefone"
                            variant="standard" />

                            <Button 
                            sx={{marginTop: 2}}
                            margin="normal"
                            type="submit"
                            endIcon={<AiOutlineSend/>}
                            variant="outlined"
                            onClick={e=>this.handleSend(e)}>ENVIAR</Button>

                        </FormControl>
                    </form>
                </Container>
                
            </main>
        );}
}