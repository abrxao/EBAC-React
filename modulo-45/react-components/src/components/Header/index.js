import React, {useState} from 'react';
import logo from './../../logo.svg';

function Header(props){

    const [count, setCount] = useState(1);

    function increaseCount(){
        setCount(count + 1);
        console.log(count);
    }
    
    return(
        <header>
            <h1>{props.title}</h1>
            <img src={logo}/>
            <p>Bem vindo pela {count} vez</p>
            <button onClick={increaseCount}>Incrementar</button>
        </header>
        )
    }

export default Header;