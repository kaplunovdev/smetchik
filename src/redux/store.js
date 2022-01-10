import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {paymentReducer} from "./paymentReducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    paymentPage: paymentReducer,
})

let store = createStore(
    reducers,
    compose(applyMiddleware(thunkMiddleware))
);
window.store = store
export default store;


//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()