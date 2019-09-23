import {FETCH_TRANSACTION} from '../constants/types';

const transaction = (state = {}, {type, payload}) => {
  switch (type) {
    case FETCH_TRANSACTION:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default transaction;
