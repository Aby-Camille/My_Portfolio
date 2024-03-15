import React from 'react';
import './../NotFound/NotFound.scss'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function NotFound () {

    useEffect (() => {
        document.title = 'Kasa - 404 Not Found'
    }, [])
    
    return <div className='notFound'>
        <h1 className='notFound_title'>404</h1>
        <p className='notFound_info'>Oups! La page que vous recherchez n'existe pas.</p>
        <Link to="/" className='notFound_link'>Retourner sur la page d'accueil</Link>
    </div>;
            
}

export default NotFound;