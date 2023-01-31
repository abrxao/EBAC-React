import React from "react";
import {GoVerified} from "react-icons/go";
import {RiRefreshFill} from "react-icons/ri";
import SendButton from "../SendButton/SendButton";
export default class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSend:false,
            modalErro:false
        }
        this._form = React.createRef(); 
    }
    
    handleSubmit(e) {
        e.preventDefault();

        var answer = {};

        if(localStorage.sendClicks){
            localStorage.sendClicks++;
        }else{
            localStorage.setItem('sendClicks',1);
        }

        const inputs = this._form.current.querySelectorAll("input");

        inputs.forEach(input => {
            if(input.classList.contains("invalid") || input.value=="" ){
                input.classList.add("invalid");
            }else{
                const name = input.getAttribute("id");
                answer[name] = input.value;
                input.value=""
            }
        })

        if(Object.keys(answer).length!=inputs.length){
            this.setState({modalErro: true});
            setTimeout(() => {
                this.setState({modalErro: false});
            }, 3500);
        }else{
            if(localStorage.answers){
                var array = JSON.parse(localStorage.answers);
                var aux = array.map(elem=>{
                    return elem
                });
                aux.push(answer);

                localStorage.setItem("answers",JSON.stringify(aux));
            }else{
                localStorage.setItem("answers",JSON.stringify([answer]));
            }
            
            this.setState({isSend: true});
        }
    }

    handleReSend(e){
        e.preventDefault();
        this.setState({isSend:false});
    }

    render(){
        return(
            <div className="formContainer">
                <form ref={this._form} className="formContainer__content">
                    {!this.state.isSend && this.props.children}
                    {!this.state.isSend && <SendButton onClick={e=>this.handleSubmit(e)}/>}
                    {this.state.isSend &&
                        <div className="formContainer__content__sendArea">
                            <h2><GoVerified/> SENDED</h2>
                            <button onClick={e=>this.handleReSend(e)}>SEND AGAIN <RiRefreshFill/></button>
                            
                        </div>
                    }
                    {this.state.modalErro && 
                        <div className="formContainer__content__erro">
                            <div className="formContainer__content__erro__Modal">
                                <h4>CHECK THE FIELDS IN RED</h4>
                            </div>
                            
                        </div>    
                    }
                    
                    
                </form>
            </div>
        )
    }
}