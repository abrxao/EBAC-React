import React from 'react';
import TextInputWithValidation from './components/TextInput/TextInput';
import Forms from './components/Forms/Forms';
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
            <TextInputWithValidation name="password" required={true}/>
          </Forms>
        
      </>
        )
      }
    }
    