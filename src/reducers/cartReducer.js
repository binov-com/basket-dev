import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actionTypes';

const initialState = {
  cart: [],
};

export default function (state = initialState, action) {
  let itemQuantity;
  switch (action.type) {
    case ADD_TO_CART:
      itemQuantity = (state.cart.find(item => item.id === action.payload) || {}).quantity + 1 || 1;
      return {
        ...state,
        cart: [
          ...state.cart.filter(item => item.id !== action.payload),
          { id: action.payload, quantity: itemQuantity },
        ],
      };
    case REMOVE_FROM_CART:
      itemQuantity = (
        state.cart.find(item => item.id === action.payload) &&
            state.cart.find(item => item.id === action.payload).quantity > 0) ?
        state.cart.find(item => item.id === action.payload).quantity - 1 : 0;
      return {
        ...state,
        cart: [
          ...state.cart.filter(item => item.id !== action.payload),
          { id: action.payload, quantity: itemQuantity },
        ],
      };
    default:
      return state;
  }
}
