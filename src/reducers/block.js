import {FETCH_BLOCK} from '../types';

const block = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BLOCK:
      return {...action.payload};
    default:
      return state;
  }
};

export default block;
