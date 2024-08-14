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

  

}