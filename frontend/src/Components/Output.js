import React,{useState,useEffect} from 'react';

function Output() {
  const resrun = "";
  return (
    <div className="Output" id="result">
      <div id="title-result" class="head-section">
          Output result
      </div>
      <textarea id="text-result" rows="18" cols="70" readonly disabled>{ resrun }</textarea>
    </div>
  );
}

export default Output;