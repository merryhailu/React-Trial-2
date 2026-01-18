import React, { useEffect } from 'react';
import { useState } from 'react';

function Counter() {
 
  const [detail, setDetail] = useState({count: 0, name: ""})


  function Increment(){ 
    setDetail((prev) => ({...prev, count: prev.count + 1}))
   
  }

  useEffect( ()=>{
    document.title = `you clicked ${detail.count} times`
  }, [])

  console.log(detail)
  return (
    <div>
      <input type="text" onChange={(e) => e.target.value} />
      <p>{detail.name} you clicked {detail.count}</p>
      <button onClick={Increment}>click me</button>
    </div>
  );
}

export default Counter;
