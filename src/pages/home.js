import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
    return (
        <div className='content'>
            <h1 className='text'>OS MELHORES APARTAMENTOS DE HIGIENÓPOLIS</h1>
            <h3 className='text'>Mais de 10 anos de experiência no bairro. Conheço todos os apartamentos do bairro de cor! </h3>
            <h5 className='text'>Os melhores apartamentos para o que você procura!</h5>
            <br />
            <Link to='/about'>
                <h5 className='text'>Conheça um pouco mais sobre mim</h5>
            </Link>
        </div>
    );
  }
  
export { Home };