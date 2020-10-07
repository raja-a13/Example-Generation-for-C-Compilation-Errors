import React,{useState,useEffect} from 'react';

function Example({examples}) {
  const [ex,setEx] = useState(examples);

  useEffect(() => {
    console.log("change");
    setEx(examples)
  },[examples])
  return (
    <div className="Example">
      <div>{ex}</div>
    </div>
  );
}

export default Example;