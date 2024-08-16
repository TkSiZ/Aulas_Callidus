import React, { Component } from 'react';
import Topo from './components/Topo';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Frontend from './components/Frontend';
import Programacao from './components/Programacao';
import Design from './components/Design';
import NotFound from './components/NotFound';
import Catalogo from './components/Catalogo'; 
import Home from './components/Home'

class App extends Component{
  render(){
    return(
      <Router>
        <>
          <Topo/>
          <Routes>
            <Route path='/Home' element={<Home/>}></Route>
            <Route path='/Frontend' element={<Frontend/>}></Route>
            <Route path='/Design' element={<Design/>}></Route>
            <Route path='/Programacao' element={<Programacao/>}></Route>
            <Route path='/Catalogo' element={<Catalogo/>}></Route>
            <Route path='/NotFound' element={<NotFound/>}></Route>
          </Routes>
        </>
      </Router>
    );
  }
}

export default App;