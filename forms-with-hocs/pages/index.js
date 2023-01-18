import React from 'react';
import TextInputWithValidation from './components/TextInput/TextInput';
import Forms from './components/Forms/Forms';
import Header from './components/Header/Header';
export default class Home extends React.Component {

  constructor(){
    super();
    this.state = {
      num:0
    }
  }

  render() {
    return (
      <>
          <Forms>
            <Header title="FORMS" subtitle="with hoc's"/>
            <TextInputWithValidation name="user" required={true}/>
            <TextInputWithValidation name="email" required={true}/>
            <TextInputWithValidation name="password" required={true}/>
          </Forms>
        
      </>
        )
      }
    }
    