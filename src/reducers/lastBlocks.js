import {FETCH_LAST_BLOCKS} from '../types';

const lastBlocks = (state = [], action) => {
  switch (action.type) {
    case FETCH_LAST_BLOCKS:
      return [...action.payload];
    default:
      return state;
  }
};

export default lastBlocks;
