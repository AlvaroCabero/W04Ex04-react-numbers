import { useState } from "react";
import "./App.css";
import Button from "./Button";
import Number from "./Number";

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const increment = () => {
    if (numbers[0] < 16) {
      setNumbers(numbers.map((number) => number + 1));
    }
  };

  const decrement = () => {
    if (numbers[0] > 0) {
      setNumbers(numbers.map((number) => number - 1));
    }
  };
  const showNumber = (event) => {
    setNumbers(event.target.innerText);
  };

  return (
    <>
      <div className="list">
        <Button text="<<" actionOnClick={decrement} />
        <Number text={numbers[0]} actionOnClick={showNumber} />
        <Number text={numbers[1]} actionOnClick={showNumber} />
        <Number text={numbers[2]} actionOnClick={showNumber} />
        <Number text={numbers[3]} actionOnClick={showNumber} />
        <Number text={numbers[4]} actionOnClick={showNumber} />
        <Button text=">>" actionOnClick={increment} />
      </div>
      <div></div>
      <div></div>
    </>
  );
}

export default App;
