import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <main className='principal'>
            <h2>404!!!</h2>
            <p>
                PAGINA NAO ENCONTRADA OU REMOVIDA. 
                <Link to="/">ir para Home Page</Link>
            </p>
        </main>
    );
}

export default NotFound;
