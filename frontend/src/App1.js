import React,{useState,useEffect,createContext} from 'react';
import './App.css';

import {getExamples} from "./Components/apiFunctions"

import Code from "./Components/Code"
import Output from "./Components/Output"
import Example from "./Components/Example"
import Compile from "./Components/Compile"



function App() {
  const FetchData = createContext(null);
  
  
  const [examples,setExamples] = useState("examples");
  const [outputs,setOutputs] = useState("outputs");
  const [error,setErrors] = useState("errors");

  // const updateErrors = (errors) => {setErrors(errors)}
  // const updateExamples = (examples) => {setExamples(examples)}
  // const updateOutputs = (out) => {setOutputs(out)}

  // const api = {updateErrors,updateExamples,updateOutputs}

  const clickRun = () => {
      console.log("run")
      getExamples()
        .then(res =>{
            if (res.status){
                console.log("clang",res.clang)
                console.log("examples",res.exapmles)
            }          
            else{
                console.log(res.error)
            }
        })
        .catch(err =>{
            console.log('error:-' + err)
        })

      setErrors("1");
      setExamples("2");
      setOutputs("3");
      console.log(outputs);
  }

  return (
    <div className="App" id="content">
        <Code clickRun={clickRun}/>
        <Output outputs={outputs}/>
        {/* <Example examples={examples}/> */}
        <Compile error={error}/>
    </div>
  );
}

export default App;
