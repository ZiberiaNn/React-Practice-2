import logo from './logo.svg';
import Button from './Components/Button';
import Counter from './Components/Counter';
import { useState } from 'react';

import './App.css';


function App() {
  const [clickNumber, setClickNumber] = useState(0); 

  const handleClick = () =>{
    setClickNumber(clickNumber+1);
  }

  const restartCount = () => {
    setClickNumber(0);
  }
  return (
    <div className="App">
      <div className='main-container'>
        <Counter clickNumber={clickNumber}></Counter>
        <Button text="Click" isClick={true} handleClick={handleClick} ></Button>
        <Button text="Restart" isClick={false} handleClick={restartCount} ></Button>
      </div>
    </div>
  );
}

export default App;
