import { Button } from "bootstrap";
import { useState } from "react";
import validate from "./Validation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function MissedGoal() {
	return <h1>MISSED!</h1>;
}
function Login() {
  let [erros, setErros] = useState({
    haveError:false,
    username_err: "",
    password_err: "",
    noUser: "",
    backendError:""
  });
  const navigate = useNavigate();
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [isLoggedIn,setIsLoggedIn] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setErros({...erros,haveError:false,noUser:"",backendError:""});
    axios.get("http://localhost:4000/employees?name="+username)
    .then((result) => {
      if(result.data.length !=0){
        setIsLoggedIn(true);
        navigate("/Success");
        setErros({...erros,haveError:false,noUser:""});
      }
      else{
        setIsLoggedIn(false);
        setErros({...erros,haveError:true,noUser:"No user found",backendError:""});
      }
  })
  .catch(error =>{
    setErros({...erros,haveError:true,backendError:error.message,noUser:""});
  })
  if(isLoggedIn){
    console.log("ddd");
    return(
    <div>
     sdfss
    </div>);
  }
    
  };
  const handleChange = (event) => {
  
    if (event.target.name === "username") {
      setUsername(event.target.value);
      setErros({...erros,username_err:""});
    }
    else {
      setPassword(event.target.value);
      setErros({...erros,password_err:""});
    }
    if(!(erros.username_err || erros.password_err)){
      setErros({...erros,haveError:false});
    }
    console.log(!event.target.value);

    validate(erros, setErros, event.target);
    console.log(password);
  };
  return (
    <div className="formDiv">
      {isLoggedIn &&<span>Logged in </span>}
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
        {erros.username_err && (
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
        {erros.password_err && (
          <span className="danger">password not correct</span>
        )}
        <button disabled={erros.haveError} id="Formbutton" className="btn btn-primary" type="Submit" value="Submit">
          Submit
        </button>
       {erros.haveError && erros.noUser && (<span>{erros.noUser}</span>)}
       {erros.haveError && erros.backendError && (<span>{erros.backendError}</span>)}
      </form>
    </div>
  );
}

export default Login;
