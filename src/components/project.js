import React from 'react';
import './project.css';

class Project extends React.Component {
    render () {
        return (
        <div className='project-box'>
            <div className='title-div'>
                <h3 className='post-title'>{this.props.name}</h3>
            </div>
            <div className='place-date'>
                <p className='post-date'>{this.props.date}</p>
            </div><br />
            <div className='content-div'>
                <p className='post-content'>{this.props.description}</p>
            </div>
            <a href={this.props.link} target="_blank" rel="noopener noreferrer" className='furtherinfo'>Further info</a>
        </div>)
    }

  }
  
  export {Project};