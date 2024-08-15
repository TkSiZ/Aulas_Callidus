import React from 'react'

const TabelaHead = props => (
    <thead>
        <tr>
            <th>Cartaz</th>
            <th>Título
            <div className='container-setlinhas'>
                    <div onClick={() => props.ordenarCrescente()}>&#129093;</div>
                    <div onClick={() => props.ordenarDecrescente()}>&#129095;</div>
                </div>
            </th>
            <th></th>
        </tr>
    </thead>
)

export default TabelaHead;
