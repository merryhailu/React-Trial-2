import React, { useEffect } from 'react';
import useCounterStore from '../stores/useCounterStore';
import useBear from '../stores/useBear';
import useStore from '../stores/useStore';

function Home() {
  // useCounterStore
  const count = useCounterStore((state) => state.count);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);
  const resetCount = useCounterStore((state) => state.resetCount);

  // useBear
  const bears = useBear((state) => state.bears);
  const increasePop = useBear((state) => state.increasePop);
  const removePop = useBear((state) => state.removePop);

  // useStore (data + fetch)

  const data = useStore((state) => state.data);
  const fetch = useStore((state) => state.fetch);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to Our Company</h1>

      <p>We are dedicated to delivering excellence in all our services.</p>

      <p>count: {count}</p>
      <button onClick={incrementAsync}>increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={resetCount}>Reset</button>

      <p>bears: {bears}</p>
      <button onClick={increasePop}>increase pop</button>
      <button onClick={removePop}>remove pop</button>

      <h3>useStore data</h3>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
