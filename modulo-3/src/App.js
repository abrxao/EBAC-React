import React from 'react';
import './App.css';
import CalcKeyboard from './components/CalcKeyboard';
import Display from './components/Display';

function App() {
  
  return (
    <div className="App">
      <Display/>
      <CalcKeyboard/>
    </div>
  );
}

export default App;
