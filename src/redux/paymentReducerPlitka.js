const PLITKA_COUNT_WORK = 'PLITKA_COUNT_WORK';
const PLITKA_PRICE_WORK = 'PLITKA_PRICE_WORK';
const PLITKA_PRICE = 'PLITKA_PRICE';
const PLITKA_PRICE_PESOK = 'PLITKA_PRICE_PESOK';
const PLITKA_PRICE_SHEBEN = 'PLITKA_PRICE_SHEBEN';
const PLITKA_PRICE_SMES = 'PLITKA_PRICE_SMES';
const PLITKA_PRICE_CEMENT = 'PLITKA_PRICE_CEMENT';
const PLITKA_PRICE_CEMENT_RATIO = 'PLITKA_PRICE_CEMENT_RATIO';
const PLITKA_IS_VISIBLE = 'PLITKA_IS_VISIBLE';
const CLEAR_DATA = 'CLEAR_DATA';

const initialState = {
    plitkaCount: '',
    plitkaPrice: '',
    plitkaPriceWork: '',
    plitkaPricePesok: '',
    plitkaPriceSheben: '',
    plitkaSmecHeight: '',
    plitkaPriceCement: '',
    plitkaPriceCementRatio: '',
    isVisiblePlitka: false

}

// export const clearReducer = (state, action) => {
//     if (action.type === 'CLEAR_DATA') {
//         state = undefined;
//     }
//
//     return paymentReducerPlitka(state, action);
// };

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
        case PLITKA_IS_VISIBLE:
            return {...state, isVisiblePlitka: action.payload}
        case CLEAR_DATA:
            return {...state,
                plitkaCount:'',
                plitkaPriceWork:'',
                plitkaPrice:'',
                plitkaPricePesok:'',
                plitkaPriceSheben:'',
                plitkaSmec:'',
                plitkaPriceCementRatio:'',
            }
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

export const actionIsVisible = (payload) =>
    ({type: PLITKA_IS_VISIBLE, payload})

export const clearData = () =>
    ({type: CLEAR_DATA})

