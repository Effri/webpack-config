/** @format */

import { combineReducers } from "redux";

function reduceExample(state = 0, action) {
  console.log("Prev state = ", state);
  switch (action.type) {
    case "SOME_TYPE":
      return state + 1000;
      break;

    default:
      return state + 1;
      break;
  }
}

export const reducers = combineReducers({ reduceExample });
