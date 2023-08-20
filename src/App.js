import "./App.css";
import { useState, useEffect } from "react";
import Button from "./Components/Button.js";
import Header from "./Components/Header";
import axios from "axios";

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
    <div class="container">
      <div class="row ">
        {users.map((data) => {
          return (
            <>
              <div class="card col-lg-2" style={{ width: 18 + "rem" }}>
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">{data.name}</p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div class="card col-sm-2" style={{ width: 18 + "rem" }}>
                <img src="..." class="card-img-top" alt="..." />
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
// App.defaultProps = {
//   id: "234",
// };
export default App;
