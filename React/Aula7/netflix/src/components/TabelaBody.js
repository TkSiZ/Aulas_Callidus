import React from 'react'

const TabelaBody = props => (
    <tbody>
        {props.filmes.map((filme) => (
            <tr key={filme.Title}>
                <td><img src={filme.Poster} alt="Cartaz" width={200}/></td>
                <td>{filme.Title}</td>
            </tr>
        ))}
    </tbody>
);

export default TabelaBody;