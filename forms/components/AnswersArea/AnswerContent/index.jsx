import React from 'react';
export default class AnswersContent extends React.Component{
    constructor(props) {
        super(props);

        this._container = React.createRef();
    }

    handleClick(e){
        const modalContent = document.querySelector(".ModalAnswer__content")
        modalContent.innerHTML = this._container.current.innerHTML;
        modalContent.parentNode.style.display = 'flex';
        console.log(this._container.current.innerHTML);
    }
    
    render(){
        return(
                <div className={`${this.props.className}__answer`} ref={this._container} onClick={e=>this.handleClick(e)}>
                    <p>Name: {this.props.name}</p>
                    <p>Age: {this.props.age}</p>
                    <p>Gender: {this.props.gender}</p>
                    <p>Marital Status: {this.props.maritalStatus}</p>
                    <p>Document type: {this.props.documentType}</p>
                    <p>Document number: {this.props.documentNumber}</p>
                </div>
            
            
            )
        }
        
    }
        