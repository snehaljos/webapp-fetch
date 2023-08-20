import React from "react";

function Button(props) {
  return (
    <button style={{ padding: "20000" }} onClick={props.onClick}>
      {"sss" === "sss"}
      Cliked {props.count} times enjoy
    </button>
  );
}

export default Button;
