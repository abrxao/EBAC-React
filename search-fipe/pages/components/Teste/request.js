import React from "react";
import axios from "axios";

export default class request extends React.Component {
    constructor(){
        super();
        this.state = {
            carros: {},
            moto:{},
            caminhoes:{}
        }
    }
    request = async () =>{
        const {data} = await axios.get("https://parallelum.com.br/fipe/api/v1/carros/marcas");
        this.setState({marks: data}); 
    }

    handleClick(){
        this.request()
    }

    render() {
        return(
            <div onClick={this.handleClick.bind(this)}>
                teste
            </div>
        )
    }
}