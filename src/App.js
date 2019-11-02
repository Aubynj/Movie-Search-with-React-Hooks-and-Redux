import React from 'react';
import logo from './logo.svg';
import './App.css';

const BASE_URL = process.env.API_KEY;
function App() {
    console.log(`Dot env::`, BASE_URL)
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn
                </a>
            </header>
        </div>
    );
}

export default App;
