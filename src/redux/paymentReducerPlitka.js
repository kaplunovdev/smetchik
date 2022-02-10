const PLITKA_COUNT = 'PLITKA_COUNT';
const PLITKA_PRICE = 'PLITKA_PRICE';

const initialState = {
    plitkaCount: '123',
    plitkaPrice: '',
}

export const paymentReducerPlitka = (state = initialState, action) => {
    switch (action.type) {
        case PLITKA_COUNT:
            return {...state, plitkaCount: action.payload}
        default:
            return state;
    }
}

export const setCountPlitka = (value) =>
    ({type: PLITKA_COUNT, value})