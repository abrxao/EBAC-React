import Head from 'next/head';
import InputList from './components/InputList';
import Answers from './components/Answers';
import Forms from './components/Forms/Forms';
import Header from './components/Header/Header';
import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import {RiSendPlaneFill} from "react-icons/ri";

export default function Home (){
  const [requestUrl, setRequestUrl] = useState("");

  const [tipos, setTipos] = useState({
    nomes:[" ","caminhoes","carros", "motos"],
    selected:""
  });
  
  const [marcas, setMarcas] = useState({
      nomes:[" "],
      codigos:[],
      isLoading:false,
      selected:"",
      isOff:true
    });

  const [modelos, setModelos] = useState({
    nomes:[" "],
    codigos:[],
    isLoading:false,
    selected:"",
    isOff:true
  });
  
  const [anos, setAnos]= useState({
    nomes:[" "],
    codigos:[],
    isLoading:false,
    selected:"",
    isOff:true
  });

  const [resultados, setResultados] = useState({
    isFilled:false,
    marca:"",
    modelo:"",
    valor:"",
    ano:"",
    combustivel:""
  });
  
  const handleChangeTipo = async(e) => {

    const url = `https://parallelum.com.br/fipe/api/v1/${e.target.value.toLowerCase()}/marcas`
    setRequestUrl(url);

    var nomes=[];
    var ids = [];
    setMarcas({
      ...marcas,
      nomes:[],
      isLoading:true
    });
    setModelos({
      ...modelos,
      nomes:[],
      isOff:true,
    })
    setAnos({
      ...anos,
      nomes:[],
      isOff:true,
    })
    
    if(e.target.value!=""){
      setTipos({
        ...tipos,
        selected: e.target.value
      })
      await axios.get(url)
      .then((res)=>{

        res.data.forEach((elem,index)=>{
          if(index!=0){
            nomes.push(elem.nome.trim());
            ids.push(elem.codigo);
            
          }else{
            nomes.push(" ")
            nomes.push(elem.nome.trim());
            ids.push(" ");
            ids.push(elem.codigo);
          }});

        setMarcas({
            ...marcas,
            codigos: ids,
            nomes:nomes,
            isOff:false
          });
        });

      }else{
        setMarcas({
        ...marcas,
        nomes:[],
        isOff:true,
        isLoading:false
      });
      }
      
  }
    
  const handleChangeMarcas = async(e) => {
    const marca = e.target.value;
    const index = marcas.nomes.indexOf(marca);
    const codigo = marcas.codigos[index];
    const url = `https://parallelum.com.br/fipe/api/v1/${tipos.selected.toLowerCase()}/marcas/${codigo}/modelos`;
    
    setRequestUrl(url);

    setModelos({
      ...modelos,
      isLoading:true,
      nomes:[],
      isOff:true,
    })
    setAnos({
      ...anos,
      nomes:[],
      isOff:true,
    })
    
    var nomes = [];
    var codigos = [];
    if(e.target.value!=""){
      setMarcas({
        ...marcas,
        selected:codigo
      })
      await axios.get(url)
      .then((res)=>{
        res.data.modelos.forEach((elem, index)=>{
          if(index!=0){
            nomes.push(elem.nome.replace(/\s{2,}/g, ' '));
            codigos.push(elem.codigo);
          }else{
            nomes.push(" ");
            nomes.push(elem.nome.replace(/\s{2,}/g, ' '));
            codigos.push(" ");
            codigos.push(elem.codigo);
          }
        });
        
        setTimeout(()=>{
          setModelos({
            ...modelos,
            nomes:nomes,
            codigos:codigos,
            isLoading:false,
            isOff:false
          });
        },200)
      })
    }
  }
  
  const handleChangeModelo = async(e) =>{
    const modelo = e.target.value;
    const index = modelos.nomes.indexOf(modelo);
    const codigo = modelos.codigos[index];

    const url = `https://parallelum.com.br/fipe/api/v1/${tipos.selected.toLowerCase()}/marcas/${marcas.selected}/modelos/${codigo}/anos`;
    
    setAnos({
      ...anos,
      isLoading:true,
      nomes:[],
      isOff:true,
    })
    
    var nomes = [];
    var codigos = [];    
    if(e.target.value!=""){
      setModelos({
        ...modelos,
        selected:codigo
      })
      axios.get(url)
      .then((res) =>{
        res.data.forEach((elem, index)=>{
          if(index!=0){
            nomes.push(elem.nome.trim());
            codigos.push(elem.codigo);
          }else{
            nomes.push(" ");
            nomes.push(elem.nome.trim());
            codigos.push(" ");
            codigos.push(elem.codigo);
          }
        });
        setAnos({
          ...anos,
          nomes:nomes,
          codigos:codigos,
          isOff:false,
          isLoading:false,

        });
      })
      .catch((err)=>{
        console.error(err.message);
      });
    }
  }
      
  const handleChangeAno = (e)=>{
    const ano = e.target.value;
    const index = anos.nomes.indexOf(ano);
    const codigo = anos.codigos[index];
    const url = `https://parallelum.com.br/fipe/api/v1/${tipos.selected.toLowerCase()}/marcas/${marcas.selected}/modelos/${modelos.selected}/anos/${codigo}`
    
    setRequestUrl(url);
    
    if(e.target.value!=""){
      setAnos({
        ...anos,
        selected:codigo
      })      
    }
  }
  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(requestUrl!=""){
      await axios.get(requestUrl).
      then((res)=> {
        setResultados({
          isFilled:true,
          marca:res.data.Marca,
          modelo:res.data.Modelo,
          valor:res.data.Valor,
          ano:res.data.AnoModelo,
          combustivel:res.data.Combustivel
        })
      });
    }
    
  }
      
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
        
        <InputList isLoading={false} id="autoType" onChange={e => handleChangeTipo(e)} type="select" title="Escolha o tipo de veiculo" options={tipos.nomes}/>
        
        <InputList isLoading={marcas.isLoading} id="marca" onChange={e => handleChangeMarcas(e)} type="select" title="Escolha a marca" options={marcas.nomes} disable={marcas.isOff}/>
        
        <InputList isLoading={modelos.isLoading} id="modelo" onChange={e => handleChangeModelo(e)}  type="select" title="Escolha o modelo" options={modelos.nomes} disable={modelos.isOff}/>
        
        <InputList isLoading={anos.isLoading} id="ano" onChange={e => handleChangeAno(e)} type="select" title="Escolha o ano" options={anos.nomes} disable={anos.isOff}/>
        
        <div>
        <button onClick={e=> handleSubmit(e)} type="submit" >SEND<RiSendPlaneFill/></button>
        </div>
      
      </Forms>
      
      <Answers>
        {resultados.isFilled &&
          <div>
          <p><b>Marca:</b> {resultados.marca}</p>
          <p><b>Modelo:</b> {resultados.modelo}</p>
          <p><b>Valor:</b> {resultados.valor}</p>
          <p><b>Ano:</b> {resultados.ano}</p>
          <p><b>Combustivel:</b> {resultados.combustivel}</p>
          </div>
        }
        {!resultados.isFilled &&
          <div>
          <h3>sem resultados ainda</h3>
          </div>
        }
        
      </Answers>
    
    </main>
    </>
    )
  }