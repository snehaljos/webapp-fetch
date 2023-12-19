import { Button } from "bootstrap";
import { useState } from "react";
import validate from "./Validation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {loggedIn ,loggedOut ,isLogged,count} from "../Slice/loginSlice";

function Login() {
  let [erros, setErros] = useState({
    haveError:false,
    username_err: "",
    password_err: "",
    noUser: "",
    backendError:""
  });
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const logged=useSelector(isLogged);
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setErros({...erros,haveError:false,noUser:"",backendError:""});
    axios.get("http://localhost:4000/employees?name="+username)
    .then((result) => {
            if(result.data.length !=0){
        dispatch(loggedIn(result.data[0]));
        navigate("/Success");
        setErros({...erros,haveError:false,noUser:""});
      }
      else{
        dispatch(loggedOut());
        setErros({...erros,haveError:true,noUser:"No user found",backendError:""});
      }
  })
  .catch(error =>{
    setErros({...erros,haveError:true,backendError:error.message,noUser:""});
  })
    
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
      {logged &&<span>Logged in </span>}
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
