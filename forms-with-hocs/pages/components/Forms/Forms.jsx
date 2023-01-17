import React from "react";

export default class Forms extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="formContainer">
                <form className="formContainer__content">
                    {this.props.children}
                </form>
            </div>
        )
    }
}