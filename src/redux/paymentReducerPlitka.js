const COUNT = 'COUNT';
const PRICE = 'PRICE';
const IS_VISIBLE = 'IS_VISIBLE';
const CLEAR_DATA = 'CLEAR_DATA';

const initialState = {

    cards: [
        {
            title: 'Тротуарная плитка',
            count: '',
            price: '',
            isVisible: false,
        },
        {
            title: 'Поребрик',
            count: '',
            price: '',
            isVisible: false,
        },
    ]

}


export const paymentReducerPlitka = (state = initialState, action) => {
    switch (action.type) {
        case COUNT:
            return {
                ...state,
                cards: state.cards.map(el => {
                    if (el.title === action.title) {
                        return {
                            ...el,
                            count: action.count
                        }

                    }
                    return el
                })

            }


        case PRICE:
            return {
                ...state,
                cards: state.cards.map(el => {
                    if (el.title === action.title) {
                        return {
                            ...el,
                            price: action.price
                        }

                    }
                    return el
                })
            }

        case IS_VISIBLE:
            return {
                ...state, cards: state.cards.map(el => {
                    if (el.title === action.title) {
                        return {
                            ...el, isVisible: action.payload
                        }
                    }
                    return el
                })
            }
        case CLEAR_DATA:
            return {
                ...state, cards: state.cards.map(el => {
                    if (el.title === action.payload) {
                        return {
                            ...el,
                            count: '',
                            price: '',
                            isVisible: false
                        }
                    }
                    return el
                })

            }
        default:
            return state;
    }
}

export const actionCountPlitkaWork = (count, title) =>
    ({type: COUNT, count, title})

export const actionPricePlitkaWork = (price, title) =>
    ({type: PRICE, price, title})


export const actionIsVisiblePlitka = (payload, title) =>
    ({type: IS_VISIBLE, payload, title})

export const actionClearDataPlitka = ( payload) =>
    ({type: CLEAR_DATA,payload} )

