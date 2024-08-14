import React from 'react'

const TabelaFoot = (props) => (
    <tfoot>
        <tr className='foot'>
            <td colSpan='4'>Quantidade de livros da tabela: {props.qdelivros} </td>
        </tr>
    </tfoot>
);

export default TabelaFoot;