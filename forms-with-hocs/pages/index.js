import React from 'react';
import TextInputWithValidation from './components/TextInput/TextInput';
import Forms from './components/Forms/Forms';
import Header from './components/Header/Header';
import {SiStarlingbank} from 'react-icons/si'
export default class Home extends React.Component {

  constructor(){
    super();{
    }
  }

  render() {
    return (
      <main>
          <Forms>
            <Header title="FORMS" subtitle="with hoc's"/>
            <TextInputWithValidation name="user"/>
            <TextInputWithValidation name="email"/>
            <TextInputWithValidation name="password"/>
          </Forms>

          <Forms>
            <Header title="REGISTER" subtitle={<><SiStarlingbank/> ShopX</>}/>
            <TextInputWithValidation name="name"/>
            <TextInputWithValidation name="phone"/>
            <TextInputWithValidation name="CPF"/>
          </Forms>
        
      </main>
        )
      }
    }
    