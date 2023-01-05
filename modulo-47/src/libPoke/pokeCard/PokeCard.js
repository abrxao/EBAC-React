import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import presentationBg from './presentationBg.webp';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import './pokeCard.css';

function PokeCard(props) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A202700' : '#fff00',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    boxShadow: '4px 4px 2px #e7e7e7',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  return(
    <Card sx={{ width: "100%",
      position: 'relative',
      borderRadius: 3,
      padding: (window.innerWidth <= 400 ? "8px": "16px" ),
      backgroundColor: '#fff0',
      boxShadow: '4px 4px 4px #d7d7d7, -3px -3px 5px #fff'
      
    }}>
      <div className="pokemonImg">
        <img src={props.img} style={{
          zoom: ` ${(props.height/146)*.5 + 1.34}`
        }} />
      </div>

      <CardMedia
      sx={{ height: 200,
        backgroundSize: `${((1 - (props.height/146))*90)+122}%`,
        transition: '.6s',
        borderRadius: '8px',
      }}
      image={presentationBg}
      title={props.title}
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div"
      sx={{
        padding: 1,
        borderRadius: 2,
        marginBottom:2,
        boxShadow: '4px 4px 2px #e7e7e7',
        width:'auto',
        fontWeight: 'bold',
        letterSpacing: 1,
        textShadow: '1px 1px 3px #a6a6a6',
        textAlign: 'center',
        background: '#fff'
      }}
      >
      {props.title}
      </Typography>

      <Grid container spacing={2}>
        <Grid xs={"auto"}>
          <Item>Tipo: {props.type}</Item>
        </Grid>
        <Grid xs={"auto"}>
          <Item>Altura: {(props.height* 0.304).toFixed(2)}m</Item>
        </Grid>
        <Grid xs={"auto"}>
          <Item>Peso: {(props.weight* 0.304).toFixed(2)}kg</Item>
        </Grid>
        <Grid xs={"auto"}>
          <Item>Região: {props.location}</Item>
        </Grid>

      </Grid>

      </CardContent>
    </Card>
    )
  }
  
  export default PokeCard;