import React from 'react';
import './blog.css';
import {Post} from '../components/blog_post'
import { Footer } from '../components/footer'

function Blog() {
    return (
        <div className='content'>
            <div className='blog-gray-card'>
                <Post title='A lil chat with Chat-GPT' date='2022-12-19' content="After being recommended by Youtube's
                algorithm a video about Chat-GPT and also listening about it in the podcast Osim Tochna, I've decided to give
                OpenAI's Chat-GPT a try. I am throughly impressed. I asked it questions on how to implement
                lazy execution using React and how to create a simple CRUD API using FastAPI. The answers were spot on!
                It even answered my queries in Portuguese and Hebrew, albeit making some little mistakes.
                Fascinating! I hope to one day be able to collaborate in a project such as this. That's what draws me to AI." />

                <Post title='Review of In Search of Identity: an Autobiography, by Anwar el-Sadat' date='2022-12-08' 
                content="Although this autobiography felt self promotional at times, it was a book that I enjoyed reading untill the
                end. First of all, it gave me a glimpse into Egypt's daily life under the British regime, and by extent,
                a little more insight into my grandparent's life and locations they frequented until they had to
                flee Egypt. By contrasting Sadat's memories with Moshe Dayan's history, noticing how they descibe in greater detail
                their military successes, I was able to understand why 'History is written by the winners.' It is only natural
                that people, in the name of pride, would boast successes but also downplay failures. Lastly, it was
                interesting seeing a different perspective on the Arab-Israeli conflict and I even understand Sadat's
                logic when he declared war on Israel, in the name of peace. After all, no one would care to make a peace
                agreement with a powerless and humiliated nation, such as Egypt after 1967. It's a pitty Sadat and Israel
                couldn't find a way to peace then without bloodshed." />

                <Post title='iOS compatibility bug fixed!' date='2022-12-06' content="Yuval Noah Harari wrote in his book
                Sapiens that our species was able to gain an edge over other hominids because of our capability for cooperation
                at a global scale. I witnessed this phenomenum today when a stranger on Stack Overflow helped me fix this site's
                navigation bar on iOS devices, where button text was getting cropped." />

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