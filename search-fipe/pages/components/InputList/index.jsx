import React from "react";

export default function InputList(props){
    
        return(
        <div onChange={props.onChange} id={props.id} className={"inputList"+(props.disable ? " disable":"")}>
            <label htmlFor="autoType">{props.title}
                {props.isLoading && <div className="loading"><span></span></div>}
                <select name={props.id} style={{display:(props.isLoading?"none":"block")}}>
                {props.options.map((tipo, index)=>{
                    return(
                        <option key={index}>{tipo[0].toUpperCase() + tipo.substring(1)}</option>
                    )
                })}
                </select>
            </label>
        </div>
        
        )
    
}