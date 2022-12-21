import React from "react";
import Greeting from "./index";

export default class LoginControl extends React.Component{

    constructor(props) {
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleName = this.handleName.bind(this);
        this.state = {
            isLoggedIn: false,
            name: ''
        }
    }
    handleLogin(){
        this.setState({isLoggedIn: true});
    }
    handleLogout(){
        this.setState({isLoggedIn: false});
    }

    handleName(name){
        this.setState({name: name});
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;

        let button;

        if(isLoggedIn){
            button = <button onClick={this.handleLogout}>Logout</button>;
        }else{
            button = <div>
                    <input placeholder="digite seu nome" onChange={e => this.handleName(e.target.value)}/>;
                    <button onClick={this.handleLogin}>Login</button>;
                </div>
                
        }
    return(
        <div>
            <Greeting name={this.state.name} isLoggedIn={isLoggedIn}/>
            
            {button}
        </div>
    )
    }
    
}