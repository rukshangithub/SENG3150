import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import ButtonCounter from './ButtonCounter';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <HelloWorld message='World'></HelloWorld>
        <HelloWorld message='Class'></HelloWorld>
        <HelloWorld message='Students'></HelloWorld>
        <ButtonCounter></ButtonCounter>
      </header>
    </div>
  );
}

export default App;
