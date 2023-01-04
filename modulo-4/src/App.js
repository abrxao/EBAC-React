import React, { useState } from 'react';
import './App.css';
import HelloWorldFn from './components/HelloWorldFn';
import HelloWorldClass from './components/HelloWorldClass';
import ButtonHello from './components/ButtonHello';
import CharByChar from './components/CharByChar';
import HoverHello from './components/HoverHello';
import HelloClick from './components/HelloClick';
import CustomHello from './components/CustomHello';

const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out','Nov', 'Dez'];

function App() {

  const date = new Date();
  const month =date.getMonth()
  const day = date.getDay()
  const year = date.getFullYear()

  const dateBr = `${day} de ${months[month]} de ${year}`;

  const [hwByTime, sethwByTime] = useState("wait two seconds");

  setTimeout(() => {
    sethwByTime(`hello world ${dateBr}`);
  },3000)

  return (
    <div className="App">
      <p>Hello World! {dateBr}</p>
      <HelloWorldFn name="by Function" date={dateBr}/>
      <HelloWorldClass name="by Class" date={dateBr}/>
      <h4>{hwByTime}</h4>
      <ButtonHello date={dateBr}/>
      <div className="slideHello">
        <div className="H3">
          <h3>Hello World Sliding {dateBr}</h3>
        </div>
      </div>
      <CharByChar txt="hello world" date={dateBr}/>
      <HoverHello date={dateBr}/>
      <HelloClick date={dateBr}/>
      <CustomHello date={dateBr}/>
    </div>
  );
}

export default App;
