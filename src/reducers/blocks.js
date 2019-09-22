import {FETCH_BLOCKS} from '../constants/types';

const blocks = (state = [], action) => {
  switch (action.type) {
    case FETCH_BLOCKS:
      return [
        ...state,
        ...action.payload,
      ];
    default:
      return state;
  }
};

export default blocks;
