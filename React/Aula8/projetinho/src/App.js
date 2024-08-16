import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <>
        <header className='topo'> Topo
          <h1 className='logo'>
              <span className='sr-only'>Nome da empresa </span>
              <img src="logo.png" alt='' />
          </h1>
          <ul>
            <li><a href='#'>Navegacao </a></li>
          </ul>
        </header>
        <main className='principal'> 
          <h2>Últimos lançamentos</h2>
          <div className="card">Card</div>
        </main>
        <footer className='rodape'>
          <p> Conteúdos cedidos pelo Editora Callidus &#8212; CopyRight 2024</p>
        </footer>
      </>
  );
}

export default App;
