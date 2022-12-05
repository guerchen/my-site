import React from 'react';
import './notfound.css';
import { Footer } from '../components/footer'

function NotFound() {

    return (
        <div className='content'>
            <div className='NotFoundDiv'>
                <h1> Not all who wander are lost! </h1>
                <h3> But seriously, you weren't supposed to be here.</h3>
            </div>
            <Footer />
        </div>
    );
  }
  
export { NotFound };