import React from 'react';
import './projects.css';
import { Project } from '../components/project'; 
import { Footer } from '../components/footer'

function Projects() {
    return (
        <div className='content'>
            <div className='projects-card'>
                <Project name='This very site' description='My first personal website, made using React.js and deployed to github pages.
                I Learned a lot about reusable React.js components, github pages deployment, and css styling. My previous experience with
                Vue.js enabled me to pick up React.js very quickly, and I was able to build from the ground up and deploy within a week.'
                link='https://github.com/guerchen/my-site' />
                <Project name="Potential for wave energy in Brazil" description="This streamlit project was first motivated by a 
                university project where we had to research the potential energy generation for unusual forms of renewable energy. I applied
                a research paper based optimized computational method to a database of Brazil's historical wave measurements accross a variety
                of locations."
                link='https://github.com/guerchen/WaveEnergy' />
                <Project name='My own Facematch/Liveness' description='With the goal of better understanding the products offered by idwall,
                I sought out to build my own version of Facematch with Liveness using a Kaggle selfies and IDs dataset and Tensorflow and Keras.
                I learned a lot about image preprocessing, convolutional neural networks, TPUs, and more!'
                link='https://github.com/guerchen/my-own-facematch-liveness/blob/37dde117d7252f8b9da68add5aaf7f77b45829d4/my-own-facematch-liveness.ipynb' />
                <Project name="Ariel's first API" description="Using python's library flask, I was able to create a very simple REST API, for 
                learning purposes, mainly because I deal with REST APIs daily and wanted to get a better grip on their inner workings. I was able 
                to deploy it for some time using Heroku's free dynos. It has been since shut down."
                link='https://github.com/guerchen/ariels-first-api/tree/master' />
            </div>
            <Footer />
        </div>
    );
  }
  
export { Projects };