import shop from '../api/shop';
import { PRODUCT_LOADING, GET_PRODUCTS } from './actionTypes';

export const setPostLoading = () => ({
  type: PRODUCT_LOADING,
});

export const getProducts = () => (dispatch) => {
  dispatch(setPostLoading());
  shop.getProducts((products) => {
    dispatch({
      type: GET_PRODUCTS,
      payload: products,
    });
  });
};

