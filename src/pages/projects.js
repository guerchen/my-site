import React from 'react';
import './projects.css';
import { Project } from '../components/project'; 
import { Footer } from '../components/footer';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import fetchJsonp from "fetch-jsonp";

function Projects() {
    fetchJsonp('https://ipinfo.io/json')
    .then((resp) => {
        return resp.json()
    }).then((resp) => {
        register_visit(resp)
    })

    const location = useLocation();
    const baseUrl = 'https://api-jpezawplgq-rj.a.run.app';
    function register_visit(response) {
        axios.post(
            `${baseUrl}/visits`,
            {
                page: location.pathname,
                date: (new Date()).toISOString(),
                platform: navigator.oscpu,
                user_agent: navigator.userAgent,
                ...response
            }
        )
    }

    return (
        <div className='content'>
            <div className='projects-card'>
                <Project name='Skin Cancer Medical Assistant App' date='2023-03 / 2023-04' description="This was my first attempt at mobile development and also an
                interesting project in Computer Vision. With the goal of helping a couple of medical students with a startup idea of creating an AI powered Skin Cancer
                detection app, the app connects to a FastAPI backend that serves a model cloned from Hugging Face that was trained on a dataset of skin lesions. In the end,
                this project was abandoned after talking to a specialist researcher on the topic that claimed there is no big enough dataset currently to build a
                production worthy model."
                link='https://github.com/guerchen/sc-rn-app' />

                <Project name='This very site' date='2022-12 / Forever' description='My first personal website, made using React.js and deployed to github pages.
                I Learned a lot about reusable React.js components, github pages deployment, and css styling. My previous experience with
                Vue.js enabled me to pick up React.js very quickly, and I was able to build from the ground up and deploy within a week.'
                link='https://github.com/guerchen/my-site/tree/projects-page' />

                <Project name='My own Facematch/Liveness' date='2022-09 / 2022-11' description='With the goal of better understanding the products offered by idwall,
                I sought out to build my own version of Facematch with Liveness using a Kaggle selfies and IDs dataset and Tensorflow and Keras.
                I learned a lot about image preprocessing, convolutional neural networks, Tensorflow Hub with transfer learning, TPUs, and more!'
                link='https://github.com/guerchen/my-own-facematch-liveness/blob/37dde117d7252f8b9da68add5aaf7f77b45829d4/my-own-facematch-liveness.ipynb' />

                <Project name="Ariel's first API" date='2022-10 / 2022-10' description="Using python's library flask, I was able to create a very simple REST API, for
                learning purposes, mainly because I deal with REST APIs daily and wanted to get a better grip on their inner workings. I was able 
                to deploy it for some time using Heroku's free dynos. It has been since shut down."
                link='https://github.com/guerchen/ariels-first-api/tree/master' />

                <Project name="Potential for wave energy in Brazil" date='2022-03 / 2022-06' description="This Streamlit project was first motivated by a
                university project where we had to research the potential energy generation for unusual forms of renewable energy. I applied
                a research paper based optimized computational method to a database of Brazil's historical wave measurements accross a variety
                of locations."
                link='https://github.com/guerchen/WaveEnergy' />

                <Project name="Design of a fixed bed laboratory scale CLC reactor" date='2020-07 / 2022-07' description="Alongside Raphael
                Claro and Prof. Sacomano as orientator, for a capstone project we designed Chemical Looping Combustion (CLC) rector, which is
                capable of generating energy through combustion coupled with carbon capture. We had the delight of being selected by our school's
                endowment fund to bring our design to reality. It was awesome getting to build something we designed ourselves
                and we also grew a lot from our mistakes."
                link='https://drive.google.com/file/d/1Hc4yPsMbNKENRTAB8fRl2Pj5izm5le4r/view?usp=sharing' />
            </div>
            <Footer />
        </div>
    );
  }
  
export { Projects };