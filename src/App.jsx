import { useState } from "react";
import "./App.css";
import Contador from "./components/Contador";
import reactLogo from "./assets/react.svg";

function App() {
  const [counter, setCounter] = useState(0);
  const [isShow, setIsShow] = useState(false);

  const handlePlus = () => {
    setCounter((currentValue) => currentValue + 1);
  };

  const handleMinus = () => {
    if (counter - 1 >= 0) {
      setCounter(counter - 1);
    }
  };

  const handleReset = () => {
    setCounter(0);
  };

  const handleShowHide = () => {
    if (isShow === false) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handlePlus}>+1</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleMinus}>-1</button>
      <hr />
      <button onClick={handleShowHide}>Show/Hide</button>
      {isShow ? (
        <img src="/foto perfil.jpg" alt="" />
      ) : (
        <h2>Hay una imagen oculta</h2>
      )}
      <img src={reactLogo} alt="" />
    </div>
  );
}

export default App;
