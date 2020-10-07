import React,{useState,useEffect} from 'react';

function Compile({error}) {

  const [err,setErr] = useState(error);

  useEffect(() => {
    console.log("change");
    setErr(error)
  },[error])
  return (
    <div className="compile" id="compile">
        <div id="title-compile" class="head-section">
            Compilation / Output
        </div>
        <textarea id="text-compile" rows="7" cols="140" value={err} readonly disabled></textarea>

    </div>
  );
}

export default Compile;