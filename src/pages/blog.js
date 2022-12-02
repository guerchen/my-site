import React from 'react';
import './blog.css';
import {Post} from '../components/blog_post'

function Blog() {
    return (
        <div className='content'>
            <div className='blog-gray-card'>
                <Post title='My first post' date='2022-12-01' content="I'm just very happy to have this space
                to share my thoughts and feelings. I plan on sometime creating an API operated MongoDB for updating
                this little blog without having to deploy. Of course it would just be easier to use twitter,
                but I sure wouldn't learn as much." />
                <Post title='Lorem ipsum' date='2022-12-01' content='While my guitar gently weeps' />
                <Post title='Lorem ipsum' date='2022-12-01' content='While my guitar gently weeps' />
                <Post title='Lorem ipsum' date='2022-12-01' content='While my guitar gently weeps' />
                <Post title='Lorem ipsum' date='2022-12-01' content='While my guitar gently weeps' />
                <Post title='Lorem ipsum' date='2022-12-01' content='While my guitar gently weeps' />
            </div>
        </div>
    );
  }
  
  export {Blog};