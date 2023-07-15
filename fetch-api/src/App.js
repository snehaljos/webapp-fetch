import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const [count,setCount]=useState(3);
function handleClick(){
  setCount(count+1);
}
function Button({count,onClick}){
  return (
    <button onClick={onClick}>
      Cliked {count} times enjoy
    </button>
  )
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <Button count={count} onClick={handleClick}/>
       
      </header>
    </div>
  );
}

export default App;
