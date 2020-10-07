import React from 'react';

function Compile() {
  const rescomp = "";
  return (
    <div className="compile" id="compile">
      {/* <div>Output</div> */}
        <div id="title-compile" class="head-section">
            Compilation / Output
        </div>
        <textarea id="text-compile" rows="7" cols="140" readonly>{ rescomp }</textarea>

    </div>
  );
}

export default Compile;