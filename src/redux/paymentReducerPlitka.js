const PLITKA_COUNT_WORK = 'PLITKA_COUNT_WORK';
const PLITKA_PRICE_WORK = 'PLITKA_PRICE_WORK';
const PLITKA_PRICE = 'PLITKA_PRICE';
const PLITKA_PRICE_PESOK = 'PLITKA_PRICE_PESOK';
const PLITKA_PRICE_SHEBEN = 'PLITKA_PRICE_SHEBEN';
const PLITKA_PRICE_CEMENT = 'PLITKA_PRICE_CEMENT';
const PLITKA_IS_VISIBLE = 'PLITKA_IS_VISIBLE';
const CLEAR_DATA_PLITKA = 'CLEAR_DATA_PLITKA';

const initialState = {
    plitkaCount: '',
    plitkaPriceWork: '',
    isVisiblePlitka: false

}



export const paymentReducerPlitka = (state = initialState, action) => {
    switch (action.type) {
        case PLITKA_COUNT_WORK:
            return {...state, plitkaCount: action.count}
        case PLITKA_PRICE_WORK:
            return {...state, plitkaPriceWork: action.price}

        case PLITKA_IS_VISIBLE:
            return {...state, isVisiblePlitka: action.payload}
        case CLEAR_DATA_PLITKA:
            return {...state,
                plitkaCount:'',
                plitkaPriceWork:'',
                isVisiblePlitka: false
            }
        default:
            return state;
    }
}

export const actionCountPlitkaWork = (count) =>
    ({type: PLITKA_COUNT_WORK, count})

export const actionPricePlitkaWork = (price) =>
    ({type: PLITKA_PRICE_WORK, price})


export const actionIsVisiblePlitka = (payload) =>
    ({type: PLITKA_IS_VISIBLE, payload})

export const actionClearDataPlitka = () =>
    ({type: CLEAR_DATA_PLITKA})

