import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useState } from 'react';


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleUsernameChange =(event)=>{
    setUsername(event.target.value);
    console.log(username);
  }
  const handlePasswordChange=(event)=>{
    setPassword(event.target.value)
    console.log(password)
  }
  const handleSubmit =(event)=>{
    event.preventDefault();
    axios.post('http://localhost:3000/', {username, password})
    .then((response)=>{
      console.log(response)
    }).catch((error)=>{
      console.log(error)
    });
  }
  console.log(username);
  
  return (
    <div className="App">
      <h1>Welcome to the game.</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="text" value={password} onChange={handlePasswordChange}/>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
