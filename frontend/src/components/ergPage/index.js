import React from 'react';

import BlogPosts from './blogPostsContainer';
import Events from './events';
import Content from './content';

const ERGPage = ({ name, location }) => (
  <div>
    <h2>Name</h2>
    <h3>Location</h3>
    <BlogPostsContainer />
    <Events />
  </div>
);

export default ERGPage;
