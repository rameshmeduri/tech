import React from "react";

const Dismiss = ({ render }) => {
  const dismiss = (id) => {
    console.log(id);
  };

  return render(dismiss);
};

const App = () => (
  <div className="App">
    <Dismiss
      render={(dismiss) => (
        <button onClick={() => dismiss(1)}>Dismiss</button>
      )}
    />
  </div>
);

export default App;
