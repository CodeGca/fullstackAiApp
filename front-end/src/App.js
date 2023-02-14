import logo from './logo.svg';
import './App.css';
import WelcomePage from './Welcome';
import axios from 'axios'
import { useState } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';


function App(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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
      navigate('/welcome')
    }).catch((error)=>{
      console.log(error)
    });
  }
  console.log(username);
  
  return (
    <div className="App">
      {/* <h1>Welcome to the game.</h1> */}
      <Routes>
        <Route path="/welcome" element={< WelcomePage {...props} username={username}/>} />
        {/* <Route path="/welcome" element={<h1>Welcome to the game<h1/>} /> */}
      </Routes>
      {/* < WelcomePage {...props} username={username}/> */}
      <form onSubmit={handleSubmit} action="/welcome">
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
