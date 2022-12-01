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
                <h1> Ariel Guerchenzon </h1>
            </div>
        </div>
    );
  }
  
  export {Card};