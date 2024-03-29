import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { paymentReducerPlitka } from "./paymentReducerPlitka";
import thunkMiddleware from "redux-thunk";
import { reducerMaterials } from "./reducerMaterials";

const reducers = combineReducers({
  paymentPage: paymentReducerPlitka,
  materialPage: reducerMaterials,
});

let store = createStore(
  reducers,
  compose(
    applyMiddleware(thunkMiddleware),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
