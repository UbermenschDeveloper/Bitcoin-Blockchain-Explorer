const lastTransactions = (state = [], action) => {
  switch (action.type) {
    case "FETCH_LAST_TRANSACTIONS":
      return [...action.payload];
    default:
      return state;
  }
};

export default lastTransactions;
