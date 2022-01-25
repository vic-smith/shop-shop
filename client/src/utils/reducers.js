import { useReducer } from "react";

import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    // if action type is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };
      // if action type is the value of `UPDATE_CATEGORIES`, return a new state object with an updated categorires array
      case UPDATE_CATEGORIES:
        return {
          ...state,
          categories: [...action.categories]
        };
      // if action type is the value of `UPDATED_CURRENT _CATEGORY`, return a new state object with an updated curren_categories array
      case UPDATE_CURRENT_CATEGORY:
        return { 
          ...state,
          currentCategory: action.currentCategory
        };

      //if it's none of these actions, do not update state atall and keep things the same!
      default:
        return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}