import {FETCH_BLOCK} from '../constants/types';

const block = (state = {}, {type, payload}) => {
  switch (type) {
    case FETCH_BLOCK:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default block;
