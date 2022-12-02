import React from 'react';
import './blog_post.css';

class Post extends React.Component {
    constructor(props) {
        super(props);
      }
    render () {
        return (
        <div className='post-box'>
            <div className='title-div'>
                <h3 className='post-title'>{this.props.title}</h3>
            </div>
            <div className='content-div'>
                <p className='post-content'>{this.props.content}</p>
            </div>
            <p className='post-date'>{this.props.date}</p>
        </div>)
    }

  }
  
  export {Post};