import React from 'react';
import './card.css';
import mypic from '../images/mypic.jpg'

function Card() {
    return (
        <div className='Gray-card'>
            <div className='Picture-frame'>
                <img src={mypic} className='Image'/>
            </div>
            <div className='Text-card'>
            <h1 className='MyName'> Ariel Guerchenzon </h1>
                <div className='ShortDescr'>
                    <p> Hello dear visitor! </p>
                    <p> I'm a Mechanical Engineer that works with software. </p>
                    <p> I'm interested in Data Science, Software Development, running, playing classical guitar, listening to Classical Rock and reading books. </p>
                    <p> Be welcome to take a stroll around my website.</p>
                </div>   
            </div>
        </div>
    );
  }
  
  export {Card};