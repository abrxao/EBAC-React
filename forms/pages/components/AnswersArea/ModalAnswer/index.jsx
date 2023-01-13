import React from "react";

export default class ModalAnswer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: true
        }
        this._container = React.createRef();
    }

    handleClick(e){
        if(e.target===this._container.current ){
            this._container.current.style.display="none";
        }
    }

    render() {
        return (
            <div className="ModalAnswer" onClick={e=>this.handleClick(e)} ref={this._container}>
                <div 
                className="ModalAnswer__content"
                >
                </div>
            </div>
        )
    }
}