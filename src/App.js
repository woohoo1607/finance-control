import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import HomeContainer from './components/Home/HomeContainer';
import CategoryContainer from './components/Category/CategoryContainer';
import Header from './components/Header/Header';

function App() {
     return (
                <div className="App">
                    <Header />
                    <Route exact path='/' render = { () => <HomeContainer /> } />
                    <Route exact path='/category' render = { () => <CategoryContainer /> } />
                </div>

            );
}

export default App;