import {getStorage} from "../localStorage/localStorage";

const PLITKA_COUNT = 'PLITKA_COUNT';
const PLITKA_PRICE = 'PLITKA_PRICE';

const initialState = {
    plitkaCount: '',
    plitkaPrice: ''
}

export const paymentReducerPlitka = (state = initialState, action) => {
    switch (action.type) {
        case PLITKA_COUNT:
            return {...state, plitkaCount: action.count}
        case PLITKA_PRICE:
            return {...state, plitkaPrice: action.price}
        default:
            return state;
    }
}

export const setCountPlitka = (count) =>
    ({type: PLITKA_COUNT, count})

export const setPricePlitka = (price) =>
    ({type: PLITKA_PRICE, price})