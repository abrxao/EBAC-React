import Head from 'next/head';
import InputList from './components/InputList';
import Answers from './components/Answers';
import Forms from './components/Forms/Forms';
import Header from './components/Header/Header';
import React from 'react';
import axios from 'axios';
import {RiSendPlaneFill} from "react-icons/ri";
export default class Home extends React.Component {
  constructor(){
    super();
    
    this.state = {
      tipos: [" ","caminhoes","carros", "motos"],
      marcas:{
        nomes:[" "],
        codigo:[],
        isLoading:false
      },
      modelos:{
        nomes:[" "],
        codigos:[],
        isLoading:false
      },
      anos:{
        nomes:[" "],
        codigos:[],
        isLoading:false
      },
      resultados:{
        isFilled:false,
        marca:"",
        modelo:"",
        valor:"",
        ano:"",
        combustivel:""
      }
    }
    this.inputs={
      tipo:" ",
      marcas:{ 
        selected:"",
        isOff:true
      },
      modelo:{ 
        selected:"",
        isOff:true
      },
      ano:{ 
        selected:"",
        isOff:true
      },
      
    }
  }
  
  handleChangeTipo = async(e) => {
    const url = `https://parallelum.com.br/fipe/api/v1/${e.target.value.toLowerCase()}/marcas`;
    var marcas=[];
    var ids = [];

    this.requestUrl = "";
    this.inputs.marcas.isOff=true;
    this.inputs.modelo.isOff=true;
    this.inputs.ano.isOff=true;
    this.setState({
      ...this.state,
      marcas:{
        nomes:[" "],
        codigo:[],
        isLoading:true
      },
      modelos:{
        nomes:[" "],
        codigos:[],
        
      },
      anos:{
        nomes:[" "],
        codigos:[]
      }
    });
    
    if(e.target.value!=""){
      this.inputs.tipo=e.target.value;
      await axios.get(url)
      .then((res)=>{
        res.data.forEach((elem,index)=>{
          if(index!=0){
            marcas.push(elem.nome);
            ids.push(elem.codigo);
            
          }else{
            marcas.push(" ")
            marcas.push(elem.nome);
            ids.push(" ");
            ids.push(elem.codigo);
          }});
        
        this.inputs.marcas.isOff=false;
        this.inputs.modelo.isOff=true;
        this.inputs.ano.isOff=true;
        this.setState({
          marcas:{nomes: marcas, codigo:ids,isLoading:false}
        }); 
      });
    }
  }
  
  handleChangeMarcas = async(e) => {
    const marca = e.target.value;
    const index = this.state.marcas.nomes.indexOf(marca);
    const codigo = this.state.marcas.codigo[index];
    const url = `https://parallelum.com.br/fipe/api/v1/${this.inputs.tipo.toLowerCase()}/marcas/${codigo}/modelos`;

    this.requestUrl = "";
    this.inputs.modelo.isOff=true;
    this.inputs.modelo.isLoading=true;
    this.inputs.ano.isOff=true;
    this.setState({
      ...this.state,
      modelos:{
        nomes:[" "],
        codigos:[],
        isLoading:true
      },
      anos:{
        nomes:[" "],
        codigos:[]
      }
    });
    
    var modelos = [];
    var codigos = [];
    if(e.target.value!=""){
      
    this.inputs.marcas.selected=codigo.toLowerCase();
      await axios.get(url)
      .then((res)=>{
        res.data.modelos.forEach((elem, index)=>{
          if(index!=0){
            modelos.push(elem.nome);
            codigos.push(elem.codigo);
          }else{
            modelos.push(" ");
            modelos.push(elem.nome);
            codigos.push(" ");
            codigos.push(elem.codigo);
          }
        });

        setTimeout(()=>{
          this.inputs.modelo.isLoading=false;
        },200)

        this.setState({
          modelos:{
            nomes: modelos,
            codigos: codigos
          }
        });
        this.inputs.modelo.isOff = false;
      })
    }
  }
  
  handleChangeModelo = async(e) =>{
    const modelo = e.target.value;
    const index = this.state.modelos.nomes.indexOf(modelo);
    const codigo = this.state.modelos.codigos[index];
    const url = `https://parallelum.com.br/fipe/api/v1/${this.inputs.tipo.toLowerCase()}/marcas/${this.inputs.marcas.selected}/modelos/${codigo}/anos`;

    this.inputs.ano.isOff=true;
    this.setState({
      ...this.state,
      anos:{
        nomes:[" "],
        codigos:[],
        isLoading:true
      }
    });
    
    var anos = [];
    var codigos = [];    
    if(e.target.value!=""){
      this.inputs.modelo.selected=codigo;
      axios.get(url)
      .then((res) =>{
        res.data.forEach((elem,index)=>{
          if(index!=0){
            anos.push(elem.nome);
            codigos.push(elem.codigo);
          }else{
            anos.push(" ");
            anos.push(elem.nome);
            codigos.push(" ");
            codigos.push(elem.codigo);
          }
          
        });
        this.setState({
          ...this.state,
          anos:{
            nomes:anos,
            codigos:codigos,
            isLoading:false
          }}); 
          this.inputs.ano.isOff = false;
        });
      }
  }
    
  handleChangeAno(e){
    const ano = e.target.value;
    const index = this.state.anos.nomes.indexOf(ano);
    const codigo = this.state.anos.codigos[index];
    const url = `https://parallelum.com.br/fipe/api/v1/${this.inputs.tipo.toLowerCase()}/marcas/${this.inputs.marcas.selected}/modelos/${this.inputs.modelo.selected}/anos/${codigo}`
    
    this.requestUrl = url;

    if(e.target.value!=""){
      this.inputs.ano.selected = codigo;
      
    }
  }
    
  handleSubmit = async (e)=>{
    e.preventDefault();
    if(this.requestUrl!=""){
      await axios.get(this.requestUrl).
      then((res)=> {
        console.log(res.data)
        this.setState({
          ...this.state,
          resultados:{
            isFilled:true,
            marca:res.data.Marca,
            modelo:res.data.Modelo,
            valor:res.data.Valor,
            ano:res.data.AnoModelo,
            combustivel:res.data.Combustivel
          }
        });
      });
    }
    
  }
    
    render(){
      return (
        <>
        <Head>
        <title>FIPE Search</title>
        <meta name="description" content="Consultar Tabela FIPE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main>
          <Forms>
            <Header title="FIPE" subtitle="Selecione os campos abaixo:"/>
            <InputList isLoading={false} id="autoType" onChange={e => this.handleChangeTipo(e)} type="select" title="Escolha o tipo de veiculo" options={this.state.tipos}/>
            
            <InputList isLoading={this.state.marcas.isLoading} id="marca" onChange={e => this.handleChangeMarcas(e)} type="select" title="Escolha a marca" options={this.state.marcas.nomes} disable={this.inputs.marcas.isOff}/>
            
            <InputList isLoading={this.state.modelos.isLoading} id="modelo" onChange={e => this.handleChangeModelo(e)}  type="select" title="Escolha o modelo" options={this.state.modelos.nomes} disable={this.inputs.modelo.isOff}/>
            
            <InputList isLoading={this.state.anos.isLoading} id="ano" onChange={e => this.handleChangeAno(e)} type="select" title="Escolha o ano" options={this.state.anos.nomes} disable={this.inputs.ano.isOff}/>
            
            <div>
            <button onClick={e=> this.handleSubmit(e)} type="submit" >SEND<RiSendPlaneFill/></button>
            </div>
          
          </Forms>
          <Answers>
            {this.state.resultados.isFilled &&
              <div>
                <p><b>Marca:</b> {this.state.resultados.marca}</p>
                <p><b>Modelo:</b> {this.state.resultados.modelo}</p>
                <p><b>Valor:</b> {this.state.resultados.valor}</p>
                <p><b>Ano:</b> {this.state.resultados.ano}</p>
                <p><b>Combustivel:</b> {this.state.resultados.combustivel}</p>
              </div>
            }
            {!this.state.resultados.isFilled &&
                <div>
                  <h3>sem resultados ainda</h3>
                </div>
            }
            
          </Answers>
                  
        </main>
        </>
        )}
      }
      