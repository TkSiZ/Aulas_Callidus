import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Topo from './components/topo';
import Frontend from './components/frontend';
import Programacao from './components/programacao';
import Design from './components/design';
import NotFound from './components/NotFound';
import Home from './components/home';
import Catalogo from './components/catalogo';
import axios from 'axios';
import Rodape from './components/rodape';
//import LivroWrapper from './components/LivroWrapper'; // Crie este componente separadamente
//<Route path='/livro/:livroSlug' element={<LivroWrapper livros={livros} />} /> {/* Corrigido */} botar depis em baixo de catalogo

class App extends Component {
  state = {
    livros: [],
    erro: false,
  };

  async componentDidMount() {
    try {
      const { data: livros } = await axios.get("api/todosOsLivros.json");
      this.setState({ livros });
    } catch (error) {
      console.log(error);
      this.setState({ erro: true });
    }
  }

  render() {
    const { livros } = this.state; // Acessa o estado corretamente
    return (
      <Router>
        <>
          <Topo />
          <main className='principal'>
            <Routes>
              <Route path='/home' element={<Home livros={livros} />} />
              <Route path='/frontend' element={<Frontend livros={livros} />} />
              <Route path='/design' element={<Design livros={livros} />} />
              <Route path='/programacao' element={<Programacao livros={livros} />} />
              <Route path='/catalogo' element={<Catalogo livros={livros} />} />
              
              <Route path='/NotFound' element={<NotFound />} />
            </Routes>
            <Rodape />
          </main>
        </>
      </Router>
    );
  }
}

export default App;
