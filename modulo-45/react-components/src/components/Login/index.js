import React from "react";

function UserGreeting(props){
    return <h3>Olá, {props.name}. Bem-vindo de volta </h3>;
}

function GuestGreeting(props){
    return <h3>Por favor, faça o login para continuar</h3>;
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    return isLoggedIn ? <UserGreeting name={props.name} /> : <GuestGreeting/>
}

export default Greeting;