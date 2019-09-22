import {FETCH_GRAPH} from '../constants/types';

const graph = (state = [], action) => {
  switch (action.type) {
    case FETCH_GRAPH:
      return [
        ...state,
        ...action.payload,
      ];
    default:
      return state;
  }
};

export default graph;
