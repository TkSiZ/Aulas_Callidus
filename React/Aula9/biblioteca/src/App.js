import { Component } from "react";
import Menu from "./components/Menu";
import TabelaLivros from "./components/TabelaLivros";
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import CadastrarLivros from "./components/CadastrarLivros";
import NotFound from "./components/NotFound";

// Define a classe "App", que herda de "Component" (um componente de classe React)
class App extends Component {

  // Define o estado inicial do componente "App", contendo uma lista de livros
  state = {
    //Dados dos livros
    livros: [
      {
        id: 1,
        isbn: "978-85-7522-403-8",
        titulo: "HTML - 2° Edição",
        autor: "Mauricio Samy Silva",
      },
      {
        id: 2,
        isbn: "978-85-7522-807-4",
        titulo: "Introdução ao Pentest",
        autor: "Daniel Moreno",
      },
      {
        id: 3,
        isbn: "978-85-7522-780-8",
        titulo: "Internet das Coisas para desenvolvedores",
        autor: "Ricardo da Silva Ogliart",
      },
    ]
  };

  // Define o método "inserirLivro" para adicionar um novo livro à lista no estado
  inserirLivro = (livro) =>{
      // Atribui um novo id ao livro, que é o comprimento atual da lista de livros + 1
      livro.id = this.state.livros.length + 1;

      // Atualiza o estado, adicionando o novo livro à lista existente
      this.setState({
        livros: [...this.state.livros, livro], // Cria uma nova lista de livros incluindo o novo livro
      });
  };

  // Define o método "editarLivro" para editar um livro existente na lista
  editarLivro = (livro) => {
    // Encontra o índice do livro a ser editado na lista de livros com base no id
    const index = this.state.livros.findIndex((p) => p.id === livro.id);

    // Cria uma nova lista de livros, removendo o livro a ser editado e adicionando o livro atualizado
    const livros = this.state.livros
      .slice(0, index)
      .concat(this.state.livros.slice(index + 1));

    // Cria a nova lista de livros com o livro editado e ordena por id
    const newLivros = [...livros, livro].sort((a, b) => a.id - b.id);

    // Atualiza o estado com a nova lista de livros
    this.setState({ livros: newLivros });
};

  // Define o método removerLivros, que eliminará o livro da lista 
  removerLivro = livro => {
    if(window.confirm("Remover esse livro?")){
      const livros = this.state.livros.filter( p => p.isbn !== livro.isbn);
      this.setState({livros});
    }
  }

  // Define o método "render", que retorna o layout do componente
  render(){
    return(
      // Envolve os componentes de rotas dentro de um "Router"
      <Router>
          {/* Renderiza o componente Menu */}
          <Menu/>
          {/* Define as rotas do aplicativo */}
          <Routes>
            {/* Rota para a página inicial, que renderiza o componente TabelaLivros com a lista de livros do estado */}
            <Route path="/" element={<TabelaLivros livros={this.state.livros}
              removerLivro={this.removerLivro}/>}/>

            {/* Rota para a página de cadastro, que renderiza o componente CadastrarLivros */}
            <Route path="/cadastrar" 
              element={<CadastrarLivros inserirLivro={this.inserirLivro}
               livro = {{id:0, isbn:"",titulo:"", autor:""}}/>}/>

            {/* Rota para a página de edição, que renderiza o CadastrarLivrosWrapper */}
            <Route path="/editar/:isbnLivro" 
               element={<CadastrarLivrosWrapper 
                livros = {this.state.livros}
                editarLivro={this.editarLivro}/>}/>

            {/* Rota curinga, que redireciona para a página NotFound quando o caminho não corresponde a nenhuma rota definida */}
            <Route path="*" element={<NotFound/>}/>
          </Routes>
      </Router>      
    );
  }
}

// Define a classe "CadastrarLivrosWrapper", que também herda de "Component"
class CadastrarLivrosWrapper extends Component{
  render(){
    // Desestrutura os livros e o método editarLivro das props recebidas pelo componente
    const {livros, editarLivro} = this.props;

    // Extrai o ISBN do livro a partir da URL
    const isbnLivro = window.location.pathname.split("/").pop();

    // Encontra o livro correspondente ao ISBN na lista de livros
    const livro = livros.find((livro) => livro.isbn === isbnLivro);

    // Se o livro for encontrado, renderiza o componente CadastrarLivros com os dados do livro para edição
    if(livro){
      return <CadastrarLivros editarLivro = {editarLivro} livro = {livro}/>;
    }else{
      // Se o livro não for encontrado, redireciona para a página inicial
      return <Navigate to="/"/>;
    }
  }
}

// Exporta o componente "App" como padrão para ser usado em outras partes da aplicação
export default App;
