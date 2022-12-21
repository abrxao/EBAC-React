import React, {ReactDOM} from 'react';

export default class from extends React.Component {
    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = {
            counter:0
        }
    }
    render(){
        console.log('render');
        return <div>
                    <form>
                        <input value={this.state.counter}/>
                    </form>
                </div>
    }
}

