import React, { useState, useEffect } from 'react';

function Output({ outputs }) {
  const [out, setOut] = useState(outputs);

  useEffect(() => {
    console.log('change');
    setOut(outputs);
  }, [outputs]);
  return (
    <div className='Output' id='result'>
      <div id='title-result' class='head-section'>
        Compiler Output
      </div>
      <textarea
        id='text-result'
        rows='18'
        cols='70'
        value={out}
        readOnly
        disabled
      ></textarea>
    </div>
  );
}

export default Output;
