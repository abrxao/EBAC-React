import React from "react";

class HelloWorldClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'class'
        }
    }

    render() {
        return <div><h4>Hello World {this.props.name}</h4></div>
    }
}

export default HelloWorldClass;