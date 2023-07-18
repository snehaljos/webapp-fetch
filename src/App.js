import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './Components/Button.js';

function App() {
const [count,setCount]=useState(3);
function handleClick(){
  setCount(count+1);
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <Button  onClick={handleClick} count={count}/>
       
      </header>
    </div>
  );
}

export default App;
