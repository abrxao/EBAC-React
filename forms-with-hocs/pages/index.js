import React from 'react';
import Header from './components/Header/Header';
import { TextInput } from './components/TextInput/TextInput';

export default class Home extends React.Component {

  constructor(){
    super();
    this.state = {
      num:0
    }
    this._input = React.createRef();
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  render() {
    return (
      <>
        <label>Home</label>
        <input type="text" ref={this._input} onChange={e=>this.setState({num: e.target.value})}/>
        <Header value={this.state.num}/>
        <TextInput/>
      </>
        )
      }
    }
    