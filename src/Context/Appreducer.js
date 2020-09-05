export default (state, action) => {
    switch(action.type) {
      case 'DEL-ITEM':
        return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }
      case 'ADD-ITEM':
        return {
          ...state,
          transactions: [action.payload, ...state.transactions]
        }
      default:
        return state;
    }
  }