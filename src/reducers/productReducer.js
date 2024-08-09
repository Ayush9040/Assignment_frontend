import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from '../actions/productActions';

const initialState = {
  items: [],
  error: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, items: action.payload };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
