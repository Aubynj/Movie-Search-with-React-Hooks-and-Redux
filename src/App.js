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
                <HeaderComponent logo={logo}/>
                <MovieComponent />
            </div>
        </Provider>
    );
}

export default App;
