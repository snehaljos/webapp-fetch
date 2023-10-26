import "./App.css";
import { useState, useEffect } from "react";
import Button from "./Components/Button.js";
import Header from "./Components/Header";
import axios from "axios";
import photo from "./asset/profile.jpg"

function App({
  form = {
    title: "",
    name: "",
    path: "",
    display: "form",
    type: "form",
    components: [],
  },
}) {
  const [count, setCount] = useState("ee");
  const [users, setUsers] = useState([]);
  const [flag, setFlag] = useState(true);
  console.log(form);
  useEffect(() => {
    axios.get("http://localhost:4000/employees").then((result) => {
      setUsers(result.data);

      setFlag(false);
    });
  }, [flag]);
  if (flag) {
    return <h1>Loading...</h1>;
  }
  return (
    <div class="container mainbody">
      <div class="row justify-content-center">
        {users.map((data) => {
          return (
            <>
              <div class="card col-sm-2 " style={{ width: 18 + "rem" }}>
                <img src={photo} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">{data.name}</p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
export default App;
