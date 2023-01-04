import React from "react";
import './Button.css'


const ButtonHello = (props) =>{

    function alertHello(){
        alert(`Hello World! ${props.date}`);
    }
    return(
        <div>
            <h3>Aperte o botão para dizer "hello world"</h3>
            <button style={{
                padding: 8,
                backgroundColor: '#2d2d2d',
                border: '1px solid #f2f2f2',
                outline: 'none',
                borderRadius: '6px',
                color: '#fff',
            }}
            onClick={alertHello}
            className="button-hello"
            >CLICK</button>
        </div>
    );
};

export default ButtonHello;