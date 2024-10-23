import React, { useState } from "react";

const Contador = () => {
  const initialValue = 3;
  const stepValue = 2;
  const [contador, setContador] = useState(initialValue);

  const handlePlus = () => {
    setContador((currentValue) => currentValue + stepValue);
  };

  const handleReset = () => {
    setContador(initialValue);
  };

  const handleMinus = () => {
    if (contador - stepValue >= 0) {
      setContador((currentValue) => currentValue - stepValue);
    }
  };

  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={handlePlus}>+{stepValue}</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleMinus}>-{stepValue}</button>
    </div>
  );
};

export default Contador;
