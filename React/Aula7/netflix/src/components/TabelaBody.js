import React from 'react'

const TabelaBody = props => (
    <tbody>
        {props.filmes.map((filme) => (
            <tr key={filme.Title} id='cartaz'>
                <td><img src={filme.Poster} alt="Cartaz" width={200}/></td>
                <td>{filme.Title}</td>
                <td class="detalhes">Duração: {filme.Runtime}<br />
                    Tipo: {filme.Type}<br />
                    Gênero: {filme.Genre}<br />
                    Elenco: {filme.Actors  }<br />
                    Lançamento: {filme.Released} <br />
                </td>
                <button onClick={() => props.removerlinha(filme.Title)} id={filme.Title}>Remover Cartaz  </button>
            </tr>
        ))}
    </tbody>
);

export default TabelaBody;