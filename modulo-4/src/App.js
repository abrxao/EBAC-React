import React, { useState } from 'react';
import './App.css';
import HelloWorldFn from './components/HelloWorldFn';
import HelloWorldClass from './components/HelloWorldClass';
import ButtonHello from './components/ButtonHello';
import CharByChar from './components/CharByChar';
import HoverHello from './components/HoverHello';
import HelloClick from './components/HelloClick';
import CustomHello from './components/CustomHello';

function App() {
  const [hwByTime, sethwByTime] = useState("wait two seconds");

  setTimeout(() => {
    sethwByTime("hello world");
  },2000)

  return (
    <div className="App">
      <p>Hello World!</p>
      <HelloWorldFn name="by Function"/>
      <HelloWorldClass name="by Class"/>
      <h4>{hwByTime}</h4>
      <ButtonHello/>
      <div className="slideHello">
        <div className="H3">
          <h3>Hello World Sliding</h3>
        </div>
      </div>
      <CharByChar txt="hello world"/>
      <HoverHello/>
      <HelloClick/>
      <CustomHello/>
    </div>
  );
}

export default App;
