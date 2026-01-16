import React from 'react';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p> counter: {count}</p>
      <button onclick={() => setCount(count + 1)}>+</button>
      <button onclick={() => setCount(count - 1)}>-</button>
      <button onclick={() => setCount(0)}>reset</button>
    </div>
  );
}

export default Counter;
