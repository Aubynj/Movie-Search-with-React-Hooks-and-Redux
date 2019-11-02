import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux'
import MovieStore from './Redux/MovieStore'
// import './App.css'
import './Custom.css'
import MovieComponent from './Components/MovieComponent';
import HeaderComponent from './Components/HeaderComponent';

function App() {
    return (
        <Provider store={MovieStore}>
            <div className="body_bg">
                {/* <header className="App-header">
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
                </header> */}
                <HeaderComponent logo={logo}/>
                <MovieComponent />
            </div>
        </Provider>
    );
}

export default App;
