import React from 'react';
import './blog.css';
import {Post} from '../components/blog_post'
import { Footer } from '../components/footer'

function Blog() {
    return (
        <div className='content'>
            <div className='blog-gray-card'>
                <Post title='Hello world!' date='2022-12-01' content="I'm just very happy to have this space
                to share my thoughts and feelings. I plan on sometime creating an API operated MongoDB for updating
                this little blog without having to deploy. Of course it would just be easier to use twitter,
                but I sure wouldn't learn as much." />
            </div>
            <Footer />
        </div>
    );
  }
  
  export {Blog};