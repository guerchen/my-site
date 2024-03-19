import React, { useEffect } from 'react';
import './career.css';
import { Footer } from '../components/footer';
import { CareerEntry } from '../components/career_entry';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import fetchJsonp from "fetch-jsonp";


function Career() {
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
            <div className='career-card'>
                <div className='career-text-card'> 
                    <h2 className='section-title'>Work</h2>

                    <CareerEntry work={true} link='https://www.idwall.co' company='idwall' role='Data Scientist'
                    locale='São Paulo, Brazil' period='2023-08 / Present'
                    description='As a Data Scientist, my responsabilities include producing varied studies, transforming data with ETL pipelines,
                    and creating models based on transformed data. The main tools used are Databricks, SQL, PySpark, Apache Airflow, and DBT.'/>

                    <hr />
                    
                    <CareerEntry work={true} link='https://www.idwall.co' company='idwall' role='Solutions Consultant'
                    locale='São Paulo, Brazil' period='2021-04 / 2023-08'
                    description="Responsible for software architecture definition and guiding client's tech teams through API and SDK integrations, but also
                    being able to present technical concepts non-technical stakeholders. Quickly became technical reference in
                    the team. I’ve developed solutions to many business problems that involve sripting, data modeling and optimization.
                    Besides, also developed an intrapreneurship project that awarded me a business trip to Estonia."/>

                    <hr />

                    <CareerEntry work={true} link='https://www.getfabric.com' company='Fabric' role='R&D Mechanical Engineer Intern'
                    locale='Tel Aviv, Israel' period='2020-06 / 2020-07'
                    description='Had to digitally model parts for the robots using Solidworks, test and collect data on
                    electrical motors, and design jigs and devices for measurement and calibration of different parts
                    of the robots. The devices I designed were manufactured and are being used by the company.'/>

                    <hr />

                    <CareerEntry work={true} link='https://www.livance.com.br/' company='Livance' role='Summer Intern'
                    locale='São Paulo, Brazil' period='2018-12 / 2019-02'
                    description='Worked as a Full-Stack Web Developer. My main project was upgrading and redesigning
                    the self-check-in and payment station that customers interact with when arriving and leaving the
                    medical offices. Used the Vue.js framework (includes JavaScript, HTML, and CSS) for the Front-end
                    and ASP.NET Core for the Back-end (uses C#).'/>


                </div>
                <div className='career-text-card'>
                    <h2 className='section-title'>Education</h2>

                    <CareerEntry work={false} company='Universidade de São Paulo'
                    locale='São Paulo, Brazil' period='2017-03 / 2022-09'
                    description='Mechanical Engineering degree with an emphasys on Renewable Energies at
                    the Polytechnic School of Enginnering.'/>

                    <hr />

                    <CareerEntry work={false} company='Tel Aviv University'
                    locale='Tel Aviv, Israel' period='2020-01 / 2020-07'
                    description='Entrepreneurship and Innovation spring semester study abroad.'/>

                </div>

                <div className='career-text-card'>
                    <h2 className='section-title'>Courses & Certificates</h2>

                    <CareerEntry work={true} link='https://drive.google.com/file/d/169cEnuE7Vsc-24DhDYDY4_V-X3YNiP3k/view'
                    company='Kaggle'
                    locale='Online' period='2023-04' role='Advanced SQL'
                    description=''/>

                    <CareerEntry work={true} link='https://drive.google.com/file/d/1l8_FlcbpCGC7zQjv38U5-JcdOri3B6jF/view?usp=sharing'
                    company='Databricks'
                    locale='Online' period='2023-01' role='Introduction to Apache Spark Architecture'
                    description=''/>

                    <CareerEntry work={true} link='https://drive.google.com/file/d/1hEtcP8Klvt7WDbHX2OxHhgT5HPdV7VGL/view?usp=sharing'
                    company='Databricks'
                    locale='Online' period='2023-01' role='Apache Spark Programming with Databricks'
                    description=''/>

                    <CareerEntry work={true} link='http://ocw.mit.edu/6-0002F16' company='MIT OpenCourseWare'
                    locale='Online' period='2022-07 / 2022-09' role='MIT 6.0002 Introduction to Computational
                    Thinking and Data Science, Fall 2016.' description=''/>

                </div>

                <div className='career-text-card'>
                    <h2 className='section-title'>Books</h2>

                    <CareerEntry work={true} link='https://www.amazon.com.br/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1492032646'
                    company='Hands-On Machine Learning with Scikit-Learn, Keras, and Tensorflow: Concepts, Tools, and Techniques to Build
                    Intelligent Systems' period='2022-07 / 2023-01' role='Aurélien Géron'/>

                    <CareerEntry work={true} link='https://www.amazon.com.br/Practical-Statistics-Scientists-Peter-Bruce/dp/1491952962'
                    company='Practical Statistics for Data Scientists' period='2023-07 / 2024-02' role='Peter Bruce, Andrew Bruce'/>

                </div>
            </div>
            <Footer />
        </div>
    );
  }
  
export { Career };