import React from 'react';

const Event = ({ event }) => (
  <div>
    <h1>{event.name}</h1>
    <p>{event.desc}</p>
    <div>
      {
        event.users.map((user) => {
          name
        })
      }
    </div>
  </div>
)

export default Event;
