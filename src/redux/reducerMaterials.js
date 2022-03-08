const PRICE_PLITKA = 'PRICE_PLITKA';
const PRICE_PESOK = 'PRICE_PESOK';
const PRICE_SHEBEN = 'PRICE_SHEBEN';
const PRICE_CEMENT = 'PRICE_CEMENT';
const PRICE_POREBRIK = 'PRICE_POREBRIK';
const IS_VISIBLE_MATERIALS = 'IS_VISIBLE_MATERIALS';
const CLEAR_DATA_MATERIALS = 'CLEAR_DATA_MATERIALS';

const initialState = {
    plitkaPrice: '',
    porebrikPrice: '',
    pricePesok: '',
    priceSheben: '',
    priceCement: '',
    isVisible:false

}

export const reducerMaterials = (state = initialState, action) => {
    switch (action.type) {
        case PRICE_POREBRIK:
            return {...state, porebrikPrice: action.price}
        case PRICE_PLITKA:
            return {...state, plitkaPrice: action.price}
        case PRICE_PESOK:
            return {...state, pricePesok: action.price}
        case PRICE_SHEBEN:
            return {...state, priceSheben: action.price}
        case PRICE_CEMENT:
            return {...state, priceCement: action.price}
        case IS_VISIBLE_MATERIALS:
            return {...state, isVisible: true}
        case CLEAR_DATA_MATERIALS:
            return {...state,
                plitkaPrice: '',
                porebrikPrice: '',
                pricePesok: '',
                priceSheben: '',
                priceCement: '',
                isVisible:false
            }
        default:
            return state;
    }
}

 export const actionIsVisibleMaterials = () =>
     ({type: IS_VISIBLE_MATERIALS})

export const actionPricePorebrik = (price) =>
    ({type: PRICE_POREBRIK, price})

export const actionPricePlitka = (price) =>
    ({type: PRICE_PLITKA, price})

export const actionPricePesok = (price) =>
    ({type: PRICE_PESOK, price})

export const actionPriceSheben = (price) =>
    ({type: PRICE_SHEBEN, price})

export const actionPriceCement = (price) =>
    ({type: PRICE_CEMENT, price})

export const actionClearDataMaterials = () =>
    ({type: CLEAR_DATA_MATERIALS})



