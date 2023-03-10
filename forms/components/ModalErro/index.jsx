import React, {useState} from "react";

const ModalErro= (props)=>{

    return(
        <div className={`modalErro ${props.visible}`}>
            <h3>
                VERIFIQUE OS CAMPOS EM VERMELHO
            </h3>
        </div>
    )
}

export default ModalErro;