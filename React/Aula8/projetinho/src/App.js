import React, { Component } from 'react';
import Topo from './components/topo';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Frontend from './components/frontend';
import Programacao from './components/programacao';
import Design from './components/design';
import NotFound from './components/NotFound';
import Home from './components/home'
import Catalogo from './components/catalogo';

class App extends Component{
  render(){
    return(
      <Router>
        <>
          <Topo/>
          <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/frontend' element={<Frontend/>}></Route>
            <Route path='/design' element={<Design/>}></Route>
            <Route path='/programacao' element={<Programacao/>}></Route>
            <Route path='/Catalogo' element={<Catalogo/>}></Route>
            <Route path='/NotFound' element={<NotFound/>}></Route>
          </Routes>
        </>
      </Router>
    );
  }
}

export default App;