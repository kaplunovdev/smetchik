import {getStorage} from "../localStorage/localStorage";

const PLITKA_COUNT_WORK = 'PLITKA_COUNT_WORK';
const PLITKA_PRICE_WORK = 'PLITKA_PRICE_WORK';
const PLITKA_PRICE = 'PLITKA_PRICE';
const PLITKA_PRICE_PESOK = 'PLITKA_PRICE_PESOK';
const PLITKA_PRICE_SHEBEN = 'PLITKA_PRICE_SHEBEN';
const PLITKA_PRICE_SMES = 'PLITKA_PRICE_SMES';
const PLITKA_PRICE_CEMENT = 'PLITKA_PRICE_CEMENT';
const PLITKA_PRICE_CEMENT_RATIO = 'PLITKA_PRICE_CEMENT_RATIO';

const initialState = {
    plitkaCount: '120',
    plitkaPrice: '800',
    plitkaPriceWork: '500',
    plitkaPricePesok: '650',
    plitkaPriceSheben: '750',
    plitkaSmecHeight: '2,5',
    plitkaPriceCement: '350',
    plitkaPriceCementRatio: '5',

}

export const paymentReducerPlitka = (state = initialState, action) => {
    switch (action.type) {
        case PLITKA_COUNT_WORK:
            return {...state, plitkaCount: action.count}
        case PLITKA_PRICE_WORK:
            return {...state, plitkaPriceWork: action.price}
        case PLITKA_PRICE:
            return {...state, plitkaPrice: action.price}
        case PLITKA_PRICE_PESOK:
            return {...state, plitkaPricePesok: action.price}
        case PLITKA_PRICE_SHEBEN:
            return {...state, plitkaPriceSheben: action.price}
        case PLITKA_PRICE_SMES:
            return {...state, plitkaSmec: action.price}
        case PLITKA_PRICE_CEMENT:
            return {...state, plitkaPriceCement: action.price}
        case PLITKA_PRICE_CEMENT_RATIO:
            return {...state, plitkaPriceCementRatio: action.count}
        default:
            return state;
    }
}

export const actionCountPlitkaWork = (count) =>
    ({type: PLITKA_COUNT_WORK, count})

export const actionPricePlitkaWork = (price) =>
    ({type: PLITKA_PRICE_WORK, price})

export const actionPricePlitka = (price) =>
    ({type: PLITKA_PRICE, price})

export const actionPricePesok = (price) =>
    ({type: PLITKA_PRICE_PESOK, price})

export const actionPriceSheben = (price) =>
    ({type: PLITKA_PRICE_SHEBEN, price})

export const actionPriceSmec = (price) =>
    ({type: PLITKA_PRICE_SMES, price})

export const actionPriceCement = (price) =>
    ({type: PLITKA_PRICE_CEMENT, price})

export const actionPriceCementRatio = (count) =>
    ({type: PLITKA_PRICE_CEMENT_RATIO, count})

