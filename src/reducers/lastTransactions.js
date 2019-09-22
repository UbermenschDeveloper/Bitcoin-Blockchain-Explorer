import {FETCH_LAST_TRANSACTIONS} from '../constants/types';

const lastTransactions = (state = [], action) => {
  switch (action.type) {
    case FETCH_LAST_TRANSACTIONS:
      return [
        ...state,
        ...action.payload,
      ];
    default:
      return state;
  }
};

export default lastTransactions;
