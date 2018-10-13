import React from 'react';
import { connect } from 'react-redux';

import BlogPostsContainer from './blogPostsContainer';
import EventsContainer from './eventsContainer';
import Content from './content';

import styles from './style.css';

const ERGPage = ({ name, location, blogs, events }) => (
  <div>
    <div className={styles.banner}/>
    <div className={styles.infoCont}>
      <h2 className={styles.name}>{name}</h2>
      <h3 className={styles.loc}>{location}</h3>
    </div>
    <div className={styles.body}>
      <BlogPostsContainer blogs={blogs}/>
      <EventsContainer events={events}/>
    </div>
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
