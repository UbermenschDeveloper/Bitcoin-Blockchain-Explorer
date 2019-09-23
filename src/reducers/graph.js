import {FETCH_GRAPH} from '../constants/types';

const graph = (state = [], {type, payload}) => {
  switch (type) {
    case FETCH_GRAPH:
      return [
        ...state,
        ...payload,
      ];
    default:
      return state;
  }
};

export default graph;
