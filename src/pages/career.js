import React from 'react';
import './career.css';
import { Footer } from '../components/footer'
import { CareerEntry } from '../components/career_entry'

function Career() {
    return (
        <div className='content'>
            <div className='career-card'>
                <div className='career-text-card'> 
                    <h2 className='section-title'>Work</h2>

                    <CareerEntry work={true} link='https://www.idwall.co' company='idwall' role='Solutions Consultant'
                    locale='São Paulo, Brazil' period='2021-04 / Present'
                    description='Responsabilities include leading meetings with technical and non-technical customers, 
                    orchestrating proofs of concepts, and guiding the customer through API and SDK integrations. SQL
                    and Postman are used daily. Also, creation of internal tools, making analytical studies, using
                    techniques such as clustering, and deployment of cloud functions are frequent.'/>

                    <hr />

                    <CareerEntry work={true} link='https://www.getfabric.com' company='Fabric' role='R&D Mechanical Engineer Intern'
                    locale='Tel Aviv, Israel' period='2020-06 / 2020-07'
                    description='Had to digitally model parts for the robots using Solidworks, test and collect data on
                    electrical motors, and design jigs and devices for measurement and calibration of different parts
                    of the robots. The devices I designed were manufactured and are being used by the company.'/>

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

                    <CareerEntry work={true} link='http://ocw.mit.edu/6-0002F16' company='MIT OpenCourseWare'
                    locale='Online' period='2022-07 / 2022-09' role='MIT 6.0002 Introduction to Computational
                    Thinking and Data Science, Fall 2016.' description='Offered freely through Youtube.'/>

                </div>

                <div className='career-text-card'>
                    <h2 className='section-title'>Books</h2>

                    <CareerEntry work={true} link='https://www.amazon.com.br/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1492032646'
                    company='Hands-On Machine Learning with Scikit-Learn, Keras, and Tensorflow: Concepts, Tools, and Techniques to Build
                    Intelligent Systems' period='2022-07 / Present' role='Aurélien Géron.'/>

                </div>
            </div>
            <Footer />
        </div>
    );
  }
  
export { Career };