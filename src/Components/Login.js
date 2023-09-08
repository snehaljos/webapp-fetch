import { Button } from "bootstrap";
import { useState } from "react";
import validate from "./Validation";

function Login() {
  let [erros, setErros] = useState([]);
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ss");
  };
  const handleChange = (event) => {
    if (event.target.name == "username") setUsername(event.target.value);
    else setPassword(event.target.value);
    console.log(username);
    validate(erros, setErros, event.target);
    console.log(password);
  };
  return (
    <div className="formDiv">
      <form className="formClass" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          onChange={handleChange}
          //    required
          id="username"
          name="username"
          type="text"
          value={username}
        />
        {erros.length > 0 && (
          <span className="danger">Username not correct</span>
        )}
        <label htmlFor="password"> Password</label>
        <input
          onChange={handleChange}
          ///required
          id="password"
          name="password"
          type="password"
          value={password}
        />
        {erros.length > 0 && (
          <span className="danger">password not correct</span>
        )}
        <button type="Submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
