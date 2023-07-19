import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Button from "./Components/Button.js";
import Header from "./Components/Header";

function App() {
  const [count, setCount] = useState(3);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <Header />
      <Button
        style={{ padding: "20000" }}
        onClick={handleClick}
        count={count}
      />
    </div>
  );
}

export default App;
