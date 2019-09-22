import {FETCH_TRANSACTION} from '../constants/types';

const transaction = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TRANSACTION:
      return {...action.payload};
    default:
      return state;
  }
};

export default transaction;
