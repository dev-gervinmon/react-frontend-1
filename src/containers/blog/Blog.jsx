import React from 'react'
import { Article } from '../../components';
import './blog.css';

import { blog01, blog02, blog03, blog04, blog05 } from './import';

const Blog = () => {
  const blogs = [blog02, blog03, blog04, blog05];
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="Jan. 1, 2023" title="GPT-3 and Open AI is the future. Let us explore how it is?"/>
        </div>
        <div className="gpt3__blog-container_groupB">
          { blogs.map((blog, index) => {
            return (
              <Article imgUrl={blog} key={index} date="Jan. 1, 2023" title="GPT-3 and Open AI is the future. Let us explore how it is?"/>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default Blog