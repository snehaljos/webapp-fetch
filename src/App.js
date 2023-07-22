import "./App.css";
import { useState, useEffect } from "react";
import Button from "./Components/Button.js";
import Header from "./Components/Header";
import axios from "axios";

function App() {
  const [count, setCount] = useState(3);
  const [users, setUsers] = useState([]);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      setUsers(result.data);
      setFlag(false);
    });
  }, [flag]);
  if (flag) {
    return <h1>Loading...</h1>;
  }
  return (
    <div id="dr" className="App">
      <h1 id="head">wwww</h1>
      <header />
      <Button
        style={{ padding: "20000" }}
        onClick={() => setFlag(true)}
        count={count}
      />
      <span>{users[0].name}</span>
    </div>
  );
}

export default App;
