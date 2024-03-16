import React, {useState} from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    const increment = ()=> {
        setCount(count + 1 );
    };

    const decrement = ()=> {
        if (count > 0) {
            setCount(count - 1);
        }else {
            return;
        }
    };
    
    const reset = ()=> {
        setCount(0);
    };

  return (
    <>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default Counter;