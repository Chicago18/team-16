import React from 'react';

import Event from './event';

const Events = ({ events }) => (
  <div>
    <h1>Upcoming Events</h1>
    {
      events.map((event) => {
        <Event event={event} /> 
      })
    }
  </div>
);

export default Events;
