import React from 'react';
import './App.css';



import Code from "./Components/Code"
import Output from "./Components/Output"
import Example from "./Components/Example"
import Compile from "./Components/Compile"



function App() {

  return (
    <div className="App" id="content">
      <Code />
      <Output />
      <Example />
      <Compile />
    </div>
  );
}

export default App;
