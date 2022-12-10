import React from 'react';
import './career_entry.css';

class CareerEntry extends React.Component {
    render () {
        return (
        <div>
            <div className='title-div'>
                <h3 className='post-title'>
                {this.props.work
                ? <div><a href={this.props.link} className='link' target="_blank" rel="noopener noreferrer">{this.props.company}</a> - {this.props.role}</div>
                : this.props.company
                }
                </h3>
            </div>
            <div className='place-date'>
                <p className='career-locale'>{this.props.locale}</p>
                <p className='post-date'>{this.props.period}</p>
            </div><br />
            <div className='content-div'>
                <p className='post-content'>{this.props.description}</p>
            </div>
        </div>)
    }

  }
  
  export {CareerEntry};