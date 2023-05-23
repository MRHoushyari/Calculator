import { useState } from "react";
import "./CSS/Main.css";
import Button from "./Components/button";
function App() {
  const [formulla, setFormulla] = useState("");
  const [resault, setResault] = useState("");
  const [lastInput, setLastInput] = useState("");
  let digitsButton = [];
  let operationsButton = [];
  const clear = function (c) {
    if (c === "AC") {
      setFormulla("");
      setLastInput("");
      setResault("");
    }
  };
  const operators = function (o) {
    if (lastInput === "operator") {
      var newFormulla = formulla;
      newFormulla = newFormulla.substring(0, newFormulla.length - 1);
      setFormulla(newFormulla + o);
      setLastInput("operator");
    } else if (lastInput === "digits") {
      const newFormulla = formulla + o;
      setFormulla(newFormulla);
      setLastInput("operator");
    }
  };
  const digits = function (d) {
    if (d === "0") {
      if (lastInput === "digits") {
        const newFormulla = formulla + d;
        setFormulla(newFormulla);
      }
    } else {
      const newFormulla = formulla + d;
      setFormulla(newFormulla);
      setLastInput("digits");
    }
  };
  const point = function (p) {
    const newFormulla = formulla + p;
    setFormulla(newFormulla);
  };
  const not = function (n) {
    // const newFormulla = formulla + n;
    // setFormulla(newFormulla);
  };
  const backspace = function (back) {
    const newFormulla = formulla + back;
    setFormulla(newFormulla);
  };
  const equal = function () {
    // const newResault = resault + back;
    setFormulla("");
    setResault(eval(formulla));
    setLastInput("");
    // console.log(eval(formulla));
  };
  //                                                                          handle click
  const handleClick = (b) => {
    switch (b.target.innerText) {
      case "/":
      case "*":
      case "-":
      case "+":
        operators(b.target.innerText);
        return;
      case "+/-":
        not(b.target.innerText);
        return;
      case "Backspace":
        // backspace(b.target.innerText);
        return;
      case "AC":
        clear(b.target.innerText);
        return;
      case ".":
        //  point(b.target.innerText);
        return;
      case "=":
        equal();
        return;
      default:
        digits(b.target.innerText);
        return;
    }
  };
  for (let i = 3; i < 10; i += 3)
    for (let j = 0; j < 3; j++)
      digitsButton.push(
        <Button handleClick={handleClick}>{10 - (i - j)}</Button>
      );
  const operation = ["/", "*", "-", "+", "="];
  for (let variable of operation)
    operationsButton.push(
      <Button mode="operator" handleClick={handleClick}>
        {variable}
      </Button>
    );
  return (
    <>
      <div className="app">
        <div className="resault">{resault}</div>
        <div className="formulla">{formulla}</div>
        <div className="container">
          {/* <div className="digits">{digitsButton}</div> */}
          <div className="digits">
            <Button mode="AC" handleClick={handleClick}>
              AC
            </Button>
            <Button mode="backspace" handleClick={handleClick}>
              Backspace
            </Button>
            {digitsButton}
            <Button handleClick={handleClick}>0</Button>
            <Button handleClick={handleClick}>.</Button>
            <Button mode="not" handleClick={handleClick}>
              +/-
            </Button>
          </div>
          <div className="operators" handleClick={handleClick}>
            {operationsButton}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
