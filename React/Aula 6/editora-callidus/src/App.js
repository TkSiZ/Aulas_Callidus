import React, {Component} from 'react'
import TabelaHead from './components/TabelaHead';
import TabelaBody from './components/TabelaBody';
import TabelaFoot from './components/TabelaFoot';

class App extends Component {

  state = {
    livros:[
      {
        id:"978-85-7522-632-2",
        titulo:"CSS Grid Layout",
        autor:"Maruício Samy Silva"
      },
      {
        id:"978-85-7522-992-1",
        titulo:"Node Essencial",
        autor:"Matheus Takashi Maruoka Vieira"
      },
      {
        id:"978-85-7522-521-7",
        titulo:"Aprendendo Material Design",
        autor:"Kyle Mew"
      },
    ]
  };

  render() {
    return (
      <div>
        <h1>Tabela de Livros</h1>
        <table>
          <TabelaHead />
          <TabelaBody livros={this.state.livros} />
          <TabelaFoot qdelivros = {this.state.livros.length}/>
        </table>
      </div>
    );
  }
}

export default App;
