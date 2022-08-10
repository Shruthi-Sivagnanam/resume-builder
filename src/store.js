import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { firstPageReducers } from "./reducers/detailsReducer";

const finalReducers = combineReducers({
  firstPageReducers: firstPageReducers,
});

const composeEnchansers = composeWithDevTools({});

const personal = sessionStorage.getItem("firstPage")
  ? JSON.parse(sessionStorage.getItem("firstPage"))
  : null;

const initialState = {
  firstPageReducers: {
    personal: personal,
  },
};

const store = createStore(
  finalReducers,
  initialState,
  composeEnchansers(applyMiddleware(thunk))
);

export default store;
