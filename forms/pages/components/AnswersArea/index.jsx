import React from "react";
import AnswersContent from "./AnswerContent";

export default class AnswersArea extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={this.props.className}>
               {this.props.results.map((result, index) =>(
                    <AnswersContent {...result} key={index + result.name} />
               ))}
                
            </div>
                       
        )
    }
}