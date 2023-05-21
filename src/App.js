import { useState } from "react";
import "./CSS/Main.css";
import Button from "./Components/button";
function App() {
  // const handleDigits = (d) => {};
  const handleClick = (b) => {
    console.log(b.target.innerText);
  };
  const [resault, setResault] = useState(10);
  let digitsButton = [];
  let operationsButton = [];
  for (let i = 3; i < 10; i += 3)
    for (let j = 0; j < 3; j++)
      digitsButton.push(<Button handleClick={handleClick}>{10 - (i - j)}</Button>);
  const operation = ["/", "*", "-", "+", "="];
  for (let variable of operation)
    operationsButton.push(<Button mode="operator" handleClick={handleClick}>{variable}</Button>);
  return (
    <>
      <div className="app">
        <div className="resault">{resault}</div>
        <div className="container">
          {/* <div className="digits">{digitsButton}</div> */}
          <div className="digits">
            <Button mode="AC" handleClick={handleClick}>
              AC
            </Button>
            <Button mode="backspace" handleClick={handleClick}>Backspace</Button>
            {digitsButton}
            <Button handleClick={handleClick}>0</Button>
            <Button handleClick={handleClick}>.</Button>
            <Button mode="not" handleClick={handleClick}>+/-</Button>
          </div>
          <div className="operators" handleClick={handleClick}>{operationsButton}</div>
        </div>
      </div>
    </>
  );
}

export default App;
