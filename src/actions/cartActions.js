import { ADD_TO_CART, REMOVE_TO_CART } from './actionTypes';


export const addToCart = productId => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: productId,
  });
};

export const removeToCart = productId => (dispatch) => {
  dispatch({
    type: REMOVE_TO_CART,
    payload: productId,
  });
};

