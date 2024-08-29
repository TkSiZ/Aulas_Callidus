import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

// Define a classe "CadastrarLivros", que herda de "Component" (um componente de classe React)
class CadastrarLivros extends Component {

    // Construtor da classe, usado para inicializar o componente
    constructor(props) {
        super(props); // Chama o construtor da classe pai (Component)

        // Cria referências para os campos de entrada "titulo" e "autor"
        this.tituloRef = React.createRef();
        this.autorRef = React.createRef();
    }

    // Define o estado inicial do componente "CadastrarLivros"
    state = {
        livro: {
            id: this.props.livro.id, // Inicializa o estado "livro" com as propriedades recebidas
            isbn: this.props.livro.isbn,
            titulo: this.props.livro.titulo,
            autor: this.props.livro.autor,
        },
        redirecionar: false, // Estado para controlar o redirecionamento após o cadastro
    };

    // Método para lidar com o envio do formulário
    handleLivroForm = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário de recarregar a página
        
        if(this.props.editarLivro){
            this.props.editarLivro(this.state.livro);
        }else if(this.props.inserirLivro){
            this.props.inserirLivro(this.state.livro);
        }
        this.setState({redirecionar: true});
    };

    // Método "render" que retorna o layout do componente
    render() {
        // Se o estado "redirecionar" for verdadeiro, redireciona para a página inicial
        if (this.state.redirecionar === true) {
            return <Navigate to="/" />;
        }

        // Retorna o formulário para cadastrar livros
        return (
            <form onSubmit={this.handleLivroForm} className='meu-formulario'> {/* Define o manipulador de envio do formulário */}
                <h1>{this.state.livro.id ? "Editar" : "Cadastrar"} livro</h1>
                <p>
                    <label htmlFor='fisbn'>
                        ISBN: Formato - (<span style={{ color: "red" }}>978-85-7522-xxx-x</span>)
                    </label>
                    <input type='text' autoFocus id='fisbn' required
                        pattern="^978-85-7522-[0-9]{3}-[0-9]{1}$" // Define um padrão de regex para o ISBN
                        value={this.state.livro.isbn} // Define o valor do campo de entrada como o ISBN do estado
                        onChange={(e) =>
                            // Atualiza o estado "livro" com o novo valor do ISBN
                            this.setState({
                                livro: {
                                    ...this.state.livro, // Mantém as outras propriedades do estado "livro" inalteradas
                                    isbn: e.target.value, // Atualiza apenas o ISBN
                                },
                            })
                        }
                    />
                </p>
                <p>
                    <label htmlFor='ftitulo'>Titulo</label>
                    <input type='text' id='ftitulo' required
                        value={this.state.livro.titulo} // Define o valor do campo de entrada como o título do estado
                        onChange={(e) =>
                            // Atualiza o estado "livro" com o novo valor do título
                            this.setState({
                                livro: {
                                    ...this.state.livro, // Mantém as outras propriedades do estado "livro" inalteradas
                                    titulo: e.target.value, // Atualiza apenas o título
                                },
                            })
                        }
                    />
                </p>
                <p>
                    <label htmlFor='fautor'>Autor</label>
                    <input type='text' id='fautor' required
                        value={this.state.livro.autor} // Define o valor do campo de entrada como o autor do estado
                        onChange={(e) =>
                            // Atualiza o estado "livro" com o novo valor do autor
                            this.setState({
                                livro: {
                                    ...this.state.livro, // Mantém as outras propriedades do estado "livro" inalteradas
                                    autor: e.target.value, // Atualiza apenas o autor
                                },
                            })
                        }
                    />
                </p>
                <p>
                    <button type='submit' className='botao cadastrar'>{this.state.livro.id ? "Salvar" : "Cadastrar"}</button> {/* Botão de submissão do formulário */}
                </p>
            </form>
        );
    }
}

// Exporta o componente "CadastrarLivros" para que possa ser usado em outras partes da aplicação
export default CadastrarLivros;
