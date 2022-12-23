import React, {useState, useEffect} from 'react';
import {Box, Container, ThemeProvider} from '@mui/system';
import {theme, themeDark} from './theme.js';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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
        boxShadow: 1,
        borderRadius: 3,
        padding: 2,
        boxShadow: '3px 3px 8px #aaa'
       
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

      <Button variant="outlined"
        sx={{
          height: 56,
          fontSize: 15,
          fontWeight: 'bold'
        }}
        onClick={handleAdd}      
      >Adicionar</Button>
    </Box>
    
    <ThemeProvider theme={theme}>
    
    <Box sx={{
      bgcolor: 'background.paper',
      boxShadow: 1,
      borderRadius: 3,
      p:2,
      minWidth: 250,
      boxShadow: '3px 3px 8px #aaa'
    }}>
    
    <Box
    sx={{
      color: 'text.secondary'
    }}
    >Visualizações</Box>
    <Box
    sx={{
      color: 'text.secondary',
      fontWeight: 'bold',
      fontSize: 32
    }}
    >30k</Box>
    <Box
    sx={{
      color: 'success.dark',
      display: 'inline',
      fontWeight: 'bold',
      mx: 0.5,
      fontSize: 14,
    }}>+15%</Box>
    <Box sx={{
      color: 'text.secondary', display:'inline', fontSize: 14 
    }}>vs. Last Week</Box>
    </Box> 
    </ThemeProvider>
    
    <ThemeProvider theme={themeDark}>
    <Box sx={{
      bgcolor: 'background.paper',
      boxShadow: 1,
      borderRadius: 3,
      p:2,
      minWidth: 250,
      boxShadow: '3px 3px 6px #aaa'
    }}>            
    <Box
    sx={{
      color: 'text.secondary'
    }}
    >Visualizações</Box>
    <Box
    sx={{
      color: 'text.secondary',
      fontWeight: 'bold',
      fontSize: 32
    }}
    >30k</Box>
    <Box
    sx={{
      color: 'success.dark',
      display: 'inline',
      fontWeight: 'bold',
      mx: 0.5,
      fontSize: 14,
    }}>+15%</Box>
    <Box sx={{
      color: 'text.secondary', display:'inline', fontSize: 14 
    }}>vs. Last Week</Box>
    </Box> 
    </ThemeProvider>
    
    </Container>
    </React.Fragment>
    
    );
  }
  
  export default App;
  