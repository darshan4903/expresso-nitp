import React from 'react';
import { Routes, Route, Switch } from "react-router-dom";
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Team from './Components/Team/Team';
import Gallery from './Components/Gallery/Gallery';
import Home from './Components/Home/Home';

function App(){

    return (
        <div className="App">
        <BrowserRouter>
          <Switch>
            <Navbar/>
            <Route exact path='/'>
              <Home/>
             </Route>
       

           <Route exact path='/gallery'>
             <Gallery/>

           </Route>
           <Route exact path='/team'>
             <Team/>

            </Route>
            </Switch>
            </BrowserRouter>
</div>   
    );
}

export default App;
