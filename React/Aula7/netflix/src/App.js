import React, {Component} from 'react'
import TabelaHead from './components/TabelaHead';
import TabelaBody from './components/TabelaBody';
import TabelaFoot from './components/TabelaFoot';

class App extends Component {

  state = {
    filmes:[]
  };
  
  // montagem do componente
  componentDidMount(){
    fetch("/api/Film.json")
    .then(response => response.json())
    .then(filmes => this.setState({filmes}))
    .catch(function(error){
      console.log("deu merda");
    })
    .finally(function(){
      console.log('A requisição foi finalizada');
    });
  }

  handleOrdenarCrescente = () => {
    const filmes = [...this.state.filmes]; 
    filmes.sort((a, b) => a.Title.localeCompare(b.Title)); 
    this.setState({ filmes }); 
};



  handleOrdenarDescrecente = () => {
    const filmes = [...this.state.filmes]
    filmes.sort((a, b) => b.Title.localeCompare(a.Title));
    this.setState({ filmes }); 
};

  render() {
    return (
      <div>
        <h1>Cartaz de Filmes e Séries</h1>
        <table>
          <TabelaHead
          ordenarCrescente = {this.handleOrdenarCrescente}
          ordenarDecrescente = {this.handleOrdenarDescrecente}
          />
          <TabelaBody
          filmes = {this.state.filmes}
          
          />
        </table>
      </div>
    );
  }
}

export default App;


