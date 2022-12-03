import React from 'react';
import { Card } from '../components/card'
import './about.css';
import { Footer } from '../components/footer'

function About() {
    return (
        <div className='content'>
            <Card />
            <footer>
            <Footer />
            </footer>
        </div>
    );
  }
  
export { About };