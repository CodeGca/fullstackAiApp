import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <h1>Welcome to the game.</h1>
      <form>
        <label>
          username:
          <input type={"text"}/>
        </label>
        <br />
        <label>
          username:
          <input type={"text"}/>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
