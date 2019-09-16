import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import HomeContainer from './components/Home/HomeContainer';
import Header from './components/Header/Header';
//import AboutFilmContainer from './components/AboutFilm/AboutFilmContainer';

function App() {
     return (
                <div className="App">
                    <Header />
                    <Route exact path='/' render = { () => <HomeContainer /> } />
                </div>

            );
}

export default App;