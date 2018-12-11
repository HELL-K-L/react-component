import { createStore, applyMiddleware } from "redux";
import combineReducers from "./baseReducers.js";
import promiseMiddleware from "./middleware/promiseMiddleware";
if (module.hot) {
  module.hot.accept("./baseReducers", () => {
    const nextCombineReducers = require("./baseReducers").default;
    store.replaceReducer(nextCombineReducers);
  });
}

let store = createStore(combineReducers, applyMiddleware(promiseMiddleware));

export default store;
