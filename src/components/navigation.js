import React from 'react';
import './navigation.css';
import { Link, useLocation } from "react-router-dom";

function NavigationBar() {
    const location = useLocation();
    console.log(location.pathname);

    return (
        <div className='TopBar'>
            <Link to="/" className={location.pathname==='/'  ? 'SelectedButton' : 'Buttons'}>
                Home
            </Link>
            <Link to='/career' className={location.pathname==='/career'  ? 'SelectedButton' : 'Buttons'}>
                Career
            </Link>
            <Link to='/projects' className={location.pathname==='/projects'  ? 'SelectedButton' : 'Buttons'}>
                Projects
            </Link>
            <Link to='/blog' className={location.pathname==='/blog'  ? 'SelectedButton' : 'Buttons'}>
                Blog
            </Link>
        </div>
    );
  }
  
  export default NavigationBar;