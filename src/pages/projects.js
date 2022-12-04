import React from 'react';
import './projects.css';
import { Project } from '../components/project'; 
import { Footer } from '../components/footer'

function Projects() {
    return (
        <div className='content'>
            <div className='projects-card'>
                <Project name='This very site' description='My first personal website, made using React.js and deployed to github pages.
                Learned a lot about React.js components, github pages deployment, and css styling.'
                link='https://github.com/guerchen/my-site' />
                <Project name="Potential for wave energy in Brazil" description="This streamlit project was first motivated by a 
                university project where we had to research the potential energy generation for unusual forms of renewable energy. I applied
                a research paper based optimized computational method to a database of Brazil's historical wave measurements accross a variety
                of locations."
                link='https://guerchen-waveenergy-waves-apklz5.streamlit.app/' />
                <Project name='My own Facematch/Liveness' description='With the goal of better understanding the products offered by idwall,
                I sought out to build my own version of Facematch with Liveness using a Kaggle selfies and IDs dataset and Tensorflow and Keras.
                I learned a lot about image preprocessing, convolutional neural networks, TPUs, and more!'
                link='https://github.com/guerchen/my-own-facematch-liveness/blob/37dde117d7252f8b9da68add5aaf7f77b45829d4/my-own-facematch-liveness.ipynb' />
            </div>
            <Footer />
        </div>
    );
  }
  
export { Projects };