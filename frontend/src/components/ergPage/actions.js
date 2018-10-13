import fetch from 'cross-fetch';

export const CONNECTION_FAILURE = 'CONNECTION_FAILURE';
export const connectionFailure = () => ({
  type: CONNECTION_FAILURE
});

export const requestErg = (ergId) => {
  return function (dispatch, getState) {
    return fetch(`/api/erg/${ergId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(
        response => response.json(),
        () => dispatch(connectionFailure())
      )
      .then((json) => {
        if (json.type !== CONNECTION_FAILURE) {
          dispatch(recieveErg(json));
        }
      });
  };
};

export const RECIEVE_ERG = 'RECIEVE_ERG';
export const recieveErg = (json) => ({
  type: RECIEVE_ERG,
  name: json.name,
  company: json.company,
  location: json.location,
  blogs: json.blogs,
  events: json.events,
});
