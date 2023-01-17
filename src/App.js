import logo from './logo.svg';
import Button from './Components/Button';
import './App.css';


function App() {
  const handleClick = () =>{

  }

  const restartCount = () => {

  }

  return (
    <div className="App">
      <div className='main-container'>
        <Button text="Click" isClick={true} handleClick={handleClick} ></Button>
        <Button text="Restart" isClick={false} handleClick={restartCount} ></Button>
      </div>
    </div>
  );
}

export default App;
