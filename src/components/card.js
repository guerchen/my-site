import React from 'react';
import './card.css';
import mypic from '../images/mypic.jpg'

function Card() {
    return (
        <div className='Gray-card'>
            <div className='Picture-frame'>
                <img src={mypic} className='Image' alt='my-pic'/>
            </div>
            <div className='Text-card'>
            <h1 className='MyName'>Ariel Guerchenzon</h1>
                <div className='ShortDescr'>
                    <p> Hello dear visitor! </p>
                    <p> I'm a mechanical engineer who works with software and lives in São Paulo. </p>
                    <p> I'm interested in learning data science, software engineering, entrepreneurship,
                        running, playing classical guitar, and reading books. </p>
                    <p> Be welcome to take a stroll around my website.</p>
                </div>   
            </div>
        </div>
    );
  }
  
  export {Card};