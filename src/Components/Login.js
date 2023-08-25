import { Button } from "bootstrap";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ss");
  };
  return (
    <div className="formDiv">
      <form className="formClass" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text" />
        <label htmlFor="password"> Password</label>
        <input id="password" name="password" type="password" />
        <button type="Submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
