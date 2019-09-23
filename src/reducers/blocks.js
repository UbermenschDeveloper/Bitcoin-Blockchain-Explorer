import {FETCH_BLOCKS} from '../constants/types';

const blocks = (state = [], {type, payload}) => {
  switch (type) {
    case FETCH_BLOCKS:
      return [
        ...state,
        ...payload,
      ];
    default:
      return state;
  }
};

export default blocks;
