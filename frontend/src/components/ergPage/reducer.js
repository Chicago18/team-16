import {
  RECIEVE_ERG,
} from './actions';

const defaultState = {
  name: 'JPM Pride',
  company: 'JP Morgan',
  location: 'Chicago, Illinois',
  blogs: [],
  events: [],
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case RECIEVE_ERG:
      return Object.assign({}, state, {
        name: action.name,
        company: action.company,
        location: action.location,
        blogs: action.blogs,
        events: action.events,
      });
    default:
      return state;
  }
}

export default reducer;
