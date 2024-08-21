import React from 'react';
import { NavLink } from 'react-router-dom';

//formatação inline

let linkCorrente = {
    color: "#027399"
}

const Navegacao = () => {
    return (
        <ul>
            <li>
                <NavLink to ="/home" style={linkCorrente}>Home</NavLink>
            </li>
            <li>
                <NavLink to ="/frontend" style={linkCorrente}>Frontend</NavLink>
            </li>
            <li>
                <NavLink to ="/programacao" style={linkCorrente}>Programacao</NavLink>
            </li>
            <li>
                <NavLink to ="/design" style={linkCorrente}>Design</NavLink>
            </li>
            <li>
                <NavLink to ="/catalogo" style={linkCorrente}>Catalogo</NavLink>
            </li>
        </ul>
    );
}

export default Navegacao;
