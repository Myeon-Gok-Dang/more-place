import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";

function App() {
	const [message, setMessage] = useState([]);
	useEffect(() => {
		fetch("/hello", {
			 headers : { 
		        'Content-Type': 'application/json',
		        'Accept': 'application/json'
     		  }
		})
		.then(response => response.text())
        .then(message => {setMessage(message);
      });
	}, []);
	
	
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> 리액트 잘됨?
          나오냐: {message}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
