import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const initialState = {
  counter: 0,
  counter2: 1,
  add: 1,
  name: "maaz",
  surname: "hasan",
  add: "bhopal"
};
function reducer(state = initialState, action) {
  console.log(state);
  if (action.type === "inc") {
    return {
      counter: state.counter + 1
    };
  }
  if (action.type === "dec") {
    return {
      counter: state.counter - 1
    };
  }
  return state;
}
function reducer2(state = initialState, action) {
  if (action.type === "inc2") {
    return {
      counter: state.counter + 1
    };
  }
  if (action.type === "dec22") {
    return {
      counter2: state.counter2 - 1
    };
  }
  return state;
}
const all = combineReducers({
  red1: reducer,
  red2: reducer2
});
const store = createStore(
  all,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
