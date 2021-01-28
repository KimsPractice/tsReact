import React, { useState } from "react";

interface IState {
  counter: number;
}

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>Plus</button>
    </div>
  );
};

export default App;
