import React, { useRef, forwardRef } from "react";

const Input = forwardRef((props, ref) => (<input ref={ref} {...props} />));

const App = () => {
  const ref = useRef();
  const onFocus = () => {
    ref.current.focus();
  };
  return (
    <div className="App">
      <Input ref={ref} />
      <button onClick={onFocus}>Focus</button>
    </div>
  );
}

export default App;