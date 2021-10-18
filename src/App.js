import { useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const [numbers, setNumbers] = useState([1, 3, 4, 5]);

  const increment = () => {
    if (numbers[0] <= 0) {
      setNumbers(numbers.map((number) => number + 1));
    }
  };

  const decrement = () => {
    if (numbers >= 20) {
      setNumbers(numbers.map((number) => number - 1));
    }
  };

  return (
    <>
      <div className="lista">
        <Button text="<<" actionOnClick={decrement} />
        <div className="numero">1</div>
        <div className="numero">2</div>
        <div className="numero">3</div>
        <div className="numero">4</div>
        <div className="numero">5</div>
        <Button text=">>" actionOnClick={increment} />
      </div>
    </>
  );
}

export default App;
