import axios from 'axios';

const teste = async()=>{
    const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    return data;
}

export default teste;