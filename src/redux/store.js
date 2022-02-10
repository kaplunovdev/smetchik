import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {paymentReducerPlitka} from "./paymentReducerPlitka";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    paymentPage: paymentReducerPlitka,
})

let store = createStore(
    reducers,
    compose(applyMiddleware(thunkMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )
);
window.store = store
export default store;


