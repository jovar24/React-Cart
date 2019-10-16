import { ADD_TO_CART } from "../actions/products";
import mockData from "../../mockData";

const initialState = {
  products: mockData,
  cart: [],
  total: 0
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedItem = state.products.find(
        product => product.id === action.productId
      );
      return {
        ...state,
        cart: [...state.cart, addedItem],
        products: state.products.filter(
          product => product.id !== action.productId
        ),
        total: state.total + addedItem.price
      };
    default:
      return state;
  }
};

export default productsReducer;
