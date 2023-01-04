import React from "react";

class HelloWorldClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'class',
            date:''
        }
    }

    render() {
        return <div><h4>Hello World {this.props.name} {this.props.date}</h4></div>
    }
}

export default HelloWorldClass;