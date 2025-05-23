import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const appendValue = (value) => {
    setDisplay((prev) => prev + value);
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  const deleteLast = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString()); // Use eval cautiously
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display || '0'}</div>
      <div className="buttons">
        <button onClick={clearDisplay}>C</button>
        <button onClick={deleteLast}>DEL</button>
        <button onClick={() => appendValue('/')}>÷</button>
        <button onClick={() => appendValue('*')}>×</button>
        <button onClick={() => appendValue('7')}>7</button>
        <button onClick={() => appendValue('8')}>8</button>
        <button onClick={() => appendValue('9')}>9</button>
        <button onClick={() => appendValue('-')}>−</button>
        <button onClick={() => appendValue('4')}>4</button>
        <button onClick={() => appendValue('5')}>5</button>
        <button onClick={() => appendValue('6')}>6</button>
        <button onClick={() => appendValue('+')}>+</button>
        <button onClick={() => appendValue('1')}>1</button>
        <button onClick={() => appendValue('2')}>2</button>
        <button onClick={() => appendValue('3')}>3</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => appendValue('0')}>0</button>
        <button onClick={() => appendValue('.')}>.</button>
      </div>
    </div>
  );
};

export default Calculator;
