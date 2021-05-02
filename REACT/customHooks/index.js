import React, { useState, useEffect } from 'react';

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount((prevCount) => prevCount + 1);
  useDocumentTitle(`You clicked ${count} times`);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={incrementCount}>Click me</button>
    </div>
  )
}

export default Counter;