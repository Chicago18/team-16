import React from 'react';
import { connect } from 'react-redux';

import BlogPostsContainer from './blogPostsContainer';
import EventsContainer from './eventsContainer';
import Content from './content';

const ERGPage = ({ name, location, blogs, events }) => (
  <div>
    <h2>{name}</h2>
    <h3>{location}</h3>
    <BlogPostsContainer events={blogs}/>
    <EventsContainer events={events}/>
  </div>
);

const mapStateToProps = state => ({
  name: state.erg.name,
  location: state.erg.location,
  blogs: state.erg.blogs,
  events: state.erg.events,
});

const ERGPageC = connect(
  mapStateToProps,
  null,
)(ERGPage);

export default ERGPageC;
