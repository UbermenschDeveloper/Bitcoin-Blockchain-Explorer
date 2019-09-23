import {FETCH_LAST_TRANSACTIONS} from '../constants/types';

const lastTransactions = (state = [], {type, payload}) => {
  switch (type) {
    case FETCH_LAST_TRANSACTIONS:
      return [
        ...state,
        ...payload,
      ];
    default:
      return state;
  }
};

export default lastTransactions;
