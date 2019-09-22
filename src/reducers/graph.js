import {FETCH_GRAPH} from '../types';

const graph = (state = [], action) => {
  switch (action.type) {
    case FETCH_GRAPH:
      return [...action.payload];
    default:
      return state;
  }
};

export default graph;
