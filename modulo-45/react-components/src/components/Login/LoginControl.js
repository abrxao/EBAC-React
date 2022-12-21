import React from "react";
import Greeting from "./index";
import eye from "./eye-icon.png"
import "./login.css"

export default class LoginControl extends React.Component{
    
    constructor(props) {
        super(props);
        
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        
        this.state = {
            isLoggedIn: false,
            name: '',
            password: ''
        }
    }

    handleLogin(){
        const loginInputs = document.querySelector('.loginInputs');

        if(loginInputs!=undefined){
            
            if(this.state.password == '123' && this.state.name == 'teste'){
                loginInputs.style.animation = 'fade reverse .9s';
                setTimeout(()=>{
                    this.setState({isLoggedIn: true});
                    loginInputs.style.animation = '';
                }, 850)
                
            }else{
                loginInputs.style.animation = '';
                alert('Login ou/e senha errados');
            }
        }
        
        
    }

    handleLogout(){
        this.handleName("");
        this.handleLogin("");
        this.setState({isLoggedIn: false});
    }
    
    handleName(name){
        this.setState({name: name});
    }
    
    handlePassword(password){
        this.setState({password: password});
    }

    toogleInputType(e){
        var inputField = e.parentNode.parentNode;        
        var inputPassword = inputField.querySelector('input');
        inputPassword.type = inputPassword.type == 'password' ? 'text': 'password';        
    }
    
    render(){
        const isLoggedIn = this.state.isLoggedIn;
        
        let button;

        if(isLoggedIn){
            
            button = <div className="logged">
                <Greeting name={this.state.name} isLoggedIn={isLoggedIn}/>
                <button onClick={this.handleLogout} className="logBtn">Logout</button>
                  
            </div>
            
                      
        }else{
            button = <div className="loginInputs">
                <div className="spoiler">Nome: teste -- Senha: 123</div>
                <Greeting name={this.state.name} isLoggedIn={isLoggedIn}/>
            
            <div className="inputField">
            <input type="text" required onChange={e => this.handleName(e.target.value)}/>
            <label>Nome</label>
            </div>
            
            <div className="inputField">
            <input type="password" required onChange={e => this.handlePassword(e.target.value)} />
            <label>Senha </label>
            
            <button className="eyeBtn" onClick={e => this.toogleInputType(e.target)}><img src={eye}/></button>
            
            </div>  
            
            <button onClick={this.handleLogin} className="logBtn">Login</button>
            </div>
            
        }
        return(
            <div>
            {button}
            </div>
            )
        }
        
    }