import React,{useState,useEffect,Component} from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/c_cpp'
import 'brace/theme/github'

function Code() {
  const rows = 15;
  const cols = 60;

  const [code,setCode] = useState("");
  const [value,changeVal] = useState("");

  function onChange(newValue) {
      console.log("change", newValue);
      changeVal(newValue);
  }
  function onLoad(newValue) {
      console.log("load", newValue);
  }



  const options = {
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: false,
      enableSnippets: false,
      showLineNumbers: true,
      tabSize: 2,
  }
  return (
    <div className="Code" id="code">
      
      <div id="title-code" className="head-section">
        Source Code
      </div>
      <input id="launch-button" className="head-section" type="submit" value="Launch" />

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
        value={value}
        setOptions={options}
        />
    </div>
  );
}

export default Code;