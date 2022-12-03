import React from 'react';
import './career.css';

function Career() {

    return (
        <div className='content'>
            <div className='career-card'>
                <div className='work-text-card'> 
                <h2 className='section-title'>Work</h2>
                    <div className='title-div'>
                        <h3 className='post-title'>
                            <a href='https://www.idwall.co' className='link' target="_blank" rel="noopener noreferrer">idwall</a> - Solutions Consultant
                        </h3>
                    </div>
                    <div>
                        <p className='post-date'>2021-04 / Present</p>
                    </div>
                    <br />
                    <div className='content-div'>
                        <p className='post-content'>
                        Responsabilities include leading meetings with technical and non-technical customers, 
                        setting up product to address their needs, orchestrating proofs of concepts, and guiding the customer 
                        through API and SDK integrations. SQL and Postman are used daily. Also, creation of internal tools, 
                        making analytical studies, using techniques such as clustering, and deployment of cloud functions are frequent. </p>
                    </div>
                    <hr />
                    <br />
                    <div className='title-div'>
                        <h3 className='post-title'>
                            <a href='https://www.getfabric.com' className='link' target="_blank" rel="noopener noreferrer">Fabric</a> - R&D Mechanical Engineer Intern
                        </h3>
                    </div>
                    <div>
                        <p className='post-date'>2020-06 / 2020-07</p>
                    </div>
                    <br />
                    <div className='content-div'>
                        <p className='post-content'>Had to digitally model parts for the robots 
                        using Solidworks, test and collect data on electrical motors, and design jigs and devices 
                        for measurement and calibration of different parts of the robots. The devices I designed 
                        were manufactured and are being used by the company.</p>
                    </div><br />
                </div>
                <div className='education-text-card'>
                    <h2 className='section-title'>Education</h2>
                    <div className='title-div'>
                        <h3 className='post-title'>Universidade de São Paulo</h3>
                    </div>
                    <div>
                        <p className='post-date'>2017-03 / 2022-09</p>
                    </div>
                    <br />
                    <div className='content-div'>
                        <p className='post-content'>Mechanical Engineering degree with an emphasys on Renewable Energies at
                        the Polytechnic School of Enginnering.</p>
                    </div>
                    <hr />
                    <br />
                    <div className='title-div'>
                        <h3 className='post-title'>Tel Aviv University</h3>
                    </div>
                    <div>
                        <p className='post-date'>2020-01 / 2020-07</p>
                    </div>
                    <br />
                    <div className='content-div'>
                        <p className='post-content'>Entrepreneurship and Innovation spring semester study abroad.</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
export { Career };