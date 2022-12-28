import React, {useState, useEffect} from 'react';
import {Box, Container, ThemeProvider} from '@mui/system';
import './App.css';
import {theme, themeDark} from './theme.js';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import teste from './libPoke/pokeList'


function App() {

  const handleAdd = () => {
    console.log(pokemon);
  }

  const [pokeList, setPokeList] = useState();  
  useEffect(() => {
    teste().then( res => {setPokeList(res.results)});
  },[]);
  const [pokemon, setPokemon] = useState();

  const handleChange = (e, value) => {
    setPokemon(value);
  }

  return (
    
    <React.Fragment>
    <Container 
    sx={{
      display: 'flex',
      gap: '20px',
      padding: '20px' 
    }}
    maxWidth="sm">
    
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        bgcolor: 'background.paper',
        boxShadow: '3px 3px 5px #e7e7e7, -3px -3px 5px #fff',
        borderRadius: 3,
        padding: 2.5
       
      }}>
      <Autocomplete
        disablePortal
        id="searchPokemon"
        options={pokeList}
        getOptionLabel={(option) => option.name}
        sx={{ width: 250}}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} label="Escolha um pokemon" />}
      />

      <Button variant="contained"
        sx={{
          height: 56,
          fontSize: 15,
          fontWeight: 'bold'
        }}
        onClick={handleAdd}      
      >Adicionar<AddRoundedIcon sx={{marginLeft: 1}}/></Button>
    </Box>
    
    
    </Container>
    </React.Fragment>
    
    );
  }
  
  export default App;
  