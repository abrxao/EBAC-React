import React from "react";
import RadioInput from "../RadioInput";
import AnswersContent from "./AnswerContent";

export default class AnswersArea extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isFromStart: true,
        }
    }

    handleChange(e){
        const isFrom = e.target.value;
        isFrom==="End"?this.setState({isFromStart:false}) : this.setState({isFromStart:true});
    }

    handleAnswer(){
        if(this.state.isFromStart){
            return(
                this.props.results.map((result, index) =>(
                 <AnswersContent className={"answersArea"} {...result} key={index + result.name} />
                ))
            );  
            
        }else{
            return(
                this.props.results.reverse().map((result, index) =>(
                <AnswersContent className={"answersArea"} {...result} key={index + result.name} />
                ))
            );
        }
    }

    render(){
        return (
            
            <div className={this.props.className}>
                <div className={this.props.className+"__header"}>
                    <div className={this.props.className+"__header__title"}>
                        <h2>
                            ANSWERS
                        </h2>
                    </div>
                    <RadioInput className={this.props.className+"__header__radioBtn"} options={["Start","End"]} name="Organize by" onChange={e=>this.handleChange(e)}/>
                </div>
               {this.handleAnswer()}
                
            </div>
                       
        )
    }
}