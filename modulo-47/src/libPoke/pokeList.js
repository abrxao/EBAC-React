import axios from 'axios';

const getPokeList = async()=>{
    const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=649&offset=0')
    return data;
}

export default getPokeList;