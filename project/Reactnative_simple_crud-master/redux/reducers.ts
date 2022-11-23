import { combineReducers } from "redux";
import {
  QUOTES_AVAILABLE,
  ADD_QUOTE,
  UPDATE_QUOTE,
  DELETE_QUOTE,
} from "./actions";

let dataState = {
  quotes: [],
};

const dataReducer = (
  state = dataState,
  action: { type: any; data: { quote?: any; quotes?: any } }
) => {
  switch (action.type) {
    case ADD_QUOTE: {
      let { quote } = action.data;
      let clone = JSON.parse(JSON.stringify(state.quotes));
      clone.unshift(quote); // adding th quote to the top of the array

      return { ...state, quotes: clone };
    }

    case QUOTES_AVAILABLE: {
      let { quotes } = action.data;
      return { ...state, quotes };
    }

    case UPDATE_QUOTE: {
      let { quote } = action.data;
      let clone = JSON.parse(JSON.stringify(state.quotes));

      // checking if quote already exists

      let index = clone.findIndex((item: { id: any }) => item.id === quote.id);

      // if quote exists, updating it

      if (index !== -1) clone[index] = quote;

      return { ...state, quotes: clone };
    }

    case DELETE_QUOTE: {
      let { id } = action.data;
      let clone = JSON.parse(JSON.stringify(state.quotes));
      const index = clone.findIndex((obj: { id: any; }) => obj.id === id);
      if (index !== -1) clone.splice(index, 1);
      return { ...state, quotes: clone };
    }
    default:

    return state;
  }
};


const rootReducer = combineReducers({dataReducer});

export default rootReducer;