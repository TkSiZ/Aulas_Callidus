import React from 'react'

const TabelaHead = props => (
    <thead>
        <tr>
            <td colSpan="4">Tabela de Livros</td>
        </tr>
        <tr>
            <th>ISBN</th>
            <th>Título
            <div className='container-setlinhas'>
                    <div onClick={() => props.ordenarCrescente()}>&#129093;</div>
                    <div onClick={() => props.ordenarDecrescente()}>&#129095;</div>
                </div>
            </th>
            <th>Autor</th>
            <th></th>
        </tr>
    </thead>
)

export default TabelaHead;
