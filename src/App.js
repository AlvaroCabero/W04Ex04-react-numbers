import { useState } from "react";
import "./App.css";
import Button from "./Button";
import Miniscreen from "./Miniscreen";
import Number from "./Number";

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [number, setNumber] = useState("-");

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
    setNumber(event.target.innerText);
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
      <div>
        <Miniscreen number={number} />
      </div>
    </>
  );
}

export default App;
