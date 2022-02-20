const PLITKA_PRICE_WORK = 'PLITKA_PRICE_WORK';
const PLITKA_PRICE_PESOK = 'PLITKA_PRICE_PESOK';
const PLITKA_PRICE_SHEBEN = 'PLITKA_PRICE_SHEBEN';
const PLITKA_PRICE_SMES = 'PLITKA_PRICE_SMES';
const PLITKA_PRICE_CEMENT = 'PLITKA_PRICE_CEMENT';
const PLITKA_COUNT_WORK = 'PLITKA_COUNT_WORK';

const initialState = {
    plitkaCount: '120',
    plitkaPrice: '800',
    plitkaPriceWork: '500',
    plitkaPricePesok: '650',
    plitkaPriceSheben: '750',
    plitkaPriceCement: '350',

}

export const reducerMaterials = (state = initialState, action) => {
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
        case PLITKA_PRICE_CEMENT:
            return {...state, plitkaPriceCement: action.price}
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



export const actionPriceCement = (price) =>
    ({type: PLITKA_PRICE_CEMENT, price})

export const actionPriceCementRatio = (count) =>
    ({type: PLITKA_PRICE_CEMENT_RATIO, count})

