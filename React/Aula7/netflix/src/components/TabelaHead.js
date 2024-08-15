import React from 'react'

const TabelaHead = props => (
    <thead>
        <tr>
            <th>Cartaz</th>
            <th>Título
            <div className='container-setlinhas'>
                    <div className="ordem-alfabetica"onClick={() => props.ordenarCrescente()}>&#129093;</div>
                    <div className="ordem-alfabetica" onClick={() => props.ordenarDecrescente()}>&#129095;</div>
                </div>
            </th>
            <th>Detalhes</th>
            <th></th>
        
        </tr>
    </thead>
)

export default TabelaHead;
