import React, {useState, useEffect} from 'react';
import {Box, Container, ThemeProvider} from '@mui/system';
import './App.css';
import {theme, themeDark} from './theme.js';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import getPokeList from './libPoke/pokeList'
import PokeCard from './libPoke/pokeCard/PokeCard';
import PokeHeader from './libPoke/PokeHeader';
import IconDecoration from './libPoke/IconDecoration';

function App() {
  const [pokemon, setPokemon] = useState({name:'gengar', url: 'https://pokeapi.co/api/v2/pokemon/94'});
  const [pokemonName, setPokemonName] = useState();
  const [pokemonType, setPokemonType] = useState();
  const [pokemonImg, setPokemonImg] = useState();
  const [pokemonHeight, setPokemonHeight] = useState();
  const [pokemonWeight, setPokemonWeight] = useState();
  const [pokemonLocation, setPokemonLocation] = useState();
  
  function setTypes(data){
    let types="";
    data.types.forEach(elem => {
      types +=`${elem.type.name} `;
    });
    return types;
  }
  
    
  const getLocation = async () => {
    const {data} = await axios(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}/`);
    setPokemonLocation(data.pokedex_numbers[1].pokedex.name);
  }
  
  
  const handleAdd = async () => {
    const {data} = await axios(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
    console.log(data);
    setPokemonName(data.name[0].toUpperCase() + 
    data.name.slice(1));
    getLocation()
    setPokemonType(setTypes(data));
    setPokemonHeight(data.height);
    setPokemonImg(data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']);
    setPokemonWeight(data.weight);
  }
  
  const [pokeList, setPokeList] = useState();
  
  useEffect(() => {
    getPokeList().then( res => {setPokeList(res.results)});
    handleAdd();
  },[]);
  
  
  const handleChange = (e, value) => {
    setPokemon(value);
  }
  
  return (
    
    <React.Fragment>
    
    <PokeHeader/>
    <Container 
    sx={{
      display: 'block',
      gap: '20px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#f2f2f2aa',
      boxShadow: '4px 4px 5px #d7d7d7, -3px -3px 5px #fff',
      width:'auto',
      borderRadius: 4,
      backdropFilter: 'blur(6px)',
    }}
    maxWidth="sm">
    
    <Box 
    sx={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      gap: 1,
      boxShadow: '3px 3px 5px #d7d7d7, -3px -3px 5px #fff',
      borderRadius: 3,
      padding: (window.innerWidth <= 320 ? 1: 2),
      marginBottom: '20px',
      width: '100%', 
      maxWidth: "320px",
      zoom: (window.innerWidth <= 320 ? 0.7:1 )
      
    }}>
    <Autocomplete
    disablePortal
    id="searchPokemon"
    options={pokeList}
    getOptionLabel={(option) => option.name}
    sx={{
      width: '90%',
      minWidth: '200px', 
    }}
    onChange={handleChange}
    renderInput={(params) => <TextField {...params} label="Escolha um pokemon" />}
    />
    
    <Button variant="text"
    sx={{height: '56px'}}
    onClick={handleAdd}      
    > <SearchIcon sx={{ zoom: 1.2
    }}/></Button>
    </Box>
    <PokeCard title={pokemonName} img={pokemonImg} type={pokemonType} height={pokemonHeight} weight={pokemonWeight} location={pokemonLocation}/>
    </Container>
    <IconDecoration/>
    </React.Fragment>
    
    );
  }
  
  export default App;
  