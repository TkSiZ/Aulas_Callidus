import React, {Component} from 'react'
import TabelaHead from './components/TabelaHead';
import TabelaBody from './components/TabelaBody';
import TabelaFoot from './components/TabelaFoot';

class App extends Component {

  state = {
    livros:[]
  };
  
  //montagem do componente
  componentDidMount(){
    fetch("/api/livros.json")
    .then(response => response.json())
    .then(livros => this.setState({livros}))
    .catch(function(error){
      console.log("Erro na requisição");
    })
    .finally(function(){
      console.log("Requisição finalizada - sempre retorna");
    }); 
  }


  handleRemoverLinha = (id) => {
    const livros = this.state.livros.filter(livro => livro.id !== id) 
    this.setState({livros});
  }

  handleOrdenarCrescente = () => {
    const livros = [...this.state.livros]; 
    livros.sort((a, b) => a.titulo.localeCompare(b.titulo)); 
    this.setState({ livros }); 
};



  handleOrdenarDescrecente = () => {
    const livros = [...this.state.livros]
    livros.sort((a, b) => b.titulo.localeCompare(a.titulo));
    this.setState({ livros }); 
  }


  render() {
    return (
      <div>
        <h1>Tabela de Livros</h1>
        <table>
          <TabelaHead

          ordenarCrescente = {this.handleOrdenarCrescente}
          ordenarDecrescente = {this.handleOrdenarDescrecente}

           />

          <TabelaBody 
            livros={this.state.livros}
            
            // funcao chama o manipulador de eventos

            removerlinha = {this.handleRemoverLinha}

            />
          <TabelaFoot qdelivros = {this.state.livros.length}/>
        </table>
      </div>
    );
  }
}

export default App;
