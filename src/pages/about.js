import React from 'react';
import { Card } from '../components/card';
import './about.css';
import { Footer } from '../components/footer';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import fetchJsonp from "fetch-jsonp";

function About() {
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
            <Card />
            <footer>
            <Footer />
            </footer>
        </div>
    );
  }
  
export { About };