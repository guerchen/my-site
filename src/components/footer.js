import React from 'react';
import './footer.css';
import linkedin from '../images/linkedIn_logo.png'
import github from '../images/github_logo.png'
import kaggle from '../images/kaggle_logo.webp'

function Footer() {
    return (
        <div className='Footer'>
            <a href='https://www.linkedin.com/in/ariel-g-5a4747178/' target="_blank" rel="noopener noreferrer">
                <img src={linkedin} className='miniature' alt='linkedin logo'/>
            </a>
            <a href='https://github.com/guerchen' target="_blank" rel="noopener noreferrer">
                <img src={github} className='miniature' alt='github logo'/>
            </a>
            <a href='https://www.kaggle.com/arielguerchenzon' target="_blank" rel="noopener noreferrer">
                <img src={kaggle} className='miniature' alt='kaggle logo'/>
            </a>
            <a href='https://github.com/guerchen/my-site' target="_blank" rel="noopener noreferrer">
                <p className='Source'>Source</p>
            </a>
            <p className='LastUpdt'>Last updated: 2022-12-03</p>
        </div>
    );
  }
  
  export { Footer };