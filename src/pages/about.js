import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

function About() {
    return (
        <div className='content'>
            <h1>Apartamentos tão bons que até papagaios vão querer te visitar!</h1>
            <Link to='/contact'>
                <h5>Ficou interessado? Então entre em contato!</h5>
            </Link>
        </div>
    );
  }
  
export { About };