import React from 'react';
import './blog.css';
import {Post} from '../components/blog_post'
import { Footer } from '../components/footer'

function Blog() {
    return (
        <div className='content'>
            <div className='blog-gray-card'>
                <Post title='First deploy!' date='2022-12-04' content="After initially struggling with gh-pages,
                I finally understood that I had to add npm packages to PATH. Now this site is deployed using Githubs's
                free hosting service. Hope to one day pick up and build this site a backend." />
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