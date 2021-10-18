import { useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const [numbers, setNumbers] = useState([1, 3, 4, 5]);

  const increment = () => {
    if ((numbers[0] = 0)) {
      setNumbers(numbers.map((number) => number + 1));
    }
  };

  const decrement = () => {
    if ((numbers = 20)) {
      setNumbers(numbers.map((number) => number - 1));
    }
  };

  return (
    <>
      <div className="lista">
        <Button text="<<" actionOnClick={decrement} />
        <Number text={numbers[0]} />
        <Number text={numbers[1]} />
        <Number text={numbers[2]} />
        <Number text={numbers[3]} />
        <Number text={numbers[4]} />
        <Button text=">>" actionOnClick={increment} />
      </div>
    </>
  );
}

export default App;
