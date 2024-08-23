import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Interface } from 'readline';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Digite números inteiros!</h1>
        <div>
          <input type="number" id='num1'/>
          <input type="number" id='num2'/>
          <input type="number" id='num3'/>
          <input type="number" id='num4'/>
          <input type="number" id='num5'/>
          <input type="number" id='num6'/>
          <input type="number" id='num7'/>
          <input type="number" id='num8'/>
        </div>
        <button>Enviar</button>
      </header>
    </div>
  );
}

export default App;
