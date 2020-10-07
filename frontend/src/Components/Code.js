import React,{useState,useEffect} from 'react';
import AceEditor from 'react-ace';

import {sendCode} from "./apiFunctions"

import 'brace/mode/c_cpp'
import 'brace/theme/github'

function Code() {
  const rows = 20;
  const cols = 60;

  const [code,setCode] = useState("");
  const [value,changeVal] = useState("");

  function onChange(newValue) {
      // console.log("change", newValue);
      setCode(newValue);
  }
  function onLoad(newValue) {
      console.log("load", newValue);
  }

  function saveCode(){
    if(code !== ""){
      console.log(code)
      sendCode({"code":code})
        .then(res =>{
            if (res.status){
                console.log(res.data)
            }          
            else{
                console.log(res.error)
            }
        })
        .catch(err =>{
            console.log('error:-' + err)
        })
    }
  }


  function runCode(){
    if(code !== ""){
      console.log(code)
      sendCode({"code":code})
        .then(res =>{
            if (res.status){
                console.log(res.data)
            }          
            else{
                console.log(res.error)
            }
        })
        .catch(err =>{
            console.log('error:-' + err)
        })
    }
  }



  const options = {
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: false,
      enableSnippets: false,
      showLineNumbers: true,
      tabSize: 2,
      minLines : rows,
      maxLines : rows
  }
  return (
    <div className="Code" id="code">
      
      <div id="title-code" className="head-section">
        Source Code
      </div>
      {/* <input id="launch-button" className="head-section" type="submit" value="Run" onSubmit={submitCode}/> */}
      <div id="launch-button">
      <button  className="head-section top-run"  onClick={runCode}  >Run </button><br />
      <button  className="head-section bottom-save"  onClick={saveCode} >Save </button>
      </div>
      <AceEditor
        placeholder="enter your code"
        mode="c_cpp"
        theme="github"
        name="code_edit"
        onLoad={onLoad}
        onChange={onChange}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={code}
        setOptions={options}
        />
    </div>
  );
}

export default Code;