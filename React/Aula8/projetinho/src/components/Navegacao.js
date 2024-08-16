import React from 'react';
import { NavLink } from 'react-router-dom';

// formatação inline
let linkCorrente = {
    color: "#027399"
}


const Navegacao = () => {
    return (
        <ul>
            <li>
                <NavLink to = "/Home" style={linkCorrente}>Home</NavLink>
            </li>
            <li>
                <NavLink to = "/Frontend" style={linkCorrente}>Frontend</NavLink>
            </li>
            <li>
                <NavLink to = "/Programacao" style={linkCorrente}>Programacao</NavLink>
            </li>
            <li>
                <NavLink to = "/Design" style={linkCorrente}>Design</NavLink>
            </li>       
            <li>
                <NavLink to = "/Catalogo" style={linkCorrente}>Catálogo</NavLink>
            </li>
        </ul>
    );
}

export default Navegacao;
    